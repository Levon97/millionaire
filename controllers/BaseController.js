class BaseController {

    errorHandler = (err, res) => {
        let code;
        let message;
        const name = err.name;
        console.log(name);
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
                message = 'Wrong password';s
            default:
                code = 400;
                message = err.message || "Bad request"
                break;
        }
         this.resSender(code, {error: message},res);
    }

    // successHandler = (reason, res) => {
    //     let code;
    //     let dataContent;
    //     switch (reason) {
    //         case "logIn":
    //             code = 200;
    //             dataContent = "sign-in success"
    //             break;
    //         case "logIn":
    //             code = 200;
    //             dataContent = "sign-in success"
    //             break;
        
    //         default:
    //             break;
    //     }
    //     this.resSender()
    // }

    resSender = (code, sendData,res) => {
       return res.status(code).json(sendData);
    }

}

module.exports = BaseController;