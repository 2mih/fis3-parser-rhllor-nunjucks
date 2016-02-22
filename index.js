'use strict';

var fs = require('fs');
var path = require('path');
var nunjucks = require('nunjucks');

module.exports = function (content, file, conf) {
  var dataPath = path.join(path.dirname(file.realpath), conf.data);
  var dataFile = fs.readFileSync(dataPath);
  var data = JSON.parse(dataFile);

  return nunjucks.renderString(content, data);
};
