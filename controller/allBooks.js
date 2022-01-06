const book = require('../models/Books');
const axios = require('axios');

class AllBooks{

    async allBooks(req, res) {
        try {
            const books = await book.find().populate({
                path: "store_id",
            }).populate({
                path: "store_id.user_id",
                select:
                    'name email phone',
            });
            if (books.length) return res.json({ is_success: true, message: "Get list of store", total_Books: books.length, Books: books });
            else return res.json({ is_success: false, message: "Books not found"})
        }
        catch (err) {
            console.log(err)
            res.json({ is_success: false, message: err });
        }
    }

    async booksInInventory(req, res) {
        try {
            const { category } = req.query;
            if (category) {
                const Books = await book.find()
                .populate({
                    path: "store_id",
                }).populate({
                    path: "store_id.user_id",
                    select:
                        'name email phone',
                });
                if (Books.length) {
                    const books = [];
                    Books.forEach(book => {
                        if (book.category.includes(category)) {
                            books.push(book);
                       }
                    })
                    const requestBook = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${category}:keyes&key=${process.env.API_KEY}`);
                    books.push(requestBook.data);
                    if (books.length) return res.json({ is_success: true, message: "Get list of store", total_Books: books.length, Books: books });
                    else return res.json({ is_success: true, message: "Given Stock not available" });
                }
                else return res.json({ is_success: false, message: "Books not found" })
            }
            else return res.json({ is_success:false, message:"Please provide book type"})
        }
        catch (err) {
            console.log(err)
            res.json({ is_success: false, message: err });
        }
    }

}
module.exports = new AllBooks();