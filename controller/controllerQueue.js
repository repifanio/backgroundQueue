const Queue = require('../lib/Queue');


class ControllerQueue{
    async index(req, res){


        await Queue.add('jobNumeroUm', { nr_do_job: '1' })
        await Queue.add('jobNumeroDois', { nr_do_job: '2' })
        
        console.log('aqui já rodou');

        return res.json({message: 'Acho que deu certo'})
    }
}



module.exports = new ControllerQueue();