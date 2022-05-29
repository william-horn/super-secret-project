/*
==========
| SERVER |
==================================================================================================================================

? @author:              William J. Horn
? @doc-name:            server.js
? @doc-created:         05/29/2022
? @doc-modified:        05/29/2022

==================================================================================================================================

? @doc-info
==================
| ABOUT DOCUMENT |
==================================================================================================================================

This program file is responsible for handling the initialization of all back-end functionality and uses the Express.js server
framework to operate. learn more about Express.js here: https://expressjs.com/
Database management is handled by the Sequelize ORM library.

==================================================================================================================================

? @doc-todo
=================
| DOCUMENT TODO |
==================================================================================================================================
==================================================================================================================================
*/

/* -------------- */
/* Import Modules */
/* -------------- */
// one-off's
require('dotenv').config();

// module refs
const express = require('express');
const expressHandlebars = require('express-handlebars');
const expressSession = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(expressSession.Store);
//
const { serverSettings } = require('./settings');
const sequelizeConnection = require('./config/sequelizeConnection');
const models = require('./models');
const seeds = require('./seeds');
const helpers = require('./utils/helpers');
const routes = require('./controllers');

/* ------------------------- */
/* App Set-Up and Middleware */
/* ------------------------- */
const app = express();
const PORT = process.env.PORT || serverSettings.localPort;
const resetDatabaseOnLoad = process.env.DB_RESET_ON_LOAD === 'true';
const seedDatabaseOnLoad = process.env.DB_SEED_ON_LOAD === 'true';

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

//? todo: look up more information on how express session works
app.use(expressSession({
    secret: 'session:js$kd7#kDLg-Spd',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({ db: sequelizeConnection })
}));

app.engine('handlebars', expressHandlebars.create({ helpers }).engine);
app.set('view engine', 'handlebars');

app.use(routes);

/* ------------ */
/* Start Server */
/* ------------ */
(async () => {
    // wait for database sync
    await sequelizeConnection.sync({ force: resetDatabaseOnLoad });

    // set server listening
    app.listen(PORT, err => {
        if (err) throw err;
        console.log('Server running on port:', PORT)
    });

    // plant seeds
    if (seedDatabaseOnLoad) seeds.plantAll();
})();