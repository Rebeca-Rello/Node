const { writeFile } = require('fs');
const fs =require('fs/promises')
const readline =require("readline");
const { writeAndRead } = require('../../proyecto_node/writeAndReadObject');


function pregunta(pregunta){
    const question = new Promise((resolve,reject)=>{
        const rl = readline.createInterface({
            input:process.stdin,
            output:process.stdout
        });
        rl.question(pregunta, (respuesta)=>{
            resolve(respuesta);
            rl.close();
        });
    });
    return question;
}

let newPerson ={ nome: "", 
    surname:"",
    age:0 };

    //**Reto 1**//

// console.log("*********then/catch******");

// fs.writeFile('persona.json', JSON.stringify(newPerson))
// .then(()=>{
//     return fs.readFile('persona.json', 'utf8')
// })
// .then(data=>{
//     console.log(JSON.parse(data));
// })
// .catch(err=>{
//     console.log(err);
// });

// console.log("*******async/await******");

// async function asyncAwait(){

//     try{

//     await fs.writeFile('new.json',JSON.stringify(newPerson))

//     const nuevo =await fs.readFile('new.json', 'utf8')

//     console.log(JSON.parse(nuevo));
  
// }catch(error){
//     console.log(error)
// } 

// }

// asyncAwait()

  //**Reto 2**//

  // console.log("*********then/catch******");

// pregunta("¿Cuál es tu nombre?")
// .then((nome) =>{

//     newPerson.nome = nome;
//     return pregunta("¿Cuál es tu apellido?")
// })
// .then((surname)=>{

//     newPerson.surname = surname;
//     return pregunta("¿Cuántos años tienes?")
// }) 
// .then ((age)=>{

//     newPerson.age = age;
//     return fs.writeFile('persona.json', JSON.stringify(newPerson))
// .then(()=>{
    
//     return fs.readFile('persona.json', 'utf8')
//     })
// .then(data=>{
    
//     console.log(JSON.parse(data));
//    })
//  .catch(err=>{
//     console.log(err);
//     });

// })

// console.log("*******async/await******");


// async function asyncAwait(){

//     try{
//     newPerson.nome = await pregunta("¿Cuál es tu nombre?")

//     newPerson.surname = await pregunta("¿Cuál es tu apellido?")

//     newPerson.age = await pregunta("¿Cuántos años tienes?")

//     await fs.writeFile('new.json',JSON.stringify(newPerson))

//     const nuevo =await fs.readFile('new.json', 'utf8')

//     console.log(JSON.parse(nuevo));

// }catch(error){
//     console.log(error)
// }   

// }
// asyncAwait()



  