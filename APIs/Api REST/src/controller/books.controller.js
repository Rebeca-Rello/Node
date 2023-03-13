const Book = require ("../models/book")


let book1 = new Book( "Donde los árboles cantan", "Fantasía", "Laura Gallego", 20, 
"https://m.media-amazon.com/images/I/51AcjmteB+L._SY344_BO1,204,203,200_.jpg",1234, 12);

let book2 = new Book ( "Los Pilares de la Tierra", "Historia","Ken Follet",25,
 "https://pictures.abebooks.com/isbn/9788499086514-es.jpg",1345,21)

let book3 = new Book ("Un cuento perfecto", "Romántica", "Elisabet Benavent", 25,
   "https://imagessl3.casadellibro.com/a/l/t7/13/9788466354813.jpg",4567,32)

let libros=[book1, book2, book3];

function getFind(request, response)
{   
    let codigo = request.query.id;
    let respuesta;
   
    let bookfound= libros.find(book =>book.id_book == codigo)
    if(!codigo){
                
            respuesta=libros
    }else{

     if(bookfound != undefined){
        respuesta= {error:false, codigo:200, 
            mensaje:"El libro se ha encontrado.", data:[bookfound]}
          
    }
    else{
        respuesta= {error:true, codigo:200,
            mensaje:"No hay coincidencias"}
        }}
       
    response.send(respuesta);
    }

put


function postBooks(request, response)
{
    let respuesta
    libros.push(new Book( request.body.title, request.body.type,request.body.author, request.body.price,
                         request.body.photo, request.body.id_book,  request.body.id_user))

        respuesta ={error:false, codigo:200, 
            mensaje:"El libro se añadido.", data:libros}

    response.send(respuesta)
}



function putBooks(request, response)
{
    let respuesta
    let codigo = libros.findIndex(book =>book.id_book ==  request.body.id_book)
    if(codigo != -1)
    {
        libros[codigo].title  =   request.body.title;
        libros[codigo].type   =   request.body.type;
        libros[codigo].author =   request.body.author;
        libros[codigo].price  =   request.body.price;
        libros[codigo].photo  =   request.body.photo;
        libros[codigo].id_book =  request.body.id_book;
        libros[codigo].id_user =  request.body.id_user;

        respuesta = {error:false, codigo:200,
                    mensaje:"El libro se ha modificado",data:libros}

    }
    else 
       respuesta = {error:true, codigo:200, 
                    mensaje: "El libro no existe"}
    response.send(respuesta)
}




function deleteBooks(request, response)
{
    let respuesta
    let codigo = libros.findIndex(book =>book.id_book ==  request.body.id_book)
    if(codigo != -1)
    {
    libros.splice(codigo, 1)    
        respuesta ={error:false, codigo:200, 
            mensaje:"El libro se ha borrado", data:libros}

}
else{
    respuesta ={error:true, codigo:200, 
                mensaje:"No existe el libro", data:libros}
}
      response.send(respuesta)
}

module.exports = {getFind,postBooks, putBooks, deleteBooks}