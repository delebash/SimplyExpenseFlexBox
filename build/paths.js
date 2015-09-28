var path = require('path');

var appRoot = 'src/';
var outputRoot = 'dist/';

module.exports = {
  root: appRoot,
  //source: appRoot + '**/*.js',
  sourceTS: appRoot + '**/*.ts',
  typings: './typings/**/*.d.ts',
  js: appRoot + 'js/**/*.js',
  html: appRoot + '**/*.html',
  sass: appRoot + 'sass',
  css: appRoot + 'styles',
  output: outputRoot,
  typingsOutput: outputRoot + './typings',
  cssOutput: outputRoot + 'css',
  jsOutput: outputRoot + 'js',
  sourceMapRelativePath: './maps',
  jspmDir: './jspm_packages',
  aurelia: './jspm_packages/github/aurelia/**/*.d.ts',
  doc: './doc',
  e2eSpecsSrc: 'test/e2e/src/*.js',
  e2eSpecsDist: 'test/e2e/dist/'
};
