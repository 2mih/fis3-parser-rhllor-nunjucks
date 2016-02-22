'use strict';

var fs = require('fs');
var path = require('path');
var nunjucks = require('nunjucks');

module.exports = function (content, file, conf) {
  var dataDir = path.dirname(file.realpath);
  var dataPath = path.join(dataDir, conf.data);
  var dataFile = fs.readFileSync(dataPath);
  var data = JSON.parse(dataFile);

  return nunjucks.configure(conf.path).renderString(content, data);
};
