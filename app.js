const express = require('express');
const path = require('path');
const app = express();

const AuthRoutes = require('./routes/authroute');

// view engine setup
app.set('views', path.join(__dirname, '/views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use('/auth', AuthRoutes);

app.get('/', (req, res) => {
    res.render('home');
})

app.listen(3000, () => {
    console.log('app listening on 3000');
})