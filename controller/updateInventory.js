const book = require('../models/Books');

class UpdateBook{

    async updateInventory(req, res) {
        try {
            const { id } = req.body;
            delete req.body.id;
            if (id) {
                const updateBook = await book.findByIdAndUpdate(id,req.body);
                if (updateBook) return res.json({ is_success: true, message: "Inventory updated successfully" })
            else return res.json({ is_success: false, message: "No book found" })
            }
            else return res.json({ is_success: false, message: "Please Provide book" })
        }
        catch (err) {
            console.log(err)
            res.json({ is_success: false, message: err });
        }
    }

}
module.exports = new UpdateBook();