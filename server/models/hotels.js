const Sequelize = require("sequelize");
const db = requrie("./_db");

const Hotel = db.define('hotel', {
  name: Sequzelize.STRING,
  num_stars: {
    type: Sequelize.FLOAT,
    validate : { min:1, max: 5}
  },
  amenities: Sequelize.STRING
})

module.exports = Hotel
