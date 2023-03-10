

const express = require ("express");
const app = express ()

// app.get("/", function (request,response){
//     response.send("Petición recibida del cliente");
// });

// app.listen(3000)

//****************/


app.get("/", function(request, response){

    console.log(request.url)
    console.log(request.method)
    console.log(request.headers["user-agent"])
    let respuesta={code:200, ok: true, message: "Recibido!"}
    response.status(200).json(respuesta)
  })

app.listen(3000)

app.get("/bye", function(request, response){

    let respuesta={code:200, ok: true, message: "Recibido!"}
    response.status(200).json(respuesta)
  })

app.listen(3000)

