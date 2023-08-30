const { model } = require("mongoose");
const userModel = require("../model/user.model");

class clientUserService {
    static async registration(userName , email , phoneNo , password) {
        try {
            const createUser = new userModel({
                userName: userName,
                email: email,
                phoneNo: phoneNo,
                password: password
        });
            return await createUser.save();
        } catch(err) {
            throw err;
        }
    }
}

module.exports = clientUserService;