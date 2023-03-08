const { writeFile } = require('fs');
const fs =require('fs/promises')




function writeAndRead(path, obj){

fs.writeFile(path, JSON.stringify(obj))
  
.then(()=>{

    return fs.readFile(path,'utf8')
})
.then(data =>{

  console.log(JSON.parse(data));
})

.catch(err =>{
  console.log(err);
})
} 
  
// let persona ={nome:"Rebeca", surname:"Rello", age:37}
// writeAndRead("./prueba.json", persona);






  // async function writeAndRead(path, obj){

  // try{
  //     await fs.writeFile(path, JSON.stringify(obj))
  //     const nuevo =await fs.readFile(path, 'utf8')

  //     console.log(JSON.parse(nuevo));

  // }catch(error){
  //     console.log(error)
  // }}

    


// let persona ={nome:"Rebeca", surname:"Rello", age:37};
// writeAndRead("./prueba.json", persona);




module.exports = {writeAndRead}