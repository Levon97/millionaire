class BaseController {

    errorHandler = (err, res) => {
        let code;
        let message;
        const name = err.name;
        switch (name) {
            case "ValidationError":
                code = 400;
                message = err.message;
                break;
            case "EmailExistError":
                code = 400;
                message = "Email already exists"
                break;
            case "wrongPass":
                code = 401;
                message = 'Wrong password';
            case "UnauthorizedError":
                code = 401;
                message = 'Unauthorized'
            default:
                code = 400;
                message = err.message || "Bad request"
                break;
        }
        res.status(code).json({ error: message });
    }

}

module.exports = BaseController;