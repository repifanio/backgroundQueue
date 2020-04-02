module.exports = {
    key: 'jobNumeroDois',
    async handle({data}) {
        await new Promise(resolve => setTimeout(resolve, 5000));
        console.log(`Essa mensagem pertence ao Job número: ${data.nr_do_job}`);

        const arr = [null, undefined, 0, 1, 2];
        const newArr = arr.filter(Boolean);

        console.log(newArr);

    }
}