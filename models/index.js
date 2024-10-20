const Sequelize = require("sequelize");
const config = require("../config/config");
const env = process.env.NODE_ENV || "development";
const isDevelopment = env === "development";

const sequelize = new Sequelize(
  config[env].database,
  config[env].username,
  config[env].password,
  {
    host: config[env].host,
    dialect: config[env].dialect,
  }
);

const Pokemon = require("./pokemon")(sequelize, Sequelize.DataTypes);

const db = { sequelize, Pokemon };

// Only use force: true in development or controlled environments
sequelize.sync({ alter: true }).then(() => {
  console.log(
    `Database & tables ${isDevelopment ? "recreated" : "synchronized"}!`
  );
});

module.exports = db;
