

const Queue = require('./lib/Queue');
const sendMessageBackground = require('./jobs/sendMessageBackground');

Queue.process(sendMessageBackground.handle);