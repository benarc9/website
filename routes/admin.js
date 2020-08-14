var express = require('express');
var router = express.Router();
var Database = require('../util/database');
var Post = require('../models/post');

router.get('/', (req, res, next) => {
    console.log("GET route /admin");
});

router.post('/submit', (req, res, next) => {
    console.log("POST route /admin/submit");
    var postTitle = res.body.postTitle;
    var postBody = res.body.postBody;

    var newPost = Post.build({title: postTitle, body: postBody});
    Post.save();
});

module.exports = router;
