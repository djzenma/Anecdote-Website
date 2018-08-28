var router = require('express').Router();
var path = require('path');

router.get('/api', function (req, res) {
    let dataPath = path.join(path.dirname(__dirname), 'data', 'data.json');
    res.sendFile(dataPath);
});

module.exports = router;