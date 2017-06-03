module.exports = {
  staticFileGlobs: [
    'dist/**.css',
    'dist/**.html',
    'dist/**.js',
    'dist/lte/**',
  ],
  stripPrefix: 'dist/',
  runtimeCaching: [{
    urlPattern: /\/api\//,
    handler: 'networkFirst',
  }],
};
