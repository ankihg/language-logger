'use strict';
const mongoose = require('mongoose');
mongoose.connect(require('../config').MLAB_URI);

const models = module.exports = {};

require('glob').sync('!(node_modules)/**/model.js').forEach((path) => {
  console.log(path);
  require('../'+path)(mongoose, models);
});
