const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const userRouter = require('./routes/users');
const app = express();
const cors = require('cors');
const loginRouter = require('./routes/login');
const authValidator = require('./helpers/authValidator');

// Configuracion express
app.use(express.static(path.join(__dirname, 'invitaciones/build')));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extend: false }));



// Configuracion Rutas

app.use('/users', userRouter());
app.use('/login', loginRouter());

mongoose.Promise = global.Promise;
let DB = 'mongodb://<heroku_n9l4rm3r>:<zabasan>@ds161162.mlab.com:61162/heroku_n9l4rm3r';
mongoose.connect(DB);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/invitaciones/build/index.html'));
});

const port = process.env.PORT || 4000;
app.listen(port);

console.log(`servidor levantado on ${port}`);

