// error class for Joi Validations errors
class ValidationError extends Error{
    constructor(message){
        super(message);
        this.name = "ValidationError";
    }
}
//error class for email checking
class EmailError extends Error{
    constructor(message){
        super(message)
        this.name = 'EmailError';
    }
}

class VrongPassError extends Error{
    constructor(message){
        super(message)
        this.name = 'VrongPassError'
    }
}

module.exports = {ValidationError,EmailError,VrongPassError};