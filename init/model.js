'use strict';
const mongoose = require('mongoose');
mongoose.connect(require('../config').MLAB_URI);

const models = module.exports = {};
