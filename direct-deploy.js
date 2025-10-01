const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

try {
  // Build the project
  console.log('Building the project...');
  execSync('npm run build', { stdio: 'inherit' });

  const buildDir = path.join(__dirname, 'build');

  // Create .nojekyll file
  console.log('Creating .nojekyll file...');
  fs.writeFileSync(path.join(buildDir, '.nojekyll'), '');

  // Create a copy of index.html as 404.html
  console.log('Creating 404.html file...');
  const indexHtml = fs.readFileSync(path.join(buildDir, 'index.html'), 'utf8');
  fs.writeFileSync(path.join(buildDir, '404.html'), indexHtml);

  // Create a robots.txt file
  console.log('Creating robots.txt file...');
  fs.writeFileSync(path.join(buildDir, 'robots.txt'), 'User-agent: *\nAllow: /');

  // Initialize git in the build folder and push
  console.log('Deploying to GitHub Pages...');
  execSync('git init', { cwd: buildDir, stdio: 'inherit' });
  execSync('git add .', { cwd: buildDir, stdio: 'inherit' });
  execSync('git commit -m "Deploy to GitHub Pages"', { cwd: buildDir, stdio: 'inherit' });
  execSync('git push -f https://github.com/bhanuprakashbm/portfolio.git HEAD:gh-pages', { cwd: buildDir, stdio: 'inherit' });

  console.log('Deployment complete!');
} catch (error) {
  console.error('Deployment failed:', error);
  process.exit(1);
} 