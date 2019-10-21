const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Users = require('./auth-model.js.js.js');
const secrets = require('../../config/secrets.js');

router.post('/register', (req, res) => {
  // implement registration
  let user = req.body;
    console.log(req.body)
    const hash = bcrypt.hashSync(user.password, 10);
    user.password = hash;
  
    Users.add(user)
      .then(saved => {
        res.status(201).json(saved);
      })
      .catch(error => {
        res.status(500).json({ message: 'User could not be added.', ...error });
      });
});

router.post('/login', (req, res) => {
  // implement login
  const {password, username} = req.body;
  
  Users.findByUsername(username)
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = generateToken(user);
        // console.log(authorize)
        res.status(200).json({
          message: `Welcome ${user.username}!`,
          token,
        });
      } else {
        res.status(401).json({ message: 'The credentials used, are incorrect.' });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

function generateToken(user) {
  const payload = {
    username: user.username,
    department: user.department
  };
  const options = {
    expiresIn: '1hr',
  };

  return jwt.sign(payload, secrets.jwtSecret, options);
}

module.exports = router;