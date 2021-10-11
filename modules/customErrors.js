// error class for Joi Validations errors
class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}
//error class for email checking
class EmailError extends Error {
    constructor(message) {
        super(message);
        this.name = 'EmailError';
    }
}

class WrongPassError extends Error {
    constructor(message) {
        super(message);
        this.name = 'WrongPassError'
    }
}

class UnauthorizedError extends Error{
    constructor(message){
        super(message);
        this.name = 'UnauthorizedError'
    }
}
module.exports = { ValidationError, EmailError, WrongPassError, UnauthorizedError };