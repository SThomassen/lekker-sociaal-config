const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const packageJsonPath = path.join(__dirname, '..', 'package.json');
const distSrcPath = path.join(__dirname, '..', 'dist', 'src');

// Read package.json
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

// Generate exports for all files in dist/src
const exports = {
  '.': {
    types: './dist/index.d.ts',
    default: './dist/index.js'
  }
};

if (fs.existsSync(distSrcPath)) {
  const files = execSync(`find dist/src -name "*.js" -type f`, { cwd: path.join(__dirname, '..'), encoding: 'utf8' })
    .trim()
    .split('\n')
    .filter(Boolean);

  for (const file of files) {
    const relativePath = file.replace('dist/', '').replace('.js', '');
    exports[`./${relativePath}`] = {
      types: `./dist/${relativePath}.d.ts`,
      default: `./dist/${relativePath}.js`
    };
  }
}

// Update package.json
packageJson.exports = exports;
fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 4) + '\n');
console.log('Generated exports for', Object.keys(exports).length, 'paths');

