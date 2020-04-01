const queue = require('bull');
const redisConfi = require('../config/redis');

const sendMessageBackground = require('../jobs/sendMessageBackground');

const messageQueue = new queue(sendMessageBackground.key, redisConfi);

module.exports = messageQueue;

