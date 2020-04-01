const {Router} = require('express');
const controllerQueue = require('./controller/controllerQueue');

const routes = Router();

routes.get('/', controllerQueue.index);

module.exports = routes;