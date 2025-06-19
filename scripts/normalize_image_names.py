#!/usr/bin/env python3
"""
Script to normalize all image filenames to snake_case
"""

import os
import re
import shutil

def to_snake_case(name):
    """Convert any string to snake_case"""
    # Handle Roman numerals first
    name = re.sub(r'\bII\b', '_ii', name)
    name = re.sub(r'\bIII\b', '_iii', name)
    name = re.sub(r'\bIV\b', '_iv', name)
    name = re.sub(r'\bV\b', '_v', name)
    
    # Convert CamelCase and Title_Case to snake_case
    # Insert underscore before uppercase letters
    name = re.sub(r'([a-z0-9])([A-Z])', r'\1_\2', name)
    
    # Replace spaces and other separators with underscores
    name = re.sub(r'[\s\-]+', '_', name)
    
    # Convert to lowercase
    name = name.lower()
    
    # Clean up multiple underscores
    name = re.sub(r'_+', '_', name)
    
    # Remove leading/trailing underscores
    name = name.strip('_')
    
    return name

def normalize_filename(filename):
    """Normalize a filename to snake_case while preserving extension"""
    if not filename.endswith('.png'):
        return filename
    
    name_without_ext = filename[:-4]
    snake_name = to_snake_case(name_without_ext)
    return f"{snake_name}.png"

def main():
    # Directories to process
    directories = [
        'public/images/resources',
        'public/images/buildings'
    ]
    
    renamed_files = []
    
    for directory in directories:
        if not os.path.exists(directory):
            print(f"Directory {directory} does not exist, skipping...")
            continue
            
        print(f"\nProcessing {directory}...")
        
        for filename in os.listdir(directory):
            if not filename.endswith('.png'):
                continue
                
            old_path = os.path.join(directory, filename)
            new_filename = normalize_filename(filename)
            new_path = os.path.join(directory, new_filename)
            
            if filename != new_filename:
                print(f"  {filename} -> {new_filename}")
                
                # Rename the file
                if os.path.exists(new_path):
                    print(f"    WARNING: {new_path} already exists, skipping...")
                    continue
                    
                os.rename(old_path, new_path)
                renamed_files.append({
                    'directory': directory,
                    'old': filename,
                    'new': new_filename
                })
            else:
                print(f"  {filename} (no change)")
    
    print(f"\nRenamed {len(renamed_files)} files total.")
    
    # Write mapping for reference updates
    with open('scripts/rename_mapping.txt', 'w') as f:
        f.write("# File rename mapping\n")
        for item in renamed_files:
            f.write(f"{item['old']} -> {item['new']}\n")
    
    print("Rename mapping saved to scripts/rename_mapping.txt")

if __name__ == "__main__":
    main() 