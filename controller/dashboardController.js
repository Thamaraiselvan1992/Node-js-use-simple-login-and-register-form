const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Register = mongoose.model('registers');
const jwt = require('jsonwebtoken');
const checkAuth = require('./check-auth');
var router = express.Router();
router.get('/register',(req,res)=>{
    res.render('register')
})
router.get('/dashboard',checkAuth,(req, res) => {
res.render('dashboard')
})
router.get('/login', (req, res) => {
    res.render('login',{
        message:'Login Page'
    })
})
// Login
router.post('/dashboard', (req, res) => {
    const email = {
        email: req.body.email
    }
    console.log(email)
    Register.find({ email: req.body.email }).exec().then(user => {
        if (user.length < 1) {
            return res.status(401).json({
                message: 'Authendication Fail'
            })
        } else {
            bcrypt.compare(req.body.password, user[0].password, (err, result) => {
                if (err) {
                    return res.status(401).json({
                        message: 'Auth fail 1'
                    })
                }
                if (result) {
                    var token = jwt.sign({
                        email: user[0].email,
                        password: user[0].password
                    },'secret',{
                        expiresIn:"1h"
                    })
                    return res.status(200).render('dashboard',{
                        userName:req.body.email,
                        token:token
                    })
                }
                else {
                    res.status(401).json({
                        message: 'Auth fail 2'
                    })
                }
            });
        }
    })
})
router.post('/register', (req, res) => {
    insertRegister(req, res)

})
function insertRegister(req, res) {
    Register.find({ email: req.body.email }).exec().then(user => {
        if (user.length >= 1) {
            return res.status(409).json({
                message: 'already exits'
            })
        } else {
            bcrypt.hash(req.body.password, 10, (err, hash) => {
                if (err) {
                    res.status(500).json({
                        error: err
                    })
                } else {
                    const user = new Register({
                        username: req.body.username,
                        email: req.body.email,
                        password: hash
                    });
                    user.save()
                        .then(result => {
                            console.log(result)
                            res.status(201).render('login',{
                                message:'Successfully Registered'
                            })
                        })
                        .catch(error => {
                            res.status(500).json({
                                error: err
                            })
                        })
                }
            });
        }
    }).catch()
}
module.exports = router;