class BaseController {
    constructor(deps) {
        this.deps = deps;
    }

    errorHandler = (err, res) => {
        const name = err.name;
        console.log(name);
        switch (name) {
            case "ValidationError":
                res.status(400).json({ error: err.message });
                break;
            case "EmailExistError":
                res.status(400).json({ error: "Email already exists" });
                break;
            case "wrongPass":
                res.status(401).json({ error: 'Wrong password' });
            default:
                res.status(400).json({ error: "Bad request" });
                break;
        }
    }
    

}

module.exports = BaseController;