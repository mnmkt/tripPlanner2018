const Sequelize = require("sequelize");
const db = requrie("./_db");

const Place = db.define('place', {
  address: Sequzelize.STRING,
  city: Sequelize.STRING,
  state: Sequelize.STRING,
  phone: Sequelize.STRING,
  location: Sequelize.ARRAY(Sezuelize.FLOAT)
})

module.exports = Place;
