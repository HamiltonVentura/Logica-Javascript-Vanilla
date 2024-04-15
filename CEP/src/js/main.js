const cep = document.querySelector("#cep");
const logradouro = document.querySelector("#logradouro");
const bairro = document.querySelector("#bairro");
const localidade = document.querySelector("#localidade");
const uf = document.querySelector("#uf");

const insereCampos = (result) => {
  for (const dados in result) {
    if (document.querySelector("#" + dados)) {
      document.querySelector("#" + dados).value = result[dados];
    }
  }
};

cep.addEventListener("blur", (e) => {
  let search = cep.value.replace("-", "");
  console.log(search);

  const options = {
    method: "GET",
    mode: "cors",
    cache: "default",
  };

  fetch(`https://viacep.com.br/ws/${search}/json/`, options)
    .then((response) => {
      response.json().then((data) => {
        insereCampos(data);
      });
    })
    .catch((e) => {
      console.log("algo de errado aconteceu : " + e);
    });
});
