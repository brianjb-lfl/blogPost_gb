'use strict';

const express = require('express');
const bPostRouter = require('./bPostRouter');
const morgan = require('morgan');

const app = express();

// log http
app.use(morgan('common'));


app.use('/blog-posts');





// const post = {
//   id: uuid.v4(),
//   title: title,
//   content: content,
//   author: author,
//   publishDate: publishDate || Date.now()
// };

// *** STEPS
// set up module
// add dummy data and get GET working
// add POST
// add PUT
// add DELETE