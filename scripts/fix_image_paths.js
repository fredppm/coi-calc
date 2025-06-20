const fs = require('fs');
const path = require('path');

// Path to the data file
const dataFilePath = path.join(__dirname, '..', 'data', 'coi.ts');

console.log('🔧 Fixing image paths in data/coi.ts...');

try {
  // Read the file
  let content = fs.readFileSync(dataFilePath, 'utf8');
  
  // Count occurrences before replacement
  const beforeCount = (content.match(/\"\/images\//g) || []).length;
  console.log(`📊 Found ${beforeCount} hardcoded /images/ paths`);
  
  // Replace all occurrences of "/images/ with "images/
  content = content.replace(/\"\/images\//g, '"images/');
  
  // Count occurrences after replacement
  const afterCount = (content.match(/\"\/images\//g) || []).length;
  console.log(`✅ Fixed ${beforeCount - afterCount} image paths`);
  
  // Write the file back
  fs.writeFileSync(dataFilePath, content, 'utf8');
  
  console.log('🎉 Successfully updated data/coi.ts!');
  console.log('📋 Summary:');
  console.log(`   • Changed "/images/ to "images/`);
  console.log(`   • Fixed ${beforeCount - afterCount} paths`);
  console.log(`   • Remaining hardcoded paths: ${afterCount}`);
  
} catch (error) {
  console.error('❌ Error fixing image paths:', error.message);
  process.exit(1);
} 