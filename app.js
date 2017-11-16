const express = require('express');
const path = require('path');
const app = express();
const mongoose = require('mongoose');
const keys = require('./config/keys');

//importing passport setup
const PassportSetup = require('./config/passport-setup');

//importing the rotes
const AuthRoutes = require('./routes/authroute');

// view engine setup
app.set('views', path.join(__dirname, '/views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

//connect to mongoose
mongoose.connect(keys.mongodb.dbURI, () => {
    console.log('connected to mongodb');
})

//using the routers
app.use('/auth', AuthRoutes);

app.get('/', (req, res) => {
    res.render('home');
})

//port
app.listen(3000, () => {
    console.log('app listening on 3000');
})