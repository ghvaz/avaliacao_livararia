const express = require("express")
const rota = express.Router()
const ctrl_aluguel = require("../controllers/aluguel.js")


rota.get("/", (rq,rs)=>{
    rs.json(ctrl_aluguel.showAll())
})

rota.get("/:id", (rq,rs)=>{
    let std = ctrl_aluguel.show(rq.params.id)

    if(std == 404){
        rs.status(std).json()
    }else{
        rs.json(std)
    }
    
})

rota.post("/", (rq,rs) => {
    const code = ctrl_aluguel.store(rq.body)
    rs.status(code).json()
})

rota.put("/:id", (rq,rs)=>{
    let code = ctrl_aluguel.update(rq.params.id, rq.body)
    rs.status(code).json()
})

rota.delete("/:id", (rq,rs)=>{
    let code = ctrl_aluguel.destroy(rq.params.id)
    rs.status(code).json()
})



module.exports = rota