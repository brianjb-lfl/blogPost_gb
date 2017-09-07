'use strict';

const express = require('express');
const router = express.Router();
const {BlogPosts} = require('./models');

router.get('/', (req, res) => {
  console.log('running get in router module');
  res.json(BlogPosts.get());
});



module.exports = router;      // try to use the new method