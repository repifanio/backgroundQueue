const app = require('express');
const routes = require('./routes');

class App{
    constructor(){
        this.server = app();
        this.server.use(routes);
        this.server.use(app.json());
    }
}

module.exports = new App().server; 