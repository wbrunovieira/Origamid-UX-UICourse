var nome = 'André';
let idade = 28;
const possuiFaculdade = true;


var preco = 20;
var totalComprado = 5;
var precoTotal = preco * totalComprado;


var nome = 'André'
//var idade = 28
//var possuiFaculdade = true;

    
    // Declarar uma variável com o seu nome

//const nome = 'Bruno'


// Declarar uma variável com a sua idade

//let idade = 46

// Declarar uma variável com a sua comida

 
// favorita e não atribuir valor
let comidaFavorita

// Atribuir valor a sua comida favorita

comidaFavorita = 'pasta'

// Declarar 5 variáveis diferentes sem valores

let cor = 'Vermelho'
let ano = 2020
let isALanguage = true
let mes = 'fevereiro'
dia = 14

var nome = 'André'; // String
var idade = 28; // Number
var possuiFaculdade = true; // Boolean
var time; // Undefined
var comida = null; // Null
var simbolo = Symbol() // Symbol
var novoObjeto = {} // Object


var nome = 'André';
console.log(typeof nome);


// retorna string

var nome = 'Bruno'

// Declare uma variável contendo uma string

var nome = 'André'

// Declare uma variável contendo um número dentro de uma string
var ano ='1974'

// Declare uma variável com a sua idade

const idadeBruno = 46

// Declare duas variáveis, uma com seu nome

var nome = 'Bruno'
var nome = 'Bruno'
// e outra com seu sobrenome e some as mesmas
var sobrenome = 'Vieira'

var NomeCompleto = nome + sobrenome

// Coloque a seguinte frase em uma variável: It's time

var sentense = "It's time"

// Verifique o tipo da variável que contém o seu nome
console.log(typeof nome)

// Crie uma função para verificar se um valor é Truthy

function isTruthy(dado) {
  return !!dado;
}

function SeriaVerdadeiro(number){
    if(number===0) {console.log('verdadeiro')}
} console.log('falso')

SeriaVerdadeiro(10)

// Crie uma função matemática que retorne o perímetro de um quadrado

function perímetroQuadrado(lado){
  
  return lado *4
  
}
// lembrando: perímetro é a soma dos quatro lados do quadrado

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome

function NomeCompleto( nome, sobrenome) {
  return `${nome} ${sobrenome}`
}

// Crie uma função que verifica se um número é par

function parOuImpar(numero){
  if( x / 2 == 0 ){
     return console.log ('par')
}
else return console.log('impar')
}

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)

function TipoDeDado (dado) {
  return typeof dado
}

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.

addEventListener('scroll', function() {
  console.log('Bruno Vieira')
})

// Corrija o erro abaixo

var totalPaises = 193;

function precisoVisitar(paisesVisitados) {
    
    return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
  }
  function jaVisitei(paisesVisitados) {
    return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
  }
  precisoVisitar(20);
  jaVisitei(20);
  

  // Objetos

  var pessoa = {
    nome: 'André',
    idade: 28,
    profissao: 'Designer',
    possuiFaculdade: true,
  }
  
  pessoa.nome; // 'André'
  pessoa.possuiFaculdade; // true
  

  var quadrado = {
    lados: 4,
    area: function(lado) {
      return lado * lado;
    },
    perimetro: function(lado) {
      return this.lados * lado;
    },
  }
  
  quadrado.lados; // 4
  quadrado.area(5); // 25
  quadrado.perimetro(5); // 20
  

  var quadrado = {
    lados: 4,
    area(lado) {
      return lado * lado;
    },
    perimetro(lado) {
      return this.lados * lado;
    },
  }
  

  var menu = {
    width: 800,
    height: 50,
    backgroundColor: '#84E',
  }
  
  menu.backgroundColor = '#000';
  console.log(menu.backgroundColor); // '#000'
  

  var height = 120;
var menu = {
  width: 800,
  height: 50,
  metadeHeight() {
    return this.height / 2;
  }
}

menu.metadeHeight(); // 25
// sem o this, seria 60


var menu = {
  width: 800,
}

menu.hasOwnProperty('width') // true
menu.hasOwnProperty('height') // false


// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome

var dadosPessoais = { 
  nome: 'Bruno',
  sobrenome: 'Vieira',
  idade: 46,
  nacionalidade: 'brasileira',
 
}

// Crie um método no objeto anterior, que mostre o seu nome completo

dadosPessoais.NomeCompleto = function(){
  return `${this.nome} ${this.sobrenome}` 
}


// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
}

carro.preco = 3000

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem

var cachorro = { 
raca: 'labrador',
idade: 10,
cor:'preto',
latir() {
  console.log(' au au au')
}
}

// Tudo e objetos

var nome = 'André';

nome.length; // 5
nome.charAt(1); // 'n'
nome.replace('ré', 'rei'); // 'Andrei'
nome; // 'André'


var altura = 1.8;

altura.toString(); // '1.8'
altura.toFixed(); // '2'


function areaQuadrado(lado) {
  return lado * lado;
}

areaQuadrado.toString();
//"function areaQuadrado(lado) {
//  return lado * lado;
//}"

areaQuadrado.length; // 1


<a class="btn">Clique</a>


var btn = document.querySelector('.btn');

btn.classList.add('azul') // adiciona a classe azul
btn.innerText; // 'Clique'
btn.addEventListener('click', function() {
  console.log('Clicou')
})


// nomeie 3 propriedades ou métodos de strings
var nome = 'André'
// fixed
// length
// slice




// nomeie 5 propriedades ou métodos de elementos do DOM

var btn = document.querySelector('.btn')
// addEventListener
// appendChild
// id
// innerHTML
// outerHTML



// busque na web um objeto (método) capaz de interagir com o clipboard, 
// clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V

//clipboard.js

// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002

var brasil = [1959, 1962, 1970, 1994, 2002]

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`

brasil.forEach(function(ano){
  console.log(`o Brasil ganhou a copa de ${ano}`)
})

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']
for (var i = 0; i < frutas.length; i++){
  console.log(frutas[i])
  if(frutas[i] === 'Pera'){
    break
  }
}

// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.

var ultimaFruta = frutas.lastIndexOf


// Retorne o url da página atual utilizando o objeto window

const hrefPagina = window.location.href
console.log(hrefPagina)

// Seleciona o primeiro elemento da página que
// possua a classe ativo

const elementoAtivo = document.querySelector('.ativo')

// Retorne a linguagem do navegador

const linguagem = window.navigator.language

console.log(linguagem)

// Retorne a largura da janela 

const larguraDaTela = window.innerWidth

console.log(larguraDaTela)

