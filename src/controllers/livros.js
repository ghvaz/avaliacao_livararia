const model = require("../models/livros.js")
let db = [{id :1,
    titulo: "pequeno principe",
    autor: "Antoine de Saint-Exupéry",
    ano: 1943,
    genero: ["Literatura infantil", "Fábula", "Novela", "Ficção especulativa"]
}
]

const book = {
    store: (body) => {
        let livro = model(body)
        // console.log(livro);
        if(livro){
            db.push(livro)

            return 201
        }else{

            return 418
        }
    },

    showAll: () => db,

    show: (qualID) => {
        let livro = db.find( (livro) =>  livro.id == qualID )
        if(livro){

            return {livro}
        }else{
            return 404
        }
    },

    update: (qualID, body)=>{
        let newLivro = model(body, qualID)
        let i = db.findIndex((livro) => livro.id == qualID)
        if( i != (-1)){
            db[i] = newLivro;

            return 200
        }else{

            return 418
        }
    },

    destroy: (qualID) =>{
        let i = db.findIndex((livro) => livro.id == qualID)
        if( i != (-1)){
            db.splice(i, 1)

            return 200
        }else{

            return 418
        }
    },
}

module.exports = book