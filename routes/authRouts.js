const router = require('express').Router();
const AuthController = require('../controllers/AuthController')
const authController = new AuthController();

router.post('/sign-up', authController.registration);
router.post('/sign-in',authController.logIn);

module.exports = router;