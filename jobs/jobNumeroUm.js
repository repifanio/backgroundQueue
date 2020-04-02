module.exports = {
    key: 'jobNumeroUm',
    async handle({data}) {
        await new Promise(resolve => setTimeout(resolve, 9000));
        console.log(`Essa mensagem pertence ao Job número: ${data.nr_do_job}`);
    }
}