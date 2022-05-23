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
            const queues = await queueService.getUserQueue(req.headers.authorization.split(' ')[1]);
            return res.json(queues);
        } catch(e) {
            next(e);
        }
    }
}

module.exports = new QueueController();