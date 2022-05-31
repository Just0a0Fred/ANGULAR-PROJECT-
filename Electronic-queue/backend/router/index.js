const { Router } = require("express");
const userController = require('../controllers/user-controller');
const authMiddleware = require('../middleware/auth-middleware');
const queueController = require('../controllers/queue-controller')

const router = new Router();

router.post('/registration', userController.registration);
router.post('/login', userController.login);
router.post('/logout', userController.logout);
router.post('/checkAuthorization', userController.checkAuthorization);
router.get('/userInfo', authMiddleware, userController.getUser);
router.get('/isUserAdmin', authMiddleware, userController.checkUserTypeAdmin);
router.post('/registerQueue', authMiddleware, queueController.registration);
router.get('/userQueues', authMiddleware, queueController.getUserQueues);
router.get('/getSignedQueues', authMiddleware, queueController.getSignedQueues);
router.get('/getAllQueues', queueController.getAllQueues);
router.patch('/enrollUserToQueue', authMiddleware, queueController.enrollUserToQueue);
router.patch('/unsubscribeFromSelectedQueue', authMiddleware, queueController.unsubscribeFromSelectedQueue);
router.post('/isUserSigned', authMiddleware, queueController.isUserSigned);
router.post('/isUserCreator', authMiddleware, queueController.checkIsUserCreator);

module.exports = router;