const store = require('../models/store');

class AllStores{

    async allstores(req, res) {
        try {
            const stores = await store.find().populate({
                path: "user_id",
                select:
                'name email phone',
            });
            if (stores.length) return res.json({ is_success: true, message: "Get list of store", total_Stores: stores.length, stores: stores });
            else return res.json({ is_success: false, message: "No store found"})
        }
        catch (err) {
            console.log(err)
            res.json({ is_success: false, message: err });
        }
    }

}
module.exports = new AllStores();