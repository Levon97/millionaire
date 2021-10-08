const router = require('express').Router();
const GameController = require('../controllers/GameController');
const verifyToken = require('../middlewares/tokenValidation');
const GameControler = new GameController();

router.post('/start-game', GameControler.startGame);
router.post('/start-game/answer-check',GameControler.answerCheck)


module.exports = router;