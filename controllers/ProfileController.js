const redisCli = require('../helpers/redisAsync');
const BaseController = require("./BaseController");
const { User, Reward } = require('../models/index');

class ProfileController extends BaseController {
    profileData = async () => {
        const userId = userId;
        try {
            const user = await User.scope('withoutPassword').findOne({ where: { user_id: userId } })
            const rewards = await Reward.findAll({ where: { user_id: user.id } });
            res.status(200).json({ data: {user:user, rewards: rewards} });
        } catch (error) {

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