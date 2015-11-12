var models  = require('../models');
var express = require('express');
var router  = express.Router();

router.post('/create', function(req, res) {
  models.User.create({
    username: req.body.username
  }).then(function() {
    res.redirect('/');
  });
});

router.get('/:member_id/destroy', function(req, res) {
  models.User.destroy({
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
    UserId: req.params.member_id
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
