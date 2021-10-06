const BaseController = require("./BaseController");

class GameController extends BaseController{
    getQuestion = (req,res)=> {
       const {userId,Qlvl} = req.params;
    }
    getAnswer = (req,res) => {

    }
    setHistory = (req,res) => {

    }
}

module.exports = GameController;