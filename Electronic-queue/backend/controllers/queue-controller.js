const queueService = require('../service/queue-service');

class QueueController {
    async registration(req, res, next) {
        try {
            const queueData = await queueService.registerQueue(req.body, req.headers.authorization.split(' ')[1]);

            return res.json(queueData);
        } catch(e) {
            next(e);
        }
    }

    async getUserQueues(req, res, next) {
        try {
            const queues = await queueService.getUserQueues(req.headers.authorization.split(' ')[1]);
            return res.json(queues);
        } catch(e) {
            next(e);
        }
    }

    async getSignedQueues(req, res, next) {
        try {
            const queues = await queueService.getSignedQueues(req.headers.authorization.split(' ')[1]);
            return res.json(queues);
        } catch(e) {
            next(e);
        }
    }

    async getAllQueues(req, res, next) {
        try {
            const queues = await queueService.getAllQueues();
            return res.json(queues);
        } catch(e) {
            next(e);
        }
    }

    async checkIsUserCreator(req, res, next) {
        try {
            const isUserCreator = await queueService.checkIsUserCreator(req.body ,req.headers.authorization.split(' ')[1]);
            return res.json(isUserCreator);
        } catch(e) {
            next(e);
        }
    }

    async enrollUserToQueue(req, res, next) {
        try {
            const queue = await queueService.enrollUserToQueue(req.body ,req.headers.authorization.split(' ')[1])
        } catch(e) {
            next(e);
        }
    }

    async unsubscribeFromSelectedQueue(req, res, next) {
        try {
            const queue = await queueService.unsubscribeFromSelectedQueue(req.body ,req.headers.authorization.split(' ')[1])
        } catch(e) {
            next(e);
        }
    }

    async isUserSigned(req, res, next) {
        try {
            const isUserSigned = await queueService.isUserSigned(req.body ,req.headers.authorization.split(' ')[1])
            return res.json(isUserSigned);
        } catch(e) {
            next(e);
        }
    }
}

module.exports = new QueueController();