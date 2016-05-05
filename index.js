/* global hexo */
'use strict';

var assign = require('object-assign');
var pathFn = require('path');

var config = hexo.config.sitemap = assign({
  path: 'sitemap.xml',
  path2: 'sitemap.txt'
}, hexo.config.sitemap);

if (!pathFn.extname(config.path)) {
  config.path += '.xml';
}
if (!pathFn.extname(config.path2)) {
  config.path2 += '.txt';
}

hexo.extend.generator.register('sitemap', require('./lib/generator'));
