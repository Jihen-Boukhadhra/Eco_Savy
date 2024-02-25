//init a route
const router = require('express').Router();
const db = require('../database/database');

//create trash model
const rapport = db.model('rapport', {
    title : String,
    author : String,
    content : String,
    date : Date,
});


//create rapport
router.post('/create', (req, res) => {
    console.log(req.body);
    //create new rapport
    const newRapport = new rapport({
        title: req.body.title,
        content: req.body.content,
        author: req.body.author,
        date: Date.now()
    });

    //save rapport
    newRapport.save()
        .then(() => {
            res.status(200).send({
                message: 'Rapport created successfully'
            });
        })
        .catch((err) => {
            res.send({
                message: err
            });
        });
}
);


//get all rapports
router.get('/all', (req, res) => {
    rapport.find()
        .then((foundRapport) => {
            res.status(200).send(foundRapport);
        })
        .catch((err) => {
            res.send(err);
        });
});






module.exports = router;