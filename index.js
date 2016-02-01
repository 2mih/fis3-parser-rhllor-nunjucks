'use strict';

var ejs = require('ejs');
var fs = require('fs');
var path = require('path');

module.exports = function (content, file, conf) {
  conf.filename = file.realpath;
  var template = ejs.compile(content, conf);

  var pathObject = path.parse(file.realpath);
  pathObject.base = file.data;
  
  var dataPath = path.format(pathObject);
  var dataFile = fs.readFileSync(dataPath);
  var data = JSON.parse(dataFile);

  return template(data);
};
