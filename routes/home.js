var router = require('express').Router();
var data = require('../data/data');

router.get('/', function (req, res) {
    res.render('index.ejs', {users : data.users});
});

module.exports = router;