function readPackage(pkg, context) {
  // Allow build scripts for these packages
  const packagesToAllow = [
    '@sveltejs/kit',
    'esbuild',
    'svelte-preprocess'
  ];
  
  if (packagesToAllow.includes(pkg.name)) {
    if (!pkg.pnpm) {
      pkg.pnpm = {};
    }
    pkg.pnpm.allowBuild = true;
  }
  
  return pkg;
}

module.exports = {
  hooks: {
    readPackage
  }
};