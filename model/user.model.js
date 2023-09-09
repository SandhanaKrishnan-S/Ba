const mongoose = require('mongoose');
const connections = require('../config/database');
const bcrypt = require('bcrypt');

const { Schema } = mongoose;

const userSchema = new mongoose.Schema({
    userName : {
        type : String,
        required : true,
        unique : true
    } , 
    email : {
        type : String,
        lowercase : true,
        required : true,
        unique : true
    } ,
    phoneNo : { 
        type : String,
        required : true,
        unique : true
    } ,
    password : {
        type : String,
        required : true
    } 
 
});

userSchema.pre('save' , async function() {
    try {
        var user = this;
        const salt = await(bcrypt.genSalt(10));
        const hashpass = await bcrypt.hash(user.password , salt);

        user.password = hashpass;
    } catch (error) {
        throw error;
    }
})

userSchema.methods.compare = async function(userPass) {
    try {
        const isMatch = await bcrypt.compare(userPass , this.password);
        return isMatch;
    } catch (error) {
        throw error;
    }
}

const userModel = mongoose.model('clientUser' , userSchema);

module.exports = userModel;