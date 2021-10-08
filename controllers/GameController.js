
const BaseController = require("./BaseController");
const {Question,Answer} = require('../models/index');

class GameController extends BaseController {
    // startGame = async (req, res) => {
    //     try {
    //         const user_id = req.userId;
    //         const activeRound = await Game.findOne({ where: { active: true, user_id: user_id } })
    //         if (activeRound) {
    //             const question = await Question.findOne({ where: { id: activeRound.last_question_id } })
    //             const answers = await Answer.findAll({ where: { question_id: question.id } })
    //             return res.status(200).json({ data: { question, answers } });
    //         }
    //         return res.status(200).json("no active game");
    //     } catch (error) {
    //         this.errorHandler(error, res);
    //     }

    // }
    getQuestion = async (req, res) => {
        try {
            const user_id = req.userId;
            const { Qlvl } = req.params;
            const question = await Question.findOne({ where: { lvl: Number(Qlvl) } });
            const answers = await Answer.findAll({ where: { question_id: question.id } })
            console.log(question, Qlvl);
            await Game.create({
                user_id: user_id,
                last_question_id: question.id,
                active: req.active
            })
            res.status(200).json({ data: { question, answers } });
        } catch (error) {
            this.errorHandler(error, res);
        }


    }

    setHistory = async (req, res) => {
        try {
            const round = req.body;
            await GameUserMap.create({
                game_id: round.id,
                question_id: round.last_question_id,
            })


        } catch (error) {

        }

    }
    startGame = async (req, res) => {
        const test = await Question.findOne({ logging: true, where: { id: 5 },include: {model: Answer.scope('withoutResponse')}})
        res.json({data: test});
        
    }

}

module.exports = GameController;
//  id: {
//       allowNull: false,
//       autoIncrement: true,
//       primaryKey: true,
//       type: DataTypes.INTEGER
//     },
//     game_id: {
//       type: DataTypes.INTEGER,
//     },
//     question_id: {
//       type: DataTypes.INTEGER,
//     },