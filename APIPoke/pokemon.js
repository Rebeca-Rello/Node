



function consultarPokemon(nom){
    fetch(`https://pokeapi.co/api/v2/pokemon/${nom}`)

.then(function (response) {
    response.json()
    .then(function(pokemon){

        console.log(pokemon.name)
        console.log(pokemon.abilities)
        
    })
  .catch(error=>{
    console.log(error);
  }) 

})
}
consultarPokemon(15)

let pokemons = document.getElementById("pokemon")