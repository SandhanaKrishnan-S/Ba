const { model } = require("mongoose");
const userModel = require("../model/user.model");
const jwt = require('jsonwebtoken')

class clientUserService {
    static async registration(userName, email, phoneNo, password) {
        try {
            const createUser = new userModel({
                userName: userName,
                email: email,
                phoneNo: phoneNo,
                password: password
            });
            return await createUser.save();
        } catch (err) {
            throw err;
        }
    }

    static async checkUser(email) {
        try {
            return await userModel.findOne({ email: email });
        } catch (error) {
            throw error;
        }
    }

    static async generateToken(tokenData, passKey, jwtValidity) {
        return jwt.sign(tokenData, passKey, { expiresIn: jwtValidity });
    }
}

module.exports = clientUserService;
