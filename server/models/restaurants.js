const Sequelize = require("sequelize");
const db = requrie("./_db");

const Restaurants = db.define('restaurant', {
  name: Sequelize.STRING,
  price: {
    type: Sequelize.INTEGER,
    validate: {min:1, max:5}
  },
  cuisine: Sequelize.STRING
})

module.exports = Restaurant;
