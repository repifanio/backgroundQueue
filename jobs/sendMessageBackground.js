module.exports = {
    key: 'sendMessageBackground',
    async handle({data}) {
        await new Promise(resolve => setTimeout(resolve, 5000));
        console.log(`Essa mensagem está sendo enviada através de uma fila separada com o nome de fila: ${data.nome_da_fila}`);
    }
}