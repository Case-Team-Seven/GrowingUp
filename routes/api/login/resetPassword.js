const User = require('../../../sequelize');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const router = require("express").Router()


router.get('/reset', (req, res, next) => {
    User.findOne({
      where: {
        resetPasswordToken: req.query.resetPasswordToken,
        resetPasswordExpires: {
          [Op.gt]: Date.now(),
        },
      },
    }).then(user => {
      if (user == null) {
        console.log('password reset link is invalid or has expired');
        res.json('password reset link is invalid or has expired');
      } else {
        res.status(200).send({
          username: user.username,
          message: 'password reset link a-ok',
        });
      }
    });
  });

  module.exports = router
