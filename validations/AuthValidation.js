const Joi = require('joi');


module.exports = class AuthValidation {
    // registration validation schema 
     regVal = (data)=>{
        const schema = Joi.object({
            first_name: Joi.string().min(3).max(45).required(),
            last_name: Joi.string().min(3).max(45).required(),
            email: Joi.string().min(6).max(80).required().email(),
            password: Joi.string().min(6).max(30).required(),
    
        })
    
        return schema.validate(data);
    }
    //login validation schema
    logVal = (data) =>{
        const schema = Joi.object({
            email: Joi.string().min(6).max(80).required().email(),
            password: Joi.string().min(6).max(30).required(),
    
        })
    
        return schema.validate(data);
    }

}
