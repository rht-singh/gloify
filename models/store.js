const mongoose = require('mongoose');

const Store = new mongoose.Schema({
    store_name: {
        type: 'string'
    },
    address: {
        type: 'string'
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    }

})

const store = new mongoose.model('store', Store);
module.exports = store;