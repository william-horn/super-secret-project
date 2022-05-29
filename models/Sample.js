
const Sequelize = require('sequelize');
const sequelizeConnection = require('../config/sequelizeConnection');

const Sample = sequelizeConnection.define('sample', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
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