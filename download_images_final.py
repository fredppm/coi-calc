#!/usr/bin/env python3
"""
Download all images from COI wiki based on extracted URLs.
This script downloads images in batches with proper error handling and organization.
"""

import json
import os
import requests
import time
from pathlib import Path
from urllib.parse import urlparse
import argparse

def create_directories():
    """Create necessary directories for organizing images."""
    directories = [
        'images',
        'images/icons',
        'images/buildings', 
        'images/designations',
        'images/other'
    ]
    
    for directory in directories:
        Path(directory).mkdir(parents=True, exist_ok=True)
        print(f"✅ Created directory: {directory}")

def get_image_category(filename, category):
    """Determine the appropriate subdirectory for an image."""
    filename_lower = filename.lower()
    
    if 'icon' in category.lower():
        return 'icons'
    elif 'designation' in category.lower():
        return 'designations'
    elif 'building' in category.lower():
        return 'buildings'
    else:
        return 'other'

def sanitize_filename(filename):
    """Clean filename to be filesystem-safe."""
    # Replace problematic characters
    sanitized = filename.replace('%27', "'").replace('%26', '&').replace('%28', '(').replace('%29', ')')
    
    # Remove any remaining URL encoding
    import urllib.parse
    sanitized = urllib.parse.unquote(sanitized)
    
    # Replace characters that might cause issues on Windows
    unsafe_chars = '<>:"/\\|?*'
    for char in unsafe_chars:
        sanitized = sanitized.replace(char, '_')
    
    return sanitized

def download_image(url, filepath, session, max_retries=3):
    """Download a single image with error handling and retries."""
    for attempt in range(max_retries):
        try:
            response = session.get(url, stream=True, timeout=30)
            response.raise_for_status()
            
            # Write the image data
            with open(filepath, 'wb') as f:
                for chunk in response.iter_content(chunk_size=8192):
                    f.write(chunk)
            
            file_size = os.path.getsize(filepath)
            return True, file_size
            
        except Exception as e:
            if attempt < max_retries - 1:
                print(f"  ⚠️  Attempt {attempt + 1} failed, retrying in 2 seconds: {e}")
                time.sleep(2)
            else:
                return False, str(e)
    
    return False, "Max retries exceeded"

def download_coi_images(json_file='coi_wiki_images_working.json', start_from=0, limit=None, test_mode=False):
    """Download all images from the extracted JSON file."""
    
    # Load the extracted image data
    try:
        with open(json_file, 'r', encoding='utf-8') as f:
            data = json.load(f)
    except FileNotFoundError:
        print(f"❌ Error: {json_file} not found. Please run the extraction script first.")
        return
    
    images = data['images']
    total_images = len(images)
    
    if test_mode:
        limit = min(10, total_images)
        print(f"=== TEST MODE ===")
        print(f"Downloading first {limit} images for testing...")
    else:
        print(f"=== FULL DOWNLOAD MODE ===")
        print(f"Total images to download: {total_images}")
    
    if limit:
        images = images[start_from:start_from + limit]
    else:
        images = images[start_from:]
    
    # Create directories
    create_directories()
    
    # Setup session for downloads
    session = requests.Session()
    session.headers.update({
        'User-Agent': 'COI-Image-Downloader/1.0 (Educational purposes)'
    })
    
    # Download statistics
    downloaded = 0
    failed = 0
    total_size = 0
    skipped = 0
    
    print(f"\nStarting downloads from index {start_from}...")
    print("=" * 50)
    
    for i, image in enumerate(images, start_from + 1):
        filename = image['filename']
        url = image['url']
        category = image['category']
        
        # Determine subdirectory
        subdir = get_image_category(filename, category)
        
        # Create safe filename
        safe_filename = sanitize_filename(filename)
        filepath = Path('images') / subdir / safe_filename
        
        # Skip if already exists
        if filepath.exists():
            skipped += 1
            print(f"[{i:3d}/{total_images}] ⏭️  Skipped (exists): {safe_filename}")
            continue
        
        print(f"[{i:3d}/{total_images}] 📥 Downloading: {safe_filename}")
        print(f"  Category: {category}")
        print(f"  URL: {url}")
        
        success, result = download_image(url, filepath, session)
        
        if success:
            downloaded += 1
            total_size += result
            print(f"  ✅ Downloaded ({result:,} bytes)")
        else:
            failed += 1
            print(f"  ❌ Failed: {result}")
        
        # Rate limiting - be respectful
        if not test_mode:
            time.sleep(0.5)  # Small delay between downloads
    
    print("\n" + "=" * 50)
    print("DOWNLOAD SUMMARY")
    print("=" * 50)
    print(f"Total processed: {len(images)}")
    print(f"Downloaded: {downloaded}")
    print(f"Failed: {failed}")
    print(f"Skipped (already exist): {skipped}")
    print(f"Total size: {total_size / (1024*1024):.1f} MB")
    
    if failed > 0:
        print(f"\n⚠️  {failed} images failed to download. You can retry by running the script again.")
    
    print(f"\n✅ Images saved in the 'images/' directory, organized by category:")
    print(f"   - images/icons/ ({len(list(Path('images/icons').glob('*')) if Path('images/icons').exists() else [])} files)")
    print(f"   - images/buildings/ ({len(list(Path('images/buildings').glob('*')) if Path('images/buildings').exists() else [])} files)")
    print(f"   - images/designations/ ({len(list(Path('images/designations').glob('*')) if Path('images/designations').exists() else [])} files)")
    print(f"   - images/other/ ({len(list(Path('images/other').glob('*')) if Path('images/other').exists() else [])} files)")

def main():
    parser = argparse.ArgumentParser(description='Download COI wiki images')
    parser.add_argument('--test', action='store_true', help='Test mode - download only first 10 images')
    parser.add_argument('--start', type=int, default=0, help='Start from image index (default: 0)')
    parser.add_argument('--limit', type=int, help='Limit number of images to download')
    parser.add_argument('--file', default='coi_wiki_images_working.json', help='JSON file with image data')
    
    args = parser.parse_args()
    
    download_coi_images(
        json_file=args.file,
        start_from=args.start,
        limit=args.limit,
        test_mode=args.test
    )

if __name__ == '__main__':
    main() 