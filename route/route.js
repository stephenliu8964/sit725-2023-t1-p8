var express = require('express');
var router = express.Router();
let controller = require('../contoller/controller');

router.post('/api/cats', (req, res) => {
    controller.insertCat(req, res);
});

router.get('/api/cats', (req, res) => {
    controller.getAllCats(req, res);
});

router.delete('/api/cats', (req, res) => {
    controller.remove(req, res);
});

module.exports = router;