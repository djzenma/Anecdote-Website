var router = require('express').Router();
var path = require('path');
var fs = require('fs');

var dataPath = path.join(path.dirname(__dirname), 'data', 'data.json');

router.get('/api', function (req, res) {
    res.sendFile(dataPath);
});

router.post('/api', function (req, res) {
    var data = require(dataPath).users;
    data.push(req.body);
    var finalData = {users: data};
    fs.writeFile(dataPath, JSON.stringify(finalData), function () {
        res.send(data);
    });
});

module.exports = router;