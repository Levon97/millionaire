const router = require('express').Router();
const ProfileController = require('../controllers/ProfileController');
const verifyToken = require('../middlewares/tokenValidation');
const profileController = new ProfileController();


router.get('/sign-out',verifyToken, profileController.logOut);
router.get('/profile',verifyToken, profileController.profileData);

module.exports = router;