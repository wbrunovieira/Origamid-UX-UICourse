// const carro = {
//     marca: 'Marca',
//     preco: 0,
//   }
  
//   const honda = carro;
//   honda.marca = 'Honda';
//   honda.preco = 4000;
  
//   const fiat = carro;
//   fiat.marca = 'Fiat';
//   fiat.preco = 3000;

  
//   function Carro() {
//     this.marca = 'Marca';
//     this.preco = 0;
//   }
  
//   const honda = new Carro();
//   honda.marca = 'Honda';
//   honda.preco = 4000;
//   const fiat = new Carro();
//   fiat.marca = 'Fiat';
//   fiat.preco = 3000;

  
//   const honda = new Carro();

// // 1 Cria um novo objeto
// honda = {};

// // 2 Define o protótipo
// honda.prototype = Carro.prototype;

// // 3 Aponta a variável this para o objeto
// this = honda;

// // 4 Executa a função, substituindo this pelo objeto
// honda.marca = 'Marca';
// honda.preco = 0;

// // 5 Retorna o novo objeto
// return honda = {
//   marca: 'Marca',
//   preco: 0,
// }


// function Carro(marca, preco) {
//     this.marca = marca;
//     this.preco = preco;
//   }
  
//   const honda = new Carro('Honda', 4000);
//   const fiat = new Carro('Fiat', 3000);

  
//   function Carro(marca, precoInicial) {
//     const taxa = 1.2;
//     const precoFinal = precoInicial * taxa;
//     this.marca = marca;
//     this.preco = precoFinal;
//     console.log(this);
//   }
  
//   const honda = new Carro('Honda', 2000);

  
//   const Dom = {
//     seletor: 'li',
//     element() {
//       return document.querySelector(this.seletor);
//     },
//     ativo() {
//       this.element().classList.add('ativo');
//     },
//   }
  
//   Dom.ativo(); // adiciona ativo ao li
//   Dom.seletor = 'ul';
//   Dom.ativo(); // adiciona ativo ao ul

  
//   function Dom() {
//     this.seletor = 'li';
//     const element = document.querySelector(this.seletor);
//     this.ativo = function() {
//       element.classList.add('ativo');
//     };
//   }
  
//   const lista = new Dom();
//   lista.seletor = 'ul';
//   lista.ativo();
  
//   const lastLi = new Dom();
//   lastLi.seletor = 'li:last-child';
//   lastLi.ativo();

  
//   function Dom(seletor) {
//     const element = document.querySelector(seletor);
//     this.ativo = function(classe) {
//       element.classList.add(classe);
//     };
//   }
  
//   const lista = new Dom('ul');
//   lista.ativo('ativo');
  
//   const lastLi = new Dom('li:last-child');
//   lastLi.ativo('ativo');

  
//   // Transforme o objeto abaixo em uma Constructor Function
//  function Pessoa (nome, idade) {
//     this.nome = nome,
//     this.idade = idade,
//     this.andar = function() {
//       return console.log(this.nome + ' andou');
//     }
//   }
  
//   // Crie 3 pessoas, João - 20 anos,
//   // Maria - 25 anos, Bruno - 15 anos
  
//   const joao = new Pessoa('Joao', 20)
  

//   const maria = new Pessoa('Maria', 25)

//   const bruno = new Pessoa('Bruno', 15)
  
//   // Crie uma Constructor Function (Dom) para manipulação
//   // de listas de elementos do dom. Deve conter as seguintes
//   // propriedades e métodos:
//   //
//   // elements, retorna NodeList com os elementos selecionados
//   // addClass(classe), adiciona a classe a todos os elementos
//   // removeClass(classe), remove a classe a todos os elementos
  

//   function Dom(seletor) {
//       const elementList = document.querySelectorAll(seletor)
//       this.elements = elementList
      
//       this.AddClass = function(classe){
//           elementList.forEach((element) => {
//               element.classList.add(classe)
//           })
//       }
//       this.removeClass = function(classe) {
//         elementList.forEach((element) => {
//             element.classList.remove(classe)
//         })
//       }
//   }

//  const li = new Dom('li')
//  li.AddClass('teste')

//  li.removeClass('teste')

//  const h1 = new Dom('h1')

//  // Construtores de objetos nativos
// Object
// String
// 

// strings

// const comida = 'Pizza';
// const liquido = new String('Água');
// const ano = new String(2018);


// const comida = 'Pizza';
// const frase = 'A melhor comida';

// comida.length; // 5
// frase.length; // 15

// comida[0] // P
// frase[0] // A
// frase[frase.length - 1] // a


// const linguagem = 'JavaScript';

// linguagem.charAt(0); // J
// linguagem.charAt(2); // v
// linguagem.charAt(linguagem.length - 1); // t


// const frase = 'A melhor linguagem é ';
// const linguagem = 'JavaScript';

// const fraseCompleta = frase.concat(linguagem, '!!');


// const fruta = 'Banana';
// const listaFrutas = 'Melancia, Banana, Laranja';

// listaFrutas.includes(fruta); // true
// fruta.includes(listaFrutas); // false


// const fruta = 'Banana';

// fruta.endsWith('nana'); // true
// fruta.startsWith('Ba'); // true
// fruta.startsWith('na'); // false


// const transacao1 = 'Depósito de cliente';
// const transacao2 = 'Depósito de fornecedor';
// const transacao3 = 'Taxa de camisas';

// transacao1.slice(0, 3); // Dep
// transacao2.slice(0, 3); // Dep
// transacao3.slice(0, 3); // Tax

// transacao1.slice(12); // cliente
// transacao1.slice(-4); // ente
// transacao1.slice(3, 6); // ósi


// const linguagem = 'JavaScript';
// linguagem.substring(3,5); // aS
// linguagem.substring(0,4); // Java
// linguagem.substring(4); // Script
// linguagem.substring(-3); // JavaScript


// const instrumento = 'Guitarra';

// instrumento.indexOf('r'); // 5
// instrumento.lastIndexOf('r'); // 6
// instrumento.indexOf('ta'); // 3


// const listaPrecos = ['R$ 99', 'R$ 199', 'R$ 12000'];

// listaPrecos.forEach((preco) => {
//   console.log(preco.padStart(10, '.'));
// })

// listaPrecos[0].padStart(10, '.'); // .....R$ 99
// listaPrecos[0].padEnd(10, '.');   // R$ 99.....


// const frase = 'Ta';

// frase.repeat(5); // TaTaTaTaTa


// let listaItens = 'Camisas Bonés Calças Bermudas Vestidos Saias';
// listaItens = listaItens.replace(/[ ]+/g, ', ');

// let preco = 'R$ 1200,43';
// preco = preco.replace(',', '.'); // 'R$ 1200.43'


// const listaItens = 'Camisas Bonés Calças Bermudas Vestidos Saias';
// const arrayItens = listaItens.split(' ');

// const htmlText = '<div>O melhor item</div><div>A melhor lista</div>';
// const htmlArray = htmlText.split('div');
// const htmlNovo = htmlArray.join('section');


// const sexo1 = 'Feminino';
// const sexo2 = 'feminino';
// const sexo3 = 'FEMININO';

// (sexo1.toLowerCase() === 'feminino'); // true
// (sexo2.toLowerCase() === 'feminino'); // true
// (sexo3.toLowerCase() === 'feminino'); // true


// const valor = '  R$ 23.00   ' 
// valor.trim(); // 'R$ 23.00'
// valor.trimStart(); // 'R$ 23.00   '
// valor.trimEnd(); // '  R$ 23.00'




// // Utilizando o foreach na array abaixo,
// // some os valores de Taxa e os valores de Recebimento

// const transacoes = [
//   {
//     descricao: 'Taxa do Pão',
//     valor: 'R$ 39',
//   },
//   {
//     descricao: 'Taxa do Mercado',
//     valor: 'R$ 129',
//   },
//   {
//     descricao: 'Recebimento de Cliente',
//     valor: 'R$ 99',
//   },
//   {
//     descricao: 'Taxa do Banco',
//     valor: 'R$ 129',
//   },
//   {
//     descricao: 'Recebimento de Cliente',
//     valor: 'R$ 49',
//   },
// ];
// let taxaTotal = 0
// let recebimentoTotal = 0
// transacoes.forEach((item) => {
//   const numeroLimpo = +item.valor.replace('R$ ', '')
//   if(item.descricao.slice(0,4) === 'Taxa'){
//     taxaTotal += numeroLimpo
//   } else if(item.descricao.slice(0,4) === 'Rece'){
//     recebimentoTotal += numeroLimpo
//   }
// })
// console.log(taxaTotal)
// console.log(recebimentoTotal)


// // Retorne uma array com a lista abaixo
// const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';

// const arrayItens =transportes.split(';')
// console.log(arrayItens)


// // Substitua todos os span's por a's
// const html = `<ul>
//                 <li><span>Sobre</span></li>
//                 <li><span>Produtos</span></li>
//                 <li><span>Contato</span></li>
//               </ul>`;

// const htmlSemSpan = html.split('span')
// const htmlComA = htmlSemSpan.join('a')            
// console.log(htmlComA)


// // // Retorne o último caracter da frase
//  const frase = 'Melhor do ano!';
//  const fraseSemUltimo = frase[frase.length-1]
//  console.log(fraseSemUltimo)

// // // Retorne o total de taxas
//  const transacoes2 = ['Taxa do Banco', '   TAXA DO PÃO', '  taxa do mercado', 'depósito Bancário', 'TARIFA especial'];


//  let taxasTotal = 0
//  transacoes2.forEach((item) => {
//    iten= item.toLocaleLowerCase().trim().slice(0,4)
//    if(iten === 'taxa') taxasTotal++
   
//  })

//  console.log(taxasTotal)


// const numerosa = [1,3,4,5,6]

// Match.max(1,3,4,5)

//Numbers

// const ano = 2018;
// const preco = new Number(99);


// Number.isNaN(NaN); // true
// Number.isNaN(4 + 5); // false

// Number.isInteger(20); // true
// Number.isInteger(23.6); // false


// parseFloat('99.50'); // Mesma função sem o Number
// Number.parseFloat('99.50'); // 99.5
// Number.parseFloat('100 Reais'); // 100
// Number.parseFloat('R$ 100'); // NaN

// parseInt('99.50', 10); // 99
// parseInt(5.43434355555, 10); // 5
// Number.parseInt('100 Reais', 10); // 100


// const preco = 2.99;
// preco.toFixed(); // 3

// const carro = 1000.455;
// carro.toFixed(2) // 1000.46

// const preco2 = 1499.49;
// preco2.toFixed() // 1499


// const preco = 2.99;
// preco.toString(10); // '2.99'


// const preco = 59.49;
// preco.toLocaleString('en-US', {style: 'currency', currency: 'USD'}); // $59.49
// preco.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}); // R$ 59,49


// Math.PI // 3.14159
// Math.E // 2.718
// Math.LN10 // 2.303


// Math.abs(-5.5); // 5.5
// Math.ceil(4.8334); // 5
// Math.ceil(4.3); // 5
// Math.floor(4.8334); // 4
// Math.floor(4.3); // 4
// Math.round(4.8334); // 5
// Math.round(4.3); // 4


// Math.max(5,3,10,42,2); // 42
// Math.min(5,3,10,42,2); // 2

// Math.random(); // 0.XXX
// Math.floor(Math.random() * 100); // entre 0 e 100
// Math.floor(Math.random() * 500);  // entre 0 e 500

// // Número random entre 72 e 32
// Math.floor(Math.random() * (72 - 32 + 1)) + 32; 
// Math.floor(Math.random() * (max - min + 1)) + min;


// Retorne um número aleatório
// entre 1050 e 2000

console.log(Math.floor(Math.random() * (2000 - 1050 + 1)) + 1050)


// Retorne o maior número da lista abaixo
const numeros = '4, 5, 20, 8, 9';

const arrayNumeros= numeros.split(',')
const numeroMaximo = Math.max(...arrayNumeros)

console.log(numeroMaximo)


// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
const listaPrecos = ['R$ 59,99', ' R$ 100,222',
                     'R$ 230  ', 'r$  200'];

 function limparPreco(preco) {
   preco = +preco.toUpperCase().replace('R$', '').trim().replace(',', '.')
   preco = +preco.toFixed(2)
   return preco
 }

 let soma = 0
 listaPrecos.forEach((preco) => {
   soma += limparPreco(preco)
 })

console.log(soma.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'}))
              