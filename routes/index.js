var models  = require('../models');
var express = require('express');
var router  = express.Router();

router.get('/', function(req, res) {
  models.Member.findAll({
    include: [ models.Task ]
  }).then(function(members) {
    res.render('index', {
      title: 'Express',
      members: members
    });
  });
});

module.exports = router;
