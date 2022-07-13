const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const passwordComplexity= require("joi-password-complexity");
const customJoi = require("joi-age");


const userSchema = new mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    age: {type: Date, required: true},
    stadt: {type: String, required: true},
    email: {type: String, reuqired: true},
    password: {type: String, required: true},
    verified: {type: Boolean, default: false}
});

userSchema.methods.generateAuthToken = function(){
    const token = jwt.sign({_id:this._id}, process.env.JWTPRIVATEKEY, {expiresIn:"7d"});
    return token
};

const User = mongoose.model("user", userSchema);

const validate = (data) =>{
    const date18YearsAgo = new Date(Date.now() - 1000 * 60 * 60 * 24 * 365 * 18);
    const schema = Joi.object({
        firstName: Joi.string().required().label("First Name"),
        lastName: Joi.string().required().label("Last Name"),
        age: Joi.date().max(date18YearsAgo).required().label("Age"),
        stadt: Joi.string().required().label("Stadt"),
        email: Joi.string().required().label("Email"),
        password: Joi.string().required().label("Password"),

    });
    return schema.validate(data);
}

module.exports = {User, validate};