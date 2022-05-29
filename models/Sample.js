/*
=========================
| SAMPLE MODEL |
==================================================================================================================================

? @author:              William J. Horn
? @doc-name:            Sample.js
? @doc-created:         05/29/2022
? @doc-modified:        05/29/2022

==================================================================================================================================

? @doc-info
==================
| ABOUT DOCUMENT |
==================================================================================================================================

This program file is responsible for creating a test sample file upon initial creation

==================================================================================================================================
*/

const Sequelize = require('sequelize');
const sequelizeConnection = require('../config/sequelizeConnection');

const Sample = sequelizeConnection.define('sample', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    }
}, {
    sequelize: sequelizeConnection,
    modelName: 'sample',
    freezeTableName: true,
    underscored: true,
    // timestamps: false
});

/*
    Example of using 'beforeCreate':
    
    Sample.beforeCreate(async sampleModel => {
        sampleModel.password = await bcrypt.hash(sampleModel.password, 10);
    });
*/

module.exports = Sample;