const clientUserService = require('../services/user.service.js');

exports.register = async(req , res , next) => {
    try {
        const {userName , email , phoneNo , password} = req.body;
        const successRes = await clientUserService.registration(userName , email , phoneNo , password);
        res.json(
                {
                    status : true ,
                    success : "registration Successfull"
                }
            );
    } catch (error) {
        throw error;
    }
}
exports.login = async(req , res , next) => {
    try {
        const {email , password} = req.body;
        const user = await clientUserService.checkUser(email);
        if (!user) {
            throw new Error('user not found');
        } 
        const isMatch = await user.compare(password);
        if(isMatch === false) {
            throw new Error("invalid password");
        }

        let tokenData = {
            _id : user._id , 
            email : user.email ,
        }

        const token = await clientUserService.generateToken(tokenData , "passKey" , '1h');
        res.status(200).json(
            {
                status : true , 
                token : token
            }
        );
    } catch (error) {
        throw error;
    }
}