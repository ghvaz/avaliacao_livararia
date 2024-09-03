/*    Atributos do Livro:
    id (número único)
    título (string)
    autor (string)
    ano (número)
    gênero (string)
*/
let nextID = 2

module.exports = (body, id = nextID++)=>{
    if(body.titulo != undefined && body.titulo != "" &&
        body.autor != undefined && body.autor != "" &&
        body.ano != undefined && body.ano != ""
    ){
        return {id,
            titulo: body.titulo,
            autor: body.autor,
            ano: body.ano,
            genero: body.genero
        }
    }else{
        return undefined
    }
}