const router = require('express').Router();
const passport = require('passport');


router.get('/login', (req, res) => {
    res.render('login');
});

router.get('/logout', (req, res) => {
    console.log('logging out');
    res.send('logging out');

});

router.get('/google', passport.authenticate('google', {
    scope: ['profile']
}));

router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
    res.send('you reached the call back URI')
})

module.exports = router;