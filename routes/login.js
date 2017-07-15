const express = require('express');
const User = require('../models/user');
let growl = require('growl');

module.exports = function () {
    const router = express.Router();


    router.post('/', function (req, res) {
        let data = req.body;
        //console.log(data);

        User
            .findOne({mail: data.username }, function (err, user) {
                console.log(user);
                if(user) {
                    growl('Login correcto!');
                    res.status(200).json(user);
                } else {
                    res.status(401).json({ message : 'Credenciales Incorrectas'});
                    growl('El mail ingresado no se encuentra en la lista de invitados');
                }
            }).then(user => console.log(user))
            .catch(err => res.status(503).json(err));
    });

    return router;
};
