const jwt = require('jsonwebtoken');
const store = require('../../models/store');

class RegisterStore{

    async registerStore(req, res) {
        try {
            const { store_name , address } = req.body;
            if (store_name , address ) {
                const { User } = req;
                if (User.isStore == true) {
                    const Store = new store({ store_name, address , user_id:User._id});
                    await Store.save();
                    return res.json({is_success: true,message:"Store register successfully"});
                }
                else return res.json({ is_success: false, message:"Please verify your Profile for store"})
            }
            else return res.json({is_success:false,message:"Please Provide Store credentials "});
        }
        catch (err) {
            res.json({ is_success: false, message: err });
        }
    }

}

module.exports = new RegisterStore();