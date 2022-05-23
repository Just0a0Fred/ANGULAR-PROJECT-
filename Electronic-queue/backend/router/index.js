const { Router } = require("express");
const userController = require('../controllers/user-controller');
const authMiddleware = require('../middleware/auth-middleware');
const queueController = require('../controllers/queue-controller')

const router = new Router();

router.post('/registration', userController.registration);
router.post('/login', userController.login);
router.post('/logout', userController.logout);
router.post('/refresh', userController.refresh);
router.get('/userInfo', authMiddleware, userController.getUser);
router.post('/registerQueue', authMiddleware, queueController.registration);
router.get('/userQueues', authMiddleware, queueController.getUserQueues);

module.exports = router;