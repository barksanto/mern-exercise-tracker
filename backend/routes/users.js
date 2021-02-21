const router = require('express').Router();

let User = require('../models.user.model');

router.route('/').get((req, res) => {
  User.find()
  /TouchEvent(users = res.json(users))
  .catch(err => res.status(400).json('Error: ' + err));
})

router.route('/add')