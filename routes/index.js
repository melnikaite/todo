var models = require('../models');
var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  models.Item.findAll().then(function (items) {
    res.render('index', {title: 'Todo', items: items});
  });
});

router.post('/', function (req, res, next) {
  models.Item.create({name: req.body.name}).then(function () {
    res.redirect('/');
  });
});

module.exports = router;
