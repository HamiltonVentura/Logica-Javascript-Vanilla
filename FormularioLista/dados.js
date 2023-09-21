


//limpar a area de exibiçao

let ListaPokemons = new Set();
let pokemonLeitura="";
let ultimoElemnto=0;

function lista(){

  
    for (let pokemon of ListaPokemons.values()){
        pokemonLeitura += pokemon+"<br>";    
    }

    let atual = document.getElementById("pokemons");
    atual.innerHTML="";


    document.getElementById("pokemons").innerHTML= pokemonLeitura;
}
function formPokemon(){
    let formPokemon = document.getElementById("formulario");
    if(formPokemon!=null){
        formPokemon.addEventListener("submit", function(event){
            event.preventDefault(); 
            
            let pok = document.getElementById("pokemon"); //captura o id do imput ,            
            ListaPokemons.add(pok.value); 
            
            console.log(pok.value);
            pok.value="";
            
        });
       
    }else{
        console.log(null);
    }

}