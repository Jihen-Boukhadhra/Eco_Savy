//init a route
const router = require('express').Router();
const db = require('../database/database');
const { encryptPassword, decryptPassword } = require('../utils/encrypt');

//create user model
const user = db.model('user', {
    name: String,
    email: String,
    password: String,
    type: String,
    date: Date
});

router.post('/register', (req, res) => {
    console.log(req.body);
    //create new user
    const newUser = new user({
        name: req.body.name,
        email: req.body.email,
        password: encryptPassword(req.body.password), // Encrypt the password
        type: req.body.type,
        date: Date.now()
    });

    //save user
    newUser.save()
        .then(() => {
            res.status(200).send({
                message: 'User registered successfully'
            });
        })
        .catch((err) => {
            res.send(err);
        });
});

router.post('/login', (req, res) => {
    const { email, password } = req.body;

    // Find user by email
    user.findOne({ email })
        .then((foundUser) => {
            if (!foundUser) {
                res.status(404).send({
                    message: 'User not found'
                });
            } else {
                // Check password
                if (decryptPassword(foundUser.password) === password) { // Decrypt and compare the password

                    res.status(200).send(foundUser);
                } else {
                    res.status(401).send({
                        message: 'Incorrect password'

                    });
                }
            }
        })
        .catch((err) => {
            res.status(500).send({
                message: 'Server error'
            });
        });
});


//get user by id
router.get('/user/:id', (req, res) => {
    user.findById(req.params.id)
        .then((foundUser) => {
            res.status(200).send(foundUser);
        })
        .catch((err) => {
            res.send(err);
        });
});


router.put('/:id', (req, res) => {
    user.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        email: req.body.email,
        password: encryptPassword(req.body.password),
    }, { new: true }) // Add { new: true } to return the updated user
        .then((updatedUser) => {
            res.status(200).send(updatedUser);
        })
        .catch((err) => {
            res.send(err);
        });
});


//get all users
router.get('/all', (req, res) => {
    user.find()
        .then((foundUser) => {
            res.status(200).send(foundUser);
        })
        .catch((err) => {
            res.send(err);
        });
});










module.exports = router;