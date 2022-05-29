
const Sequelize = require('sequelize');
const ENV = process.env;

const sequelizeConnection = ENV.JAWSDB_URL || new Sequelize(
    ENV.DB_NAME,
    ENV.DB_USER,
    ENV.DB_PW,
    {
        host: 'localhost',
        port: 3306,
        dialect: 'mysql'
    }
);
    

module.exports = sequelizeConnection;
