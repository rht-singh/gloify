const jwt = require('jsonwebtoken');
const user = require('../../models/user');

class Register{

    async register(req, res) {
        try {
            const { name, email, phone, isStore,password } = req.body;
            if (name && email && phone && isStore) {
                const User = await user.find({ email, phone });
                if (User.length) return res.json({is_success:false,message:"User already Present"});
                else {
                    const token = await jwt.sign({ Name: name }, process.env.AUTH_KEY);
                    if (token) {
                        const verified = true;
                        const registerUser = new user({name,email,phone,token,isStore,verified,password});
                        await registerUser.save();
                        return res.json({is_success:true,message:"User register successfully"})
                    }
                    else return res.json({ is_success: false, message: "Token not created yet" })
                }
            }
            else return res.json({is_success:false,message:"Please Provide credentials "});
        }
        catch (err) {
            console.log(err)
            res.json({ is_success: false, message: err });
        }
    }

}

module.exports = new Register();