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
                message = 'Wrong password'; 
            default:
                code = 400;
                message = err.message || "Bad request"
                break;
        }
        this.resSender(code, { error: message }, res);
    }
s
    resSender = (code, sendData, res) => {
        return res.status(code).json(sendData);
    }
    
    getQuestion = async (searchParamObj,Question,Answer) => {
        return await Question.findOne({where: searchParamObj,include: {model: Answer.scope('withoutResponse')}})
    }

}

module.exports = BaseController;