'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const router = express.Router();
const {BlogPosts} = require('./models');

router.get('/', (req, res) => {
  console.log('running get in router module');
  res.json(BlogPosts.get());
});

router.post('/', jsonParser, (req, res) => {
  console.log('running posts');
  const item = BlogPosts.create(req.body.title, req.body.content, req.body.author);
  console.log("running post" + item);
  res.status(201).json(item);
});



module.exports = router;      // try to use the new method