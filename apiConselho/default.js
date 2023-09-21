
const apiUrl = 'https://api.adviceslip.com/advice';
const respsota =document.getElementById("conselhos");

function apiConselho(){    
    
    fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Não foi possível obter os dados da API');
      }
      return response.json();
    })
    .then((data) => {
      // Aqui você pode acessar os dados retornados pela API, por exemplo:
      console.log('Conselho:', data.slip.advice);
      respsota.textContent =  data.slip.advice;
    })
    .catch((error) => {
      console.error('Erro:', error);
    });
}

