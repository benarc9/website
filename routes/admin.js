var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
    console.log("GET route /admin");
});

router.post('/submit', (req, res, next) => {
    console.log("POST route /admin/submit");
    var title = res.body.postTitle;
    var body = res.body.postBody;

    var Database = require('../util/database');

    try{
        const newPost = await Database.connection.models.Post.create({
            postTitle: title,
            postBody: body
        });
    }
    catch (err) {
        console.log(err);
    }
});

module.exports = router;