
const readline = require('readline');
const fs =require('fs/promises')

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


function readConsole2(callback){

    let newPerson ={nome:"", surname:"", age:""}

    pregunta("¿Cuál es tu nombre?")
.then((nome) =>{

    newPerson.nome = nome;
    return pregunta("¿Cuál es tu apellido?")
})
.then((surname)=>{

    newPerson.surname = surname;
    return pregunta("¿Cuántos años tienes?")
}) 
.then ((age)=>{
    newPerson.age = age
  
callback(newPerson)    
})

.catch(err=>{
    console.log(err);
})
}

// readConsole2(console.log);


// async function readConsole2(callback){

//     let newPerson ={nome:"", surname:"", age:""}

//     try{
//             newPerson.nome = await pregunta("¿Cuál es tu nombre?")
        
//             newPerson.surname = await pregunta("¿Cuál es tu apellido?")
        
//             newPerson.age = await pregunta("¿Cuántos años tienes?")

//             callback(newPerson)
        
//         }catch(error){
//             console.log(error)
//         }   
        
//     }
    //    readConsole2(console.log);


module.exports = {readConsole2}
