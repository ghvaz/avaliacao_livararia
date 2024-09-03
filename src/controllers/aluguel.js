/*Atributos do Aluguel:
id (número único)
livro_id (número, referenciando um livro)
estudante_id (número, referenciando um estudante)
data_aluguel (string, formato de data ISO)
data_devolucao (string, formato de data ISO, opcional)*/

const model = require("../models/alugueis.js")
let db = [{id: 1,
    livro_id: 1,
    estudante_id: 1,
    data_aluguel: "03-09-2024",
    data_devolucao: "10-09-2024"
}
]

const studant = {
    store: (body) => {
        let aluguel = model(body)
        if(aluguel){
            db.push(aluguel)

            return 201
        }else{

            return 418
        }
    },

    showAll: () => db,

    show: (qualID) => {
        let aluguel = db.find( (aluguel) =>  aluguel.id == qualID )
        if(aluguel){

            return {aluguel}
        }else{
            return 404
        }
    },

    update: (qualID, body)=>{
        let newaluguel = model(body, qualID)
        let i = db.findIndex((aluguel) => aluguel.id == qualID)
        if( i != (-1)){
            db[i] = newaluguel;

            return 200
        }else{

            return 418
        }
    },

    destroy: (qualID) =>{
        let i = db.findIndex((aluguel) => aluguel.id == qualID)
        if( i != (-1)){
            db.splice(i, 1)

            return 200
        }else{

            return 418
        }
    },
}

module.exports = studant