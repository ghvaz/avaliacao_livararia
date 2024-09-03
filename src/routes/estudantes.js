const express = require("express")
const rota = express.Router()
const ctrl_estudante = require('../controllers/estudante.js')


rota.get("/", (rq,rs)=>{
    rs.json(ctrl_estudante.showAll())
})

rota.get("/:id", (rq,rs)=>{
    let std = ctrl_estudante.show(rq.params.id)

    if(std == 404){
        rs.status(std).json()
    }else{
        rs.json(std)
    }
    
})

rota.post("/", (rq,rs) => {
    const code = ctrl_estudante.store(rq.body)
    rs.status(code).json()
})

rota.put("/:id", (rq,rs)=>{
    let code = ctrl_estudante.update(rq.params.id, rq.body)
    rs.status(code).json()
})

rota.delete("/:id", (rq,rs)=>{
    let code = ctrl_estudante.destroy(rq.params.id)
    rs.status(code).json()
})



module.exports = rota