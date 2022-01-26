const BaseController = require("./BaseController");
const models = require('../models/index');
const { getQuestion } = require("../services/gameServices");
const constants = require('../config/constants');

class GameController extends BaseController {
    // Start game Function for /start-game
    startGame = async (req, res) => {
        try {

            const activeRound = await models.Game.findOne({ where: { active: true, user_id: req.userId } })
            if (activeRound) {
                const question = await getQuestion({ id: activeRound.last_question_id }, models.Question, models.Answer);
                return res.status(200).json({ data: question });
            }
            const question = await getQuestion({ lvl: 1 }, models.Question, models.Answer);
            await models.Game.create({
                user_id: req.userIds,
                last_question_id: question.id
            })
            return res.status(constants.successCode).json({ data: question });


        } catch (error) {
            this.errorHandler(error, res)
        }
    }
    answerCheck = async (req, res) => {
        try {
            const submitedAnswer = req.body;
            // Query for finding submited answer
            const answer = await models.Answer.findOne({ where: { id: submitedAnswer.id }, include: { model: models.Question } });
            const awardNumber = constants.awards[Math.floor(answer.Question.lvl / 5)];
            // Query for deactivate / end game
            const round = await models.Game.findOne({ where: { user_id: req.userId } });
            round.active = false;
            if (!answer.response) {
                // ending game
                round.save();
                return res.status(200).json({ data: "wrong answer game ended" })
            }

            if (answer.response) {
                const question = await getQuestion({ lvl: ((answer.Question.lvl) + 1) }, models.Question, models.Answer);
                // creating new checkpoint
                round.active = true;
                round.last_question_id = question.id;
                round.save();
                return res.status(200).json({ data: question });
            }
            if (awardNumber > 1) {
                await Reward.create({
                    user_id: req.userId,
                    award: awardNumber
                })
                round.save();
                return res.status(constants.successCode).json({ data: "Game ended" })
            }

        } catch (error) {
            this.errorHandler(error, res);
        }

    }
}

module.exports = GameController;