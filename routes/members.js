var models  = require('../models');
var express = require('express');
var router  = express.Router();

// JSON
router.get('/', function(req, res) {
  models.Member.findAll({
    include: [ models.Task ]
  }).then(function(members) {
    res.json({
      members: members
    });
  });
});

router.post('/create', function(req, res) {
  models.Member.create({
    displayName: req.body.displayName
  }).then(function() {
    res.redirect('/');
  });
});

router.get('/:member_id/destroy', function(req, res) {
  models.Member.destroy({
    where: {
      id: req.params.member_id
    }
  }).then(function() {
    res.redirect('/');
  });
});

router.post('/:member_id/tasks/create', function (req, res) {
  models.Task.create({
    title: req.body.title,
    MemberId: req.params.member_id
  }).then(function() {
    res.redirect('/');
  });
});

router.get('/:member_id/tasks/:task_id/destroy', function (req, res) {
  models.Task.destroy({
    where: {
      id: req.params.task_id
    }
  }).then(function() {
    res.redirect('/');
  });
});


module.exports = router;
