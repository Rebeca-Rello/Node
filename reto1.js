

// console.log("Mensaje 1");   

// setTimeout(function()
//     {
//         console.log("Mensaje 2");
//         console.log("Mensaje 3");

//       }, 3000);


///****reto2******/////


const fs = require('fs');
const readline = require('readline');
let persona ={nome: "", surname:"", age:0}
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});



//**writeFile: escribe el objeto en el archivo json**/



rl.question("¿Cuál es tu nombre?", (name) => {
    rl.question("¿Cuál es tu apellido? ", (surname) => {
        rl.question("¿Cuántos años tienes? ", (age)=> {
            let newPerson ={ name: name, surname:surname, age:age };
            
        
        
        fs.writeFile('persona.json', JSON.stringify(newPerson), 'utf8', (err) => {
                if (err) throw err;
               

                fs.readFile("persona.json", (err, data) => {
                    if (err) throw err;
                    let newPerson = JSON.parse(data);
                    console.log(`Hola ${newPerson.name} ${newPerson.surname} y tienes ${newPerson.age} años`);
                    rl.close();
                });
            }

        );

    });
});
});








