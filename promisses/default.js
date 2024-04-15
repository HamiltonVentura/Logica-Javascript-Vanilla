const promessa = new promises((resolve, reject) => {
  const nome = "hamilton";
  if (nome == "hamilton") {
    resolve("Usuário encontrado!");
  } else {
    reject("usuário invalido");
  }
});

promises.then();
