const redisCli = require('../helpers/redisAsync');
const BaseController = require("./BaseController");
const models = require('../models/index');
const constants = require('../config/constants');

class ProfileController extends BaseController {
    profileData = async (req,res) => {
        try {
            const user = await models.User.scope('withoutPassword').findOne({ where: { id: req.userId } })
            const rewards = await models.Reward.findAll({ where: { user_id: user.id } });
            res.status(constants.successCode).json({ data: {user:user, rewards: rewards} });
        } catch (error) {
            this.errorHandler(error,res);
        }
    }

    logOut = async (req, res) => {
        try {
            const validToken = req.validToken;
            redisCli.del(validToken);
            res.status(constants.successCode).json({ data: "log out, token deleted" });
        } catch (error) {
            this.errorHandler(error, res);
        }

    }
}
module.exports = ProfileController;