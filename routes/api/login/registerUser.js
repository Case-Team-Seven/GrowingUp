const User = require('../../../sequelize');
const passport = require('passport');
const router = require("express").Router()

router.post('/registerUser', (req, res, next) => {
  console.log("router post")


    passport.authenticate('register', (err, user, info) => {
      if (err) {
        console.log("first if: ", err)
      }
      if (info != undefined) {
        console.log("if info != undefined :", info)
       
        console.log(info.message);
        res.send(info.message);
      } else {
        console.log("req.login")
        req.logIn(user, err => {
          const data = {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            username: req.body.username,
            email: req.body.email,
            password:req.body.password

          };
          User.findOne({
            where: {
              username: data.username,
            },
          }).then(user => {
            console.log(user)
            console.log(data)
            user
              .update(data)
              .then(() => {
                console.log('user created in db');
                res.status(200).send({ message: 'user created' });
              });
          });
        });
      }
    })(req, res, next);
  });

  module.exports = router
