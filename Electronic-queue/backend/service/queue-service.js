const QueueModel = require('../models/queue-model');
const TokenService = require('./token-service');
const UserService = require('../service/user-service');

class QueueService {

    async registerQueue(model, accessToken) {
        const userId = TokenService.findIdByToken(accessToken);
        const user = await UserService.findUser(userId);
        model.creator = userId;
        model.organisation = user.organisationName;
        model.id = (await this.generateId());
        const queue = await QueueModel.create(model);
    }

    async enrollUserToQueue(queue, accessToken) {
        const userId = TokenService.findIdByToken(accessToken);
        const user = await UserService.findUser(userId);
        const queueDB = await QueueModel.findOne(queue);
        queue.queue.push({userInfo: `${user.surname} ${user.name} ${user.secondname}`, talon: user.userTalon}); 
        queue.maxClients = queue.maxClients -1;
        if (queueDB && queue){
            Object.assign(queueDB, queue);
            queueDB.save();
        }
    }

    async unsubscribeFromSelectedQueue(queue, accessToken) {
        const userId = TokenService.findIdByToken(accessToken);
        const queueDB = await QueueModel.findOne(queue);
        queue.queue.splice(queue.queue.indexOf(queue.queue.find((x) => (x.id == userId))), 1);
        queue.maxClients = queue.maxClients + 1;
        if (queueDB && queue){
            Object.assign(queueDB, queue);
            queueDB.save();
        }
    }

    async isUserSigned(queue, accessToken) {
        const userId = TokenService.findIdByToken(accessToken);
        const user = await UserService.findUser(userId);
        const queueDB = await QueueModel.findOne(queue);
        if (queueDB.queue.find((x) => (x.talon == user.userTalon))) {
            return true;
        } else {
            return false;
        }
    }

    async getUserQueues(accessToken) {
        const userId = TokenService.findIdByToken(accessToken);
        return await QueueModel.find({creator: userId});
    }

    async getAllQueues() {
        return await QueueModel.find();
    }

    async getSignedQueues(accessToken) {
        const userId = TokenService.findIdByToken(accessToken);
        const user = await UserService.findUser(userId);
        return await QueueModel.find({queue: {userInfo: `${user.surname} ${user.name} ${user.secondname}`, talon: user.userTalon}});
    }

    async checkIsUserCreator(queue, accessToken) {
        const userId = TokenService.findIdByToken(accessToken);
        if (queue.creator == userId) {
            return true;
        }
        return false;
    }

    async generateId() {
        const lastQueue = await QueueModel.findOne().sort({$natural: -1}).limit(1);
        const lastId = lastQueue.id;
        return lastId+1;
    }
}

module.exports = new QueueService();