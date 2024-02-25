//init a route
    const router = require('express').Router();
    const db = require('../database/database');

    //create trash model
    const trash = db.model('trash', {
        type: String,
        quantity: Number,
        isRecyclable: Boolean,
        isBiodegradable: Boolean,
        receiver: String,
        user : String,
    });


//create trash
router.post('/create', (req, res) => {
    console.log(req.body);
    //create new trash
    const newTrash = new trash({
        type: req.body.type,
        quantity: req.body.quantity,
        isRecyclable: req.body.isRecyclable,
        isBiodegradable: req.body.isBiodegradable,
        receiver: "",
        user: req.body.user
    });

    //save trash
    newTrash.save()
        .then(() => {
            res.status(200).send({
                message: 'Trash created successfully'
            });
        })
        .catch((err) => {
            res.send({
                message: err
            });
        });
});

//get all trash
router.get('/all', (req, res) => {
    trash.find()
        .then((foundTrash) => {
            res.status(200).send(foundTrash);
        })
        .catch((err) => {
            res.send(err);
        });
});

//delete trash
router.delete('/delete/:id', (req, res) => {
    trash.findByIdAndDelete(req.params.id)
        .then(() => {
            res.status(200).send({
                message: 'Trash deleted successfully'
            });
        })
        .catch((err) => {
            res.send(err);
        });
});


router.put('/update/:id', (req, res) => {
    trash.findByIdAndUpdate(req.params.id, {
        type: req.body.type,
        quantity: req.body.quantity,
        isRecyclable: req.body.isRecyclable,
        isBiodegradable: req.body.isBiodegradable,
        receiver: req.body.receiver,
        user: req.body.user
    })
        .then(() => {
            res.status(200).send({
                message: 'Trash updated successfully'
            });
        })
        .catch((err) => {
            res.send(err);
        });
});



module.exports = router;