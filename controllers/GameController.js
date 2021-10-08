const BaseController = require("./BaseController");
const { Question, Answer, Game, Reward } = require('../models/index');
const { getQuestion } = require("../services/gameServices");
const {
    awards,
    firstImmutableQuestion,
    secondImmutableQuestion,
    lastQuestion
} = require('../config/constants');

class GameController extends BaseController {
    // Start game Function for /start-game
    startGame = async (req, res) => {
        try {
            const user_id = req.userId;
            const activeRound = await Game.findOne({ where: { active: true, user_id: user_id } })
            if (activeRound) {
                const question = await getQuestion({ id: activeRound.last_question_id }, Question, Answer);
                res.status(200).json({ data: question });
            } else {
                const question = await getQuestion({ lvl: 1 }, Question, Answer);
                await Game.create({
                    user_id: user_id,
                    last_question_id: question.id
                })
                res.status(200).json({ data: question });
            }

        } catch (error) {
            this.errorHandler(error, res)
        }
    }
    answerCheck = async (req, res) => {
        try {
            
            const user_id = req.userId
            const submitedAnswer = req.body;
            // Query for finding submited answer
            const answer = await Answer.findOne({ where: { id: submitedAnswer.id }, include: { model: Question } });
            const awardNumber = awards[answer.Question.lvl / 5];
            // Query for deactivate / end game
            const round = await Game.findOne({ where: { user_id: user_id } });
            round.active = false;
            if (!answer.response) {
                // ending game
                round.save();
                return res.status(200).json({ data: "wrong answer game ended" })
            }

            if (answer.response) {
                const question = await getQuestion({ lvl: ((answer.Question.lvl) + 1) }, Question, Answer);
                // creating new checkpoint
                round.active = true;
                round.last_question_id = question.id;
                round.save();
                return res.status(200).json({ data: question });
            }
            if(awardNumber>1){
            await Reward.create({
                user_id: user_id,
                award: awardNumber
            })
            round.save();
            return res.status(200).json({ data: "Game ended" })
        }

        } catch (error) {
            this.errorHandler(error, res);
        }

    }
}

module.exports = GameController;