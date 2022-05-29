
// get models
const { Sample } = require('../models');

// utils
const plantAll = async () => {

    await Sample.bulkCreate([

        { name: 'William' },
        { name: 'Frank' },

    ]);

}

// export module
module.exports = {
    plantAll,
}
