'use strict';
const express = require('express');
const app = module.exports =  express();

app.use(require('body-parser').json());

const models = require('./init/models');

const apiRouter = require('./init/routes')(express, models);
app.use('/api', apiRouter);

const PORT = require('./config').PORT;
app.listen(PORT, () => console.log('server speaking on ' + PORT));
