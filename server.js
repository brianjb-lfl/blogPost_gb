'use strict';

const express = require('express');
const bPostRouter = require('./bPostRouter');
const morgan = require('morgan');
const {BlogPosts} = require('./models');

const app = express();

// log http
app.use(morgan('common'));

app.use('/blog-post', bPostRouter);

app.get('/', (req, res) => {
  console.log('running get w only /');
  res.sendFile(__dirname + '/views/index.html');
});

console.log('adding dummy data');
BlogPosts.create(
  {
    title: "My first blog post",
    content: "This is my first blog post.",
    author: "giri",
  }
);

BlogPosts.create(
  {
    title:"My second blog post",
    content: "This is my second blog post",
    author: "giri"
  }
);

app.listen(process.env.PORT || 8080, () => {
  console.log(`Your app is listening on port ${process.env.PORT || 8080}`);
});


// *** STEPS
// add dummy data and get GET working
// add POST
// add PUT
// add DELETE