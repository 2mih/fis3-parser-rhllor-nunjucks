'use strict';

var ejs = require('ejs');
var fs = require('fs');
var path = require('path');

module.exports = function (content, file, conf) {
  console.log(file.realpath);

  conf.filename = file.realpath;
  var template = ejs.compile(content, conf);

  var dataPath = path.join(path.dirname(file.realpath), conf.data);
  var dataFile = fs.readFileSync(dataPath);
  var data = JSON.parse(dataFile);

  return template(data);
};
