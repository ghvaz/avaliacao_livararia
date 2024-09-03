const express = require('express')
const app = express()
app.use(express.json())

const port = 9000


const livro_route = require('./routes/livros.js')
app.use("/lv", livro_route)

const estudante_route = require('./routes/estudantes.js')
app.use("/std", estudante_route)

const aluguel_route = require('./routes/alugueis.js')
app.use("/alg", aluguel_route)



app.listen(port, ()=>{
    console.log("Ouvindo a porta "+port)
})