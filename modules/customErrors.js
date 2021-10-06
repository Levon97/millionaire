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

class WrongPassError extends Error{
    constructor(message){
        super(message)
        this.name = 'WrongPassError'
    }
}

module.exports = {ValidationError,EmailError,WrongPassError};