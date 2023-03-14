const { string } = require("joi");
const jwt = require("jsonwebtoken")

const user = require('../models/userModelSchema')


const checkUserAuth = async (req, res, next) => {
    let token;
    const { authorization } = req.headers;
    if (authorization && authorization.startsWith("Bearer")) {
        try {
            token = authorization.split(" ")[1];
            const { userId } = jwt.verify(token, process.env.JWT_SECRET_KEY);
            req.user = await user.findById(userId).select('-password');
            next()
        } catch (err) {
            res.status(401).send({
                status: "failed",
                message: "authentication failed, unauthorized access" + err.message
            });
        }
    }
    if (!token) {
        res.status(401).send({ "message": "unauthorized user" });
    }
}

module.exports = { checkUserAuth }
