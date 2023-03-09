const Book = require ("../models/book")


let book = null

function getStart(request, response)
{
    let respuesta= {error:true, codigo:200, mensaje :'Punto de inicio'};
    response.send(respuesta);
}

function getBook(request, response)
{
    let respuesta;
    if(book!= null)
    respuesta={error:false, codigo:200, data:book};
    
    else
        respuesta = {error:true, codigo:200, mensaje:"El libro no existe"}

    response.send(respuesta);
}

function postBook(request, response)
{
    book = new Book(request.body.title, request.body.type, request.body.author, request.body.price, 
                request.body.photo, request.body.id_book, request.body.id_user)  

    response.send(book)
}

function putBook(request, response)
{
    let respuesta
    if(book !=null)
    {
        book.title  =   request.body.title;
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

function deleteBook(request, response)
{
    let book
    if(book !=null)
    {
        book = null
    }
    response.send(book);
}








module.exports = {getStart, getBook, postBook, putBook, deleteBook}