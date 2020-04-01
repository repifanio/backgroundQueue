const Queue = require('../lib/Queue');


class ControllerQueue{
    async index(req, res){

        await Queue.add({ nome_da_fila: 'Fila de teste' })

        console.log('aqui já rodou');

        return res.json({message: 'Acho que deu certo'})
    }
}



module.exports = new ControllerQueue();