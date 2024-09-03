const model = require("../models/Estudantes.js")
let db = [{id: 1,
    nome: "jorge",
    matricula: "222s222",
    curso: "lions DEV",
    ano: 2022,
}
]

const studant = {
    store: (body) => {
        let Estudante = model(body)
        if(Estudante){
            db.push(Estudante)

            return 201
        }else{

            return 418
        }
    },

    showAll: () => db,

    show: (qualID) => {
        let Estudante = db.find( (Estudante) =>  Estudante.id == qualID )
        if(Estudante){

            return {Estudante}
        }else{
            return 404
        }
    },

    update: (qualID, body)=>{
        let newEstudante = model(body, qualID)
        let i = db.findIndex((Estudante) => Estudante.id == qualID)
        if( i != (-1)){
            db[i] = newEstudante;

            return 200
        }else{

            return 418
        }
    },

    destroy: (qualID) =>{
        let i = db.findIndex((Estudante) => Estudante.id == qualID)
        if( i != (-1)){
            db.splice(i, 1)

            return 200
        }else{

            return 418
        }
    },
}

module.exports = studant