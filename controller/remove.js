const book= require('../models/Books');

class RemoveBook{

    async deleteBook(req, res) {
        try {
            const { id } = req.params
            if (id) {
                const deleteBook = await book.findByIdAndRemove(id)
                if (deleteBook) return res.json({ is_success: true, message: "Book Removed from inventory successfully" });
                else return res.json({ is_success: false, message: "No book found" })
            }
            else return res.json({ is_success: false , message: "No Please Provide book"})
        }
            
        catch (err) {
            console.log(err)
            res.json({ is_success: false, message: err });
        }
    }

}
module.exports = new RemoveBook();