/**
 * Esta es la ruta de usuarios.
 *
 */

const express = require('express');
const User =require('../models/user');
let growl = require('growl');

module.exports = function () {
    const router = express.Router();

    /*router.get('/', function (req, res) {
        User.find({})
            .then(users => {
                res.json(users)
            })
    });*/

     router.get('/:id', function (req, res) {
     let id = req.params.id;

     User.findById(id)
     .then(user => res.json(user));

     });


    router.get('/', function (req, res) {
        //let mail = req.params.mail;

        User.find({})
            .then(user => {
                res.json(user);
            })
    });

    router.post('/', function (req, res) {
        data = req.body;
        console.log(data);
        let user = new User(data);
        console.log(user);
        user.save().then(result => res.json(result));
    });

    router.put('/:id', function (req, res) {
        let data = req.body;

        let id = req.params.id;


        console.log(data);
        console.log(id);

        User.findByIdAndUpdate(id, data).then(result => {
            console.log(result);
            return res.json(result)});
    });

    router.delete('/:id', function (req, res) {
        let id = req.params.id;

        User.findByIdAndRemove(id).then(result => res.json(result));
    });

    return router;
};

const schedule = require('node-schedule');
const nodemailer = require('nodemailer');


let users = [];
let mails = [];
User.find().then(users => {
    for (let i = 0; i < users.length; i++) {
        mails[i] = users[i].mail;
    }
    return mails;
});

User.find().then(users => {

    return users;
});

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'zabasan@gmail.com',
        pass: 'ogaiTnas1977',
    },
});

let mailOptions = {
    from: 'Testing Mail Automático', // sender address
    to: 'zabasan@dezabaleta.com.ar',
    bcc: mails,
    subject: 'test automático casorio', // Subject line
    text: users[2], // plain text body
    html: '<b>lero lero</b>' // html body
};

// send mail with defined transport object


let j = schedule.scheduleJob({hour: 17, minute: 40}, function () {
    console.log(users);
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message %s sent: %s', info.messageId, info.response);
    });
});