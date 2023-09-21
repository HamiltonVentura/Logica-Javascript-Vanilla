function refazer() {
    location.reload();
}
//Conceit 1  Funções chamadas externas Onclick-->
function substitui(){           
    console.log("entrou na função");
    document.getElementById("demo").innerText="Responda qustões diretas, SIM ou NÃO ou multiplas escolhas";
    document.getElementById("perguntas").style.visibility="visible";
    //obs o innerHtml não funciona tags dentro
}

function submeter(){
    let formularios = document.getElementById("formulario");    
    if(formularios!=null){
            formularios.addEventListener("submit",function(event){                
                event.preventDefault();             
                let mulher = document.querySelector('input[name="mulher"]:checked');
                let chifre = document.querySelector('input[name="chifre"]:checked');   
                if(mulher && chifre){                    
                    respostaMulher(mulher);
                    respostaChifre(chifre);                  
                }else{
                    alert("Todo os campos precisam estar marcados/Preenchidos");
                }
            });
    }else{
        alert("formulario vazio");        
    }
}

function respostaMulher(mulher){
    if(mulher.value=="Igreja"){
        document.getElementById("mulher-correto").style.visibility="visible";
        document.getElementById("botaoForm").style.visibility="hidden";
        document.getElementById("refazer").style.visibility="visible";        
    }else{
        document.getElementById("mulher-errado").style.visibility="visible";
        document.getElementById("botaoForm").style.visibility="hidden";
        document.getElementById("refazer").style.visibility="visible";
    } 
}

function respostaChifre(chifre){
    if(chifre.value=="Roma"){
        document.getElementById("chifre-correto").style.visibility="visible";
        document.getElementById("botaoForm").style.visibility="hidden";
        document.getElementById("refazer").style.visibility="visible";
    }else{
        document.getElementById("chifre-errado").style.visibility="visible";
        document.getElementById("botaoForm").style.visibility="hidden";
        document.getElementById("refazer").style.visibility="visible";
    }
}

