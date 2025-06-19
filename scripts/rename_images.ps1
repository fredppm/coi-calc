# Rename Images Script
# Replaces all spaces with underscores in resource image filenames

Write-Host "🔄 Starting image rename process..." -ForegroundColor Green

# Navigate to the resources directory
$resourcesPath = "..\public\images\resources"
$fullPath = Resolve-Path $resourcesPath

Write-Host "📁 Working in: $fullPath" -ForegroundColor Cyan

# Get all PNG files with spaces in their names
$files = Get-ChildItem -Path $fullPath -Filter "*.png" | Where-Object { $_.Name -match "\s" }

Write-Host "🎯 Found $($files.Count) files with spaces to rename" -ForegroundColor Yellow

if ($files.Count -eq 0) {
    Write-Host "✅ No files need renaming!" -ForegroundColor Green
    exit 0
}

# Track statistics
$renamed = 0
$errors = 0

foreach ($file in $files) {
    try {
        $oldName = $file.Name
        $newName = $oldName -replace "\s+", "_"
        
        # Only rename if the name actually changes
        if ($oldName -ne $newName) {
            $newPath = Join-Path $file.Directory $newName
            
            # Check if target file already exists
            if (Test-Path $newPath) {
                Write-Host "⚠️ Warning: $newName already exists, skipping $oldName" -ForegroundColor Yellow
                continue
            }
            
            Rename-Item -Path $file.FullName -NewName $newName
            Write-Host "✅ $oldName -> $newName" -ForegroundColor Green
            $renamed++
        }
    }
    catch {
        Write-Host "❌ Error renaming $($file.Name): $($_.Exception.Message)" -ForegroundColor Red
        $errors++
    }
}

Write-Host ""
Write-Host "📊 Rename Summary:" -ForegroundColor Cyan
Write-Host "   ✅ Successfully renamed: $renamed files" -ForegroundColor Green
Write-Host "   ❌ Errors: $errors files" -ForegroundColor Red
Write-Host "   📁 Total processed: $($files.Count) files" -ForegroundColor White

if ($renamed -gt 0) {
    Write-Host ""
    Write-Host "Image rename complete! All spaces have been replaced with underscores." -ForegroundColor Green
}