/*Atributos do Aluguel:
id (número único)
livro_id (número, referenciando um livro)
estudante_id (número, referenciando um estudante)
data_aluguel (string, formato de data ISO)
data_devolucao (string, formato de data ISO, opcional)*/
const ctrlLivros = require("../controllers/livros.js")
const ctrlStudants = require("../controllers/estudante.js")

let nextID = 2

module.exports = (body, id = nextID++)=>{
    if(body.livro_id != undefined && body.livro_id != "" && ctrlLivros.show(body.id) &&
        body.estudante_id != undefined && body.estudante_id != "" && ctrlStudants.show(body.id) &&
        body.data_aluguel != undefined && body.data_aluguel != "" &&
        body.data_devolucao != undefined && body.data_devolucao != ""
    ){
        return {id,
            livro_id: body.livro_id,
            estudante_id: body.estudante_id,
            data_aluguel: body.data_aluguel,
            data_devolucao: body.data_devolucao,
        }
    }else{
        return undefined
    }
}