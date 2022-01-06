const mongoose = require('mongoose');

const User = new mongoose.Schema({
    name: {
        type: 'string',
    },
    email: {
        type: 'string',
    },
    phone: {
        type: 'string',
    },
    token: {
        type: 'string',
    },
    password: {
      type: 'string',  
    },
    verified: {
        type: 'boolean',
    },
    isStore: {
        type: 'boolean',
    },


});

const users = new mongoose.model('users', User);
module.exports = users;