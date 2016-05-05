'use strict';

var pathFn = require('path');
var fs = require('fs');
var sitemap2Tmpl;

module.exports = function() {
  if (sitemap2Tmpl) return sitemap2Tmpl;

  var nunjucks = require('nunjucks');
  var env = new nunjucks.Environment(null, {
    autoescape: false,
    watch: false
  });

  env.addFilter('uriencode', function(str) {
    return encodeURI(str);
  });

  var sitemap2Src = pathFn.join(__dirname, '../sitemap.txt');
  sitemap2Tmpl = nunjucks.compile(fs.readFileSync(sitemap2Src, 'utf8'), env);

  return sitemap2Tmpl;
};
