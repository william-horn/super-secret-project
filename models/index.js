/*
=========================
| DATABASE (ORM) MODELS |
==================================================================================================================================

? @author:              William J. Horn
? @doc-name:            index.js
? @doc-created:         05/29/2022
? @doc-modified:        05/29/2022

==================================================================================================================================

? @doc-info
==================
| ABOUT DOCUMENT |
==================================================================================================================================

This program file is responsible for the initialization of all sequelize ORM models and their relationship(s) to one another.

==================================================================================================================================
*/

const Sample = require('./Sample');

// create relationship connections here

module.exports = {
    Sample,
}