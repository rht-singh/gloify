const mongoose = require('mongoose');

const Books = new mongoose.Schema({

    title: {
        type: 'string',
    },
    description: {
        type: 'string',
    },
    author: {
        type: 'string',
    },
    pages: {
        type: 'string',
    },
    category: {
        type: [],
    },
    publisher: {
        type: 'string',
    },
    publish_date: {
        type: 'string',
    },
    language: {
        type: 'string',
    },
    price: {
        type: 'string',
    },
    edition: {
        type: 'string',
    },
    stock: {
        type: 'string',
    },
    store_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'store'
    },
})

const book = new mongoose.model('books', Books);
module.exports = book;