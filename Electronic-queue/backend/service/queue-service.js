const QueueModel = require('../models/queue-model');
const TokenService = require('./token-service');
const UserService = require('../service/user-service');
const ApiError = require('../exceptions/api-error');

class QueueService {

    async registerQueue(model, accessToken) {
        const userId = TokenService.findIdByToken(accessToken);
        const user = await UserService.findUser(userId);
        console.log(user);
        console.log(userId);
        console.log(model);
        model.creator = userId;
        model.organisation = user.organisationName;
        const queue = await QueueModel.create(model);
    }

    async getUserQueues(accessToken) {
        const userId = TokenService.findIdByToken(accessToken);
        return await QueueModel.find({creator: userId});
    }
}

module.exports = new QueueService();