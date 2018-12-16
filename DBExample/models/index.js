// Sequelize is a library that interfaces javascript with SQL. It takes in
// JSON objects, and will (behind the scenes) construct a SQL query to execute.
const Sequelize = require('sequelize');
// Connects to the DB. I am using a postgres SQL server.
const db = new Sequelize('postgres://localhost:5432/441Final', {
  logging: false
});

// Connect to the DB.
db.authenticate().then(() => {
  console.log('connected to the database');
});

// This rewrites the user table every time. While this would normally be a terrible
// idea, I did it here to enable cleaner in-class demonstrations.
// These lines create a table with two columns (excluding the default id), and
// defines some properties about those columns.
const User = db.define('user', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    isEmail: true
  }
});

// Export the DB for use in other files
module.exports = {
  db,
  User
};
