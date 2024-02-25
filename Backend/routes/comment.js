//init a route
const router = require('express').Router();
const db = require('../database/database');

//create trash model
const comment = db.model('comment', {
    title : String,
    author : String,
    content : String,
    date : Date,
});


//create comment
router.post('/create', (req, res) => {
    console.log(req.body);
    //create new comment
    const newComment = new comment({
        title: req.body.title,
        content: req.body.content,
        author: req.body.author,
        date: Date.now()
    });

    //save comment
    newComment.save()
        .then(() => {
            res.status(200).send({
                message: 'Comment created successfully'
            });
        })
        .catch((err) => {
            res.send({
                message: err
            });
        });
});


//get all comments
router.get('/all', (req, res) => {
    comment.find()
        .then((foundComment) => {
            res.status(200).send(foundComment);
        })
        .catch((err) => {
            res.send(err);
        });
});



module.exports = router;