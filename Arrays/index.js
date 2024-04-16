//matriz normal
const elementos = ["joão Marinho", "Ricardo Soares ", "Marcio Garcia"];
console.table(elementos);
console.log(elementos.length);

//matriz Bidimensional
const dados = [4, [34.56, 66], 4, [34, 44, 55], 5, 6];
console.table(dados);

//desestruturando
const [a, b, c] = ["Hamilton", "ALine", "ROberto"];
console.log(a);
console.log(b);
console.log(c);

//spread operador
const numero = [1, 2, 3, 4, 5];
console.log(...numero);

//não utilizar a chamada direto do array;

console.log(Math.max(numero)); //aqui da erro por isso melhor utilizar ...

//adicionar e remover elementos

let meuArray = [1];
meuArray.push(45);
meuArray.push(44);
meuArray.unshift(43);

console.log(...meuArray);

meuArray.shift(); //Removeu o primeiro elemento
meuArray.pop(); //Removeu o ultimo elemento

console.log(...meuArray);
meuArray.push(45);
meuArray.push(44);
meuArray.push(48);
meuArray.push(49);

console.log(...meuArray);
let novo = meuArray.slice(0, 3); //faz copia
console.table(novo);

novo = meuArray.splice(0, 3); //faz copia
console.table(novo);

const ordem = ["D", "C", "B", "E", "A", "F"];
console.log(ordem.sort());
console.log(ordem.reverse());

// Utilizando com Arrow FUnction

objeto = [1, 3, 4, 7, 3, 1, 2];

console.log(objeto.sort((a, b) => a - b));

//foreach
objeto.forEach((item) => {
  console.log(item);
});

listaPedidos = [
  {
    id: 1,
    nome: "Frango Frito",
    obs: "Sem banha de porco",
  },
  {
    id: 2,
    nome: "Cachorro",
    obs: "Sem banha de porco",
  },
  {
    id: 3,
    nome: "sapo frito",
    obs: "Sem banha de porco",
  },
  {
    id: 4,
    nome: "Barata Frita",
    obs: "Sem banha de porco",
  },
];

console.log(
    listaPedidos.map((element, index) => {
    if (element.id === 1) {
      element.id=0;
    }
  })
);

console.log(listaPedidos);