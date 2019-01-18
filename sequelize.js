const Sequelize = require('sequelize');
const UserModel = require('./models/user.js');

const sequelize = new Sequelize('grownup', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
});

const User = UserModel(sequelize, Sequelize);

sequelize.sync().then(() => {
  console.log(`Users db and user table have been created`);
});

module.exports = User;
