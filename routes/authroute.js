const router = require('express').Router();

router.get('/login', (req, res) => {
    res.render('login');
});

router.get('/logout', (req, res) => {
    console.log('logging out');
    res.send('logging out');

});

router.get('/google', (req, res) => {
    console.log('waiting for google');
    res.send('loggin in with Google');
});

module.exports = router;