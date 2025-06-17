import requests
from bs4 import BeautifulSoup
import json
import re
import time
from urllib.parse import urljoin, urlparse

def get_actual_image_url(file_page_url, session):
    """Get the actual image URL from the File: page"""
    try:
        response = session.get(file_page_url)
        response.raise_for_status()
        
        soup = BeautifulSoup(response.content, 'html.parser')
        
        # Look for the actual image in different possible locations
        # Method 1: Look for the main image display
        file_link = soup.find('div', class_='fullImageLink')
        if file_link:
            img_tag = file_link.find('img')
            if img_tag and img_tag.get('src'):
                return urljoin(file_page_url, img_tag.get('src'))
        
        # Method 2: Look for original file link
        original_file = soup.find('a', string='Original file')
        if original_file and original_file.get('href'):
            return urljoin(file_page_url, original_file.get('href'))
        
        # Method 3: Look for any img tag in the file history
        file_history = soup.find('table', class_='filehistory')
        if file_history:
            img_tag = file_history.find('img')
            if img_tag and img_tag.get('src'):
                return urljoin(file_page_url, img_tag.get('src'))
        
        # Method 4: Look for the first large image on the page
        main_img = soup.find('img', {'src': True})
        if main_img and main_img.get('src'):
            src = main_img.get('src')
            # Make sure it's not a small thumbnail or icon
            if 'thumb' not in src.lower() and any(size in src for size in ['256', '128', 'px']):
                return urljoin(file_page_url, src)
        
        return None
        
    except Exception as e:
        print(f"Error getting image URL from {file_page_url}: {e}")
        return None

def extract_images_from_category(category_url, session):
    """Extract all image URLs from a wiki category page"""
    images = []
    
    try:
        response = session.get(category_url)
        response.raise_for_status()
        
        soup = BeautifulSoup(response.content, 'html.parser')
        
        # Find all image links in the Media in category section
        media_section = soup.find('div', {'id': 'mw-category-media'})
        if media_section:
            # Find all gallery items
            gallery_items = media_section.find_all('li', class_='gallerybox')
            for item in gallery_items:
                # Find the image link
                link = item.find('a')
                if link and link.get('href'):
                    # Get the File: page URL
                    href = link.get('href')
                    if '/File:' in href:
                        file_page_url = urljoin(category_url, href)
                        filename = href.split('/File:')[-1]
                        
                        print(f"Processing {filename}...")
                        
                        # Get the actual image URL
                        image_url = get_actual_image_url(file_page_url, session)
                        
                        if image_url:
                            # Get image info from the gallery text
                            gallery_text = item.find('div', class_='gallerytext')
                            if gallery_text:
                                text = gallery_text.get_text().strip()
                                # Extract dimensions and file size
                                dimensions_match = re.search(r'(\d+)\s*×\s*(\d+)', text)
                                size_match = re.search(r'(\d+(?:\.\d+)?)\s*(KB|MB)', text)
                                
                                width = int(dimensions_match.group(1)) if dimensions_match else None
                                height = int(dimensions_match.group(2)) if dimensions_match else None
                                size = size_match.group(0) if size_match else None
                                
                                images.append({
                                    'filename': filename,
                                    'url': image_url,
                                    'file_page_url': file_page_url,
                                    'width': width,
                                    'height': height,
                                    'size': size,
                                    'category': category_url.split('/')[-1].replace('Category:', '')
                                })
                        
                        # Be respectful to the server
                        time.sleep(0.5)
        
        # Check for pagination (next page)
        next_page = soup.find('a', string='next page')
        if next_page and next_page.get('href'):
            next_url = urljoin(category_url, next_page.get('href'))
            print(f"Following pagination to: {next_url}")
            time.sleep(1)  # Be respectful to the server
            images.extend(extract_images_from_category(next_url, session))
            
    except Exception as e:
        print(f"Error processing {category_url}: {e}")
    
    return images

def get_wiki_image_urls():
    """Main function to extract all COI wiki image URLs"""
    
    # Create session for connection reuse
    session = requests.Session()
    session.headers.update({
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
    })
    
    # Define image categories to scrape (start with a smaller set for testing)
    categories = [
        'https://wiki.coigame.com/Category:Building_images',
        'https://wiki.coigame.com/Category:Icons',
        'https://wiki.coigame.com/Category:Designation_images',
    ]
    
    all_images = []
    
    for category_url in categories:
        print(f"Processing category: {category_url}")
        images = extract_images_from_category(category_url, session)
        all_images.extend(images)
        print(f"Found {len(images)} images in this category")
        time.sleep(2)  # Be respectful to the server
    
    # Remove duplicates based on filename
    unique_images = {}
    for img in all_images:
        if img['filename'] not in unique_images:
            unique_images[img['filename']] = img
        else:
            # Merge categories if the same image appears in multiple categories
            existing = unique_images[img['filename']]
            if isinstance(existing['category'], str):
                existing['category'] = [existing['category']]
            if img['category'] not in existing['category']:
                existing['category'].append(img['category'])
    
    final_images = list(unique_images.values())
    
    return final_images

def save_image_urls(images, filename='coi_wiki_images_fixed.json'):
    """Save the extracted image URLs to a JSON file"""
    
    # Create summary statistics
    summary = {
        'total_images': len(images),
        'categories': {},
        'file_types': {},
        'total_estimated_size_mb': 0
    }
    
    for img in images:
        # Count by category
        categories = img['category'] if isinstance(img['category'], list) else [img['category']]
        for cat in categories:
            summary['categories'][cat] = summary['categories'].get(cat, 0) + 1
        
        # Count by file type
        ext = img['filename'].split('.')[-1].lower()
        summary['file_types'][ext] = summary['file_types'].get(ext, 0) + 1
        
        # Estimate total size (rough calculation)
        if img['size']:
            size_str = img['size']
            if 'KB' in size_str:
                size_mb = float(re.findall(r'(\d+(?:\.\d+)?)', size_str)[0]) / 1024
            elif 'MB' in size_str:
                size_mb = float(re.findall(r'(\d+(?:\.\d+)?)', size_str)[0])
            else:
                size_mb = 0
            summary['total_estimated_size_mb'] += size_mb
    
    # Create the final data structure
    data = {
        'summary': summary,
        'images': images,
        'extraction_info': {
            'extracted_at': time.strftime('%Y-%m-%d %H:%M:%S UTC', time.gmtime()),
            'source': 'Captain of Industry Wiki (wiki.coigame.com)',
            'note': 'Images are subject to Creative Commons Attribution-NonCommercial-ShareAlike license',
            'method': 'Direct extraction from File: pages'
        }
    }
    
    # Save to JSON file
    with open(filename, 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=2, ensure_ascii=False)
    
    print(f"\nExtraction complete!")
    print(f"Total images found: {summary['total_images']}")
    print(f"Categories: {list(summary['categories'].keys())}")
    print(f"File types: {list(summary['file_types'].keys())}")
    print(f"Estimated total size: {summary['total_estimated_size_mb']:.1f} MB")
    print(f"Data saved to: {filename}")
    
    return data

if __name__ == "__main__":
    print("Extracting image URLs from Captain of Industry Wiki...")
    print("This will take longer as we need to visit each File: page to get the correct URLs...")
    
    images = get_wiki_image_urls()
    
    if images:
        save_image_urls(images)
        
        print("\nExample image URLs:")
        for i, img in enumerate(images[:5]):
            print(f"{i+1}. {img['filename']} ({img['size']}) - {img['url']}")
        
        print("\nYou can now download these images using the URLs in the JSON file.")
        print("Note: Please respect the wiki's terms of service and licensing when using these images.")
    else:
        print("No images were extracted. Please check the wiki structure.") 