


//limpar a area de exibiçao

let ListaPokemons = new Set(); //não aceita elementos repetidos
let pokemonLeitura="";
let ultimoElemnto=0;

function lista(){

    //quando listo novamente aqui ele apaga os elementos anteriores
    if(ListaPokemons.size==0){
        document.getElementById("pokemons").innerHTML="Nenhum pokemon cadastrado";
        return;
    }
    if(ListaPokemons.size!=0){
        document.getElementById("pokemons").innerHTML=" "; //limpa a area de exibiçao

        for (let pokemon of ListaPokemons.values()){
            pokemonLeitura += pokemon + "<br>";    
        }
        document.getElementById("pokemons").innerHTML= pokemonLeitura;
        pokemonLeitura=""; //limpa a variavel de leitura
    } 
}

function formPokemon(){
    let formPokemon = document.getElementById("formulario");
    if(formPokemon!=null){
        formPokemon.addEventListener("submit", function(event){
            event.preventDefault(); 

            let pok = document.getElementById("pokemon"); //captura o id do imput ,            
            ListaPokemons.add(pok.value);             
            console.log(pok.value);  
            pok.value = ""; //limpa o campo de entrada          
            lista();
        });
       
    }else{
        console.log(null);
    }

}