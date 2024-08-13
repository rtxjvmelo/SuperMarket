const app = require('./app')
const port = 5000

app.listen(port, (erro) =>{
    if(erro){
        console.log(`Erro ao iniciar o serivdor: ${erro}`)
    }else{
        console.log(`Servidor rodando em http://localhost:${port}`)
    }
})