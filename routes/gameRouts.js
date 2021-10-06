const router = require('express').Router();
const GameController = require('../controllers/GameControler');
const verifyToken = require('../middlewares/tokenValidation');
const GameControler = new GameController();

router.use(verifyToken);
router.get('/:user_id/:lvl', profileController.logOut);
// router.get('/profile', profileController.profileData);
// router.post(./)

module.exports = router;