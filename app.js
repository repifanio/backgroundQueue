const app = require('express');
const routes = require('./routes');
const BullBoard = require('bull-board');
const queue = require('./lib/Queue');


class App{
    constructor(){
        this.server = app();
        BullBoard.setQueues(queue.queues.map(queue => queue.bull));
        this.server.use(routes);
        this.server.use(app.json());
        this.server.use('/admin/queues', BullBoard.UI);
    }
}

module.exports = new App().server; 