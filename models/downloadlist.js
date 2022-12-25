const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const downloadListSchema = new Schema({
    url: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        required: true
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
});

module.exports = mongoose.model('DownloadList', downloadListSchema);
