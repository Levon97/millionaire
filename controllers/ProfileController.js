const redisCli = require('../helpers/redisAsync');
const BaseController = require("./BaseController");
const { User, Reward } = require('../models/index');

class ProfileController extends BaseController {
    profileData = async (req,res) => {
        const userId = req.userId;
        try {
            const user = await User.scope('withoutPassword').findOne({ where: { id: userId } })
            console.log(user);
            const rewards = await Reward.findAll({ where: { user_id: user.id } });
            console.log(rewards);
            res.status(200).json({ data: {user:user, rewards: rewards} });
        } catch (error) {
            this.errorHandler(error,res);
        }
    }

    logOut = async (req, res) => {
        try {
            const validToken = req.validToken;
            redisCli.del(validToken);
            res.status(200).json({ data: "log out, token deleted" });
        } catch (error) {
            this.errorHandler(error, res);
        }

    }
}
module.exports = ProfileController;