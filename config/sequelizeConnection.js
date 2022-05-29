/*
=============================
| DATABASE (ORM) CONNECTION |
==================================================================================================================================

? @author:              William J. Horn
? @doc-name:            sequelizeConnection.js
? @doc-created:         05/29/2022
? @doc-modified:        05/29/2022

==================================================================================================================================

? @doc-info
==================
| ABOUT DOCUMENT |
==================================================================================================================================

This program file is responsible for creating or finding the sequelize connection necessary for communicating with the 
MySQL database. By default this file will seek out the JAWSBD MySQL database on Heroku first before trying to connect to the
local database

==================================================================================================================================
*/
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
