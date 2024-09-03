/*    Atributos do Estudante:
    id (número único)
    nome (string)
    matrícula (string)
    curso (string)
    ano (número)
*/

let nextID = 2

module.exports = (body, id = nextID++)=>{
    console.log(body);
    if(body.nome != undefined && body.nome != "" &&
        body.matricula != undefined && body.matricula != "" &&
        body.curso != undefined && body.curso != "" &&
        body.ano != undefined && body.ano != ""
    ){
        return {id,
            nome: body.nome,
            matricula: body.matricula,
            curso: body.curso,
            ano: body.ano,
        }
    }else{
        return undefined
    }
}