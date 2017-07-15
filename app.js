const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const userRouter = require('./routes/users');
const app = express();
const cors = require('cors');
const loginRouter = require('./routes/login');
const authValidator = require('./helpers/authValidator');

// Configuracion express

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extend: false }));



// Configuracion Rutas

app.use('/users', userRouter());
app.use('/login', loginRouter());

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/casorio');


let servidor = 4000;
app.listen(servidor);
console.log('servidor levantado ' + servidor);

