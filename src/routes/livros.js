const express = require("express")
const rota = express.Router()
const ctrl_livros = require('../controllers/livros.js')


rota.get("/", (rq,rs)=>{
    rs.json(ctrl_livros.showAll())
})

rota.get("/:id", (rq,rs)=>{
    let livro = ctrl_livros.show(rq.params.id)

    if(livro == 404){
        rs.status(livro).json()
    }else{
        rs.json(livro)
    }
    
})

rota.post("/", (rq,rs) => {
    const code = ctrl_livros.store(rq.body)
    rs.status(code).json()
})

rota.put("/:id", (rq,rs)=>{
    let code = ctrl_livros.update(rq.params.id, rq.body)
    rs.status(code).json()
})

rota.delete("/:id", (rq,rs)=>{
    let code = ctrl_livros.destroy(rq.params.id)
    rs.status(code).json()
})



module.exports = rota