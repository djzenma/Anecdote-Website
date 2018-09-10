var router = require('express').Router();
var data = require('../data/data');

router.get('/', function (req, res) {
    let posts = data.users;
    res.render('index.ejs', {users : posts});
});

module.exports = router;