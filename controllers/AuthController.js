const BaseController = require('./BaseController');
const {User} = require('../models/index');
const {crypto,tokenCreator} = require('../helpers/tokenCreator');
const redisCli = require('../helpers/redisAsync');
const AuthValidation = require('../validations/AuthValidation');
const { hash,verify} =  require('../helpers/PassConverter');
const {ValidationError,EmailError,WrongPassError} = require('../modules/customErrors');


module.exports = class AuthController extends BaseController {
    registration = async (req,res) => {
    try {
        // checking inputed data for registration valide or not
        const {error}  = new AuthValidation().regVal(req.body);
        console.log(error);
        if (error) throw new ValidationError(error.details[0].message);
        
        // checking is there a user with inputed email
        const isEmailExist = await User.findOne({ where: { email: req.body.email } });
        if (isEmailExist) throw new EmailError("Email alredy exists");
        
        const hashedPass = await hash(req.body.password);
        console.log(hashedPass);
        
        //   creating user and saving on db
        const regUser = await User.create({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email:req.body.email,
            password: hashedPass,
            });
                    
        res.status(200).json({ data: regUser });
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
        const user = await User.findOne({ where: { email: req.body.email } });
        if (!user) throw new EmailError("User with this email not found");
        
        const validPassword = await verify(req.body.password, user.password)
        if(!validPassword) throw new WrongPassError("wrong inputed password");
        
        
            const token = await tokenCreator(48);
            await redisCli.setAsync(token, user.user_id, 'EX', 60*60);  
            res.status(200).json({data: { token},
            });
        } catch (error) {
            this.errorHandler(error,res);
        }
    }
}

