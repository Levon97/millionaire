const router = require('express').Router();
const GameController = require('../controllers/GameController');
// const verifyToken = require('../middlewares/tokenValidation');
const GameControler = new GameController();

// router.use(verifyToken);
router.get('/start-game', GameControler.startGame);


module.exports = router;