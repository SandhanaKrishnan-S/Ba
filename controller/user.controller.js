const clientUserService = require('../services/user.service.js');

exports.register = async(req , res , next) => {
    try {
        const {userName , email , phoneNo , password} = req.body;
        const successRes = await clientUserService.registration(userName , email , phoneNo , password);
        res.json({status : true , success : "registration Successfull"});
    } catch (error) {
        throw error;
    }
}