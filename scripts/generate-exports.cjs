const fs = require('fs');
const path = require('path');

const packageJsonPath = path.join(__dirname, '..', 'package.json');
const distSrcPath = path.join(__dirname, '..', 'dist', 'src');

/** Recursively find all .js files under dir, returns paths relative to dist/ */
function findJsFiles(dir, baseDir = dir) {
  const results = [];
  if (!fs.existsSync(dir)) return results;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...findJsFiles(fullPath, baseDir));
    } else if (entry.name.endsWith('.js')) {
      const relative = path.relative(baseDir, fullPath).replace(/\\/g, '/');
      results.push(relative);
    }
  }
  return results;
}

// Read package.json
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

// Generate exports for all files in dist/src
const packageExports = {
  '.': {
    types: './dist/index.d.ts',
    default: './dist/index.js'
  }
};

if (fs.existsSync(distSrcPath)) {
  const files = findJsFiles(distSrcPath);

  for (const file of files) {
    const relativePath = file.replace(/^src\//, '').replace('.js', '');
    packageExports[`./src/${relativePath}`] = {
      types: `./dist/src/${relativePath}.d.ts`,
      default: `./dist/src/${relativePath}.js`
    };
  }
}

// Update package.json
packageJson.exports = packageExports;
fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 4) + '\n');
console.log('Generated exports for', Object.keys(packageExports).length, 'paths');

