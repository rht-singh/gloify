const book = require('../models/Books.js');

class AddBook{

    async book(req, res) {
        try {
            const { title, description,store_id,author, pages, category, publisher, publish_date, edition, price, language,stock } = req.body;
            if (title && description && store_id) {
                const addBook = new book({ title, description, author, pages, store_id, category, publisher, publish_date, edition, price,stock,language })
                await addBook.save();
                return res.json({ is_success: true, message: "Book added successfully" });
                
            }
            else return res.json({is_success:false,message:"Please provide book credentials"});
        }
        catch (err) {
            console.log(err)
            res.json({ is_success: false, message: err });
        }
    }

}
module.exports = new AddBook();