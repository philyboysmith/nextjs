const withPlugins = require('next-compose-plugins');
const css = require('@zeit/next-css');
// const images = require('next-images');
const webpack = require('webpack');

/**
 * Config file for next.js
 */
module.exports = withPlugins([
  {
    target: 'serverless',
  },
  // css,
  // images,
]);
