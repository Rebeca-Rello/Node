

let pokename = document.getElementById("pokemon")
let cuerpo = document.querySelector(".ficha")
let pokeImg = document.getElementById("pokeImg")
let piramidepurpura = document.getElementById("piramidepurpura")
let types1 = document.getElementById("types1")
let types2 = document.getElementById("types2")

function busqueda(pokename){

  consultarPokemon(pokename.value)


}


function consultarPokemon(nom){
    fetch(`https://pokeapi.co/api/v2/pokemon/${nom}`)

    .then(function (response) {
    
         return response.json()
  
       .then(function(pokemon){
        
    
        pokeImg.src = pokemon.sprites.other.home.front_default;
        piramidepurpura.innerHTML = pokemon.name;
        types1.innerHTML = pokemon.types[0].type.name;
        types2.innerHTML = pokemon.types[1].type.name;

        
        
    })
  .catch(error=>{
    console.log(error);
  }) 

})
}




