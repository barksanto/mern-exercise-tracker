const router = require('express').Router();

let User = require('../models/user.model');

// the first endpoint that handles incoming http get requests on the /users url path
router.route('/').get((req, res) => {
  User.find() //find is a mongoose method that find all Users in db
    .then(users = res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
})

//  this handles post requests
router.route('/add').post((req, res) => {
  const username = req.body.username;
  const newUser = new User({ username });

  newUser.save() // save user
    .then(() => res.json('User Added!')) // if user added
    .catch(err => res.status(400).json('Error: ' + err)); // if theres an arror
})

module.exports = router;