const queue = require('bull');
const redisConfi = require('../config/redis');

const jobs = require('../jobs/index');

const queues = Object.values(jobs).map(job => {
    return {
        bull: new queue(job.key, redisConfi),
        name: job.key,
        handle: job.handle,
    }
})

module.exports = {
    queues,
    add(name, data) {
        const queue = this.queues.find(queue => queue.name === name);

        return queue.bull.add(data);
    },
    process(){
        return this.queues.forEach(queue => {
            queue.bull.process(queue.handle);

            queue.bull.on('failed', (job, err) => {
                console.log('job failed', job.name, job.data);
                console.log(err);
            });
         }); 
    }
};

//const messageQueue = new queue(sendMessageBackground.key, redisConfi);

