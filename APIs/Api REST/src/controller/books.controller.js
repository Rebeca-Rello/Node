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
    let codigo = request.query.id_book
    let respuesta
    if(libros !=null )
   
   
   
    response.send(respuesta);
}







function getBooks(request, response)
{   
   let respuesta = libros;
   response.send(respuesta)
   
}




function postBooks(request, response)
{
    book = new Book(request.body.title, request.body.type, request.body.author, request.body.price, 
                request.body.photo, request.body.id_book, request.body.id_user)  

    response.send(book)
}

function putBooks(request, response)
{
    let respuesta
    if(book !=null)
    {
        books.title  =   request.body.title;
        book.type   =   request.body.type;
        book.author =   request.body.author;
        book.price  =   request.body.price;
        book.photo  =   request.body.photo;
        book.id_book =  request.body.id_book;
        book.id_user =  request.body.id_user;

        respuesta = {error:false, codigo:200,
                    mensaje:"El libro se ha modificado",data:book}

    }
    else 
       respuesta = {error:true, codigo:200, 
                    mensaje: "El libro no existe"}
    response.send(respuesta)
}

function deleteBooks(request, response)
{
    let books
    if(books !=null)
    {
        books = null
    }
    response.send(books);
}








module.exports = {getFind, getBooks, postBooks, putBooks, deleteBooks}