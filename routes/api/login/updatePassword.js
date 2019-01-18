const User = require('../../../sequelize');
const passport = require('passport');
const bcrypt = require('bcrypt');
const router = require("express").Router()


const BCRYPT_SALT_ROUNDS = 12;
router.put('/updatePassword', (req, res, next) => {
    passport.authenticate('jwt', { session: false }, (err, user, info) => {
      if (err) {
        console.log(err);
      }
      if (info != undefined) {
        console.log(info.message);
        res.send(info.message);
      } else {
        User.findOne({
          where: {
            username: user.username,
          },
        }).then(user => {
          if (user != null) {
            console.log('user found in db');
            bcrypt
              .hash(req.body.password, BCRYPT_SALT_ROUNDS)
              .then(hashedPassword => {
                user.update({
                  password: hashedPassword,
                });
              })
              .then(() => {
                console.log('password updated');
                res
                  .status(200)
                  .send({ auth: true, message: 'password updated' });
              });
          } else {
            console.log('no user exists in db to update');
            res.status(404).json('no user exists in db to update');
          }
        });
      }
    })(req, res, next);
  });


  module.exports = router
