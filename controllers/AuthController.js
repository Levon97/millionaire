const BaseController = require('./BaseController');
const models = require('../models/index');
const {tokenCreator} = require('../helpers/tokenCreator');
const redisCli = require('../helpers/redisAsync');
const AuthValidation = require('../validations/AuthValidation');
const { hash,verify} =  require('../helpers/PassConverter');
const {ValidationError,EmailError,WrongPassError} = require('../modules/customErrors');
const constants = require('../config/constants');
const { model } = require('../models/index');


module.exports = class AuthController extends BaseController {
    registration = async (req,res) => {
    try {
        // checking inputed data for registration valide or not
        const {error}  = new AuthValidation().regVal(req.body);
        if (error) throw new ValidationError(error.details[0].message);
        
        // checking is there a user with inputed email
        const isEmailExist = await models.User.findOne({ where: { email: req.body.email } });
        if (isEmailExist) throw new EmailError("Email alredy exists");
        
        const hashedPass = await hash(req.body.password);
        
        //   creating user and saving on db
        const regUser = await models.User.create({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email:req.body.email,
            password: hashedPass,
            });
                    
        res.status(constants.successCode).json({ data: regUser });
        } catch (error) {
           this.errorHandler(error,res);
        }
    }

   logIn = async (req,res) => {
    try {    
        //validastion for  email and pass
        const {error}  = new AuthValidation().logVal(req.body);
        if (error) throw new ValidationError(error.details[0].message);
        
        // checking is there a user with inputed email
        const user = await models.User.findOne({ where: { email: req.body.email } });
        if (!user) throw new EmailError("User with this email not found");
        
        const validPassword = await verify(req.body.password, user.password)
        if(!validPassword) throw new WrongPassError("wrong inputed password");
        
        
            const token = await tokenCreator(48);
            await redisCli.setAsync(token, user.id, 'EX', constants.redisExpireTime);  
            res.status(constants.successCode).json({data: token,
            });
        } catch (error) {
            this.errorHandler(error,res);
        }
    }
}

