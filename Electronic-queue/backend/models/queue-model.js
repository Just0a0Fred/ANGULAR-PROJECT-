const {Schema, model} = require('mongoose');

const QueueSchema = new Schema ({
    id: {type: Number},
    queue: {type: Array},
    startDate: {type: String, required: true},
    name: {type: String, required: true},
    organisation: {type: String, required: true},
    adress: {type: String, required: true},
    creator: {type: Schema.Types.ObjectId, ref: 'User', required: true},
    cabinet: {type: String},
    maxClients: {type: Number, required: true}
})

module.exports = model('Queue', QueueSchema);