'use strict'

const path = require('path')

module.exports = {
  // Paths
  src: path.resolve(__dirname, '../src'),
  out: path.resolve(__dirname, '../build'),
  assets: path.resolve(__dirname, '../src/assets'),
  public: path.resolve(__dirname, '../public'),

  // Lint
  showLintError: true,
  useLint: true,

  // Analyzer
  useAnalyzer: false,
  useAnalyzerReport: true,

  // Production
  usePWA: false,
  useCompression: false,
  extractCSS: false,
  copyAssets: ['robots.txt', 'sitemap.xml'],
  assets: {
    // default: 100 * 1024(25kb)
    imageLimit: 100 * 1024,
    fontLimit: 100 * 1024,
    videoLimit: 100 * 1024,
    audioLimit: 100 * 1024
  },

  // Development
  devServer: {
    host: 'localhost',
    port: 9000,
    proxy: 9001,
    open: false
  },
  analyzer: {
    host: 'localhost',
    port: 9002
  },

  // Path alias, Also define it in your tsconfig.json > compilerOptions > paths
  alias: {
    '@': path.resolve(__dirname, '../src'),
    '@components': path.resolve(__dirname, '../src/components'),
    '@hooks': path.resolve(__dirname, '../src/hooks'),
    '@assets': path.resolve(__dirname, '../src/assets')
  }
}
