module.exports = {
  // Tailwind Paths
  configJS: './tailwind.config.js',
  sourceCSS: './src/assets/styles/index.css',
  outputCSS: './src/assets/styles/tailwind.css',


  watchRelatedFiles: [],
  // Sass
  sass: false,
  // PurgeCSS Settings
  purge: true,
  keyframes: false,
  fontFace: false,
  rejected: false,
  whitelist: [],
  whitelistPatterns: [],
  whitelistPatternsChildren: [],
  extensions: [
    '.ts',
    '.html',
    '.js'
  ],
  extractors: [],
  content: []
}
