const jwt = require('jsonwebtoken');
const user = require('../../models/user');

class Login{

    async login(req, res) {
        try {
            const { phone ,password} = req.body;
            if (phone) {
                const User = await user.findOne({ phone});
                if (User) {
                    if(User.password === password) return res.json({is_success:true,message:"Login successfully"})
                    else return res.json({is_success:false,message:"Password incorrect"})
                }
                else return res.json({ is_success: false, message: "Please register" });
            }
            else return res.json({is_success:false,message:"Please Provide credentials "});
        }
        catch (err) {
            res.json({ is_success: false, message: err });
        }
    }

}

module.exports = new Login();