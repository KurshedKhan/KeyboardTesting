const { build } = require('vite');

const buildConfig = {
  root: '.',
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
};

async function runBuild() {
  try {
    console.log('Building...');
    await build(buildConfig);
    console.log('Build completed successfully!');
  } catch (error) {
    console.error('Build failed:', error);
    process.exit(1);
  }
}

runBuild();
