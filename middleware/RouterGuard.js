const jwt = require('jsonwebtoken');
const user = require('../models/user');
const store = require('../models/store');

const RouterGuard = async (req,res,next) => {
    try {
        const auth = req.headers['auth'];
        const token = auth.split(' ')[1];
        const verify = await jwt.verify(token,process.env.AUTH_KEY);
        if (verify) {
            const User = await user.findOne({ token });
            if (User) {
                req.User = User;
                next();

            }
        }
    }
    catch (err) {
        res.json({ is_success: false, message: "Unauthorized access" });
    }
}

module.exports = RouterGuard;