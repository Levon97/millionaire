const router = require('express').Router();
const ProfileController = require('../controllers/ProfileController');
const verifyToken = require('../middlewares/tokenValidation');
const profileController = new ProfileController();

router.use(verifyToken);
router.get('/sign-out', profileController.logOut);
router.get('/profile', profileController.profileData);

module.exports = router;