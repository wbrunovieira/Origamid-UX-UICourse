// // Seleciona pelo ID
// const animaisSection = document.getElementById('animais');
// const contatoSection = document.getElementById('contato');

// // Retorna null caso não exista
// const naoExiste = document.getElementById('teste');


// // Seleciona pela classe, retorna uma HTMLCollection
// const gridSection = document.getElementsByClassName('grid-section');
// const contato = document.getElementsByClassName('grid-section contato');

// // Seleciona todas as UL's, retorna uma HTMLCollection
// const ul = document.getElementsByTagName('ul');

// // Retorna o primeiro elemento
// console.log(gridSection[0]);


// const animais = document.querySelector('.animais');
// const contato = document.querySelector('#contato');
// const ultimoItem = document.querySelector('.animais-lista li:last-child');
// const linkCSS = document.querySelector('[href^="https://"]');
// const primeiroUl = document.querySelector('ul');

// // Busca dentro do Ul apenas
// const navItem = primeiroUl.querySelector('li');


// const gridSection = document.querySelectorAll('.grid-section');
// const listas = document.querySelectorAll('ul');
// const titulos = document.querySelectorAll('.titulo');
// const fotosAnimais = document.querySelectorAll('.animais-lista img');

// // Retorna o segundo elemento
// console.log(gridSection[1]);


// const titulo = document.querySelector('.titulo');
// const gridSectionHTML = document.getElementsByClassName('grid-section');
// const gridSectionNode = document.querySelectorAll('.grid-section');

// titulo.classList.add('grid-section');

// console.log(gridSectionHTML); // 4 itens
// console.log(gridSectionNode); // 3 itens


// const gridSection = document.querySelectorAll('.grid-section');

// gridSection.forEach(function(gridItem, index, array) {
//   gridItem.classList.add('azul');
//   console.log(index) // index do item na array
//   console.log(array) // a array completa
// });
// // Retorne no console todas as imagens do site

// const allImages = document.querySelectorAll('img')
// console.log(allImages)

// // Retorne no console apenas as imagens que começaram com a palavra imagem

// const imageInitialImagens = document.querySelectorAll('img[src^="img/imagem"]')
// console.log(imageInitialImagens)

// // Selecione todos os links internos (onde o href começa com #)

// const linksInternos = document.querySelectorAll('[href^="#"]')
// console.log(linksInternos)

// // Selecione o primeiro h2 dentro de .animais-descricao

// const h2AnimaisDescricao = document.getElementsByClassName('animais-descricao')
// console.log(h2AnimaisDescricao)

// // Selecione o último p do site

// const paragrafos = document.querySelectorAll('p')

// const ultimoP = paragrafos[paragrafos.length - 1]

// console.log(ultimoP)


// const imgs = document.querySelectorAll('img');

// imgs.forEach(function(item){
//   console.log(item);
// });


// const imgs = document.querySelectorAll('img');

// imgs.forEach(function(valorAtual, index, array){
//   console.log(item); // o item atual no loop
//   console.log(index); // o número do index
//   console.log(array); // a Array completa
// });


// const titulos = document.getElementsByClassName('titulo');
// const titulosArray = Array.from(titulos);

// titulosArray.forEach(function(item){
//   console.log(item);
// });


// const imgs = document.querySelectorAll('img');

// imgs.forEach((item) => {
//   console.log(item);
// });


// const imgs = document.querySelectorAll('img');

// imgs.forEach(item => 
//   console.log(item)
// );

// imgs.forEach(item => console.log(item));


// // Mostre no console cada parágrado do site

// const pNoSite = document.querySelectorAll('p')
// console.log(pNoSite)

// pNoSite.forEach((item) => {
//     console.log(item)
// })

// // Mostre o texto dos parágrafos no console

// pNoSite.forEach((item) => {
//     console.log(item.innerText)
// })

// // Como corrigir os erros abaixo:
// const imgs = document.querySelectorAll('img');

// imgs.forEach((item, index) => {
//   console.log(item, index)
// })

// let i = 0;
// imgs.forEach( ()=> 
//   console.log(i++))


// imgs.forEach(() => i++);


// console.log(i)



// const menu = document.querySelector('.menu');

// menu.className; // string
// menu.classList; // lista de classes
// menu.classList.add('ativo');
// menu.classList.add('ativo', 'mobile'); // duas classes
// menu.classList.remove('ativo');
// menu.classList.toggle('ativo'); // adiciona/remove a classe
// menu.classList.contains('ativo'); // true ou false
// menu.classList.replace('ativo', 'inativo');


// const animais = document.querySelector('.animais');

// animais.attributes; // retorna todos os atributos
// animais.attributes[0]; // retorna o primeiro atributo


// const img = document.querySelector('img');

// img.getAttribute('src'); // valor do src
// img.setAttribute('alt', 'Texto Alternativo'); // muda o alt
// img.hasAttribute('id'); // true / false
// img.removeAttribute('alt'); // remove o alt

// img.hasAttributes(); // true / false se tem algum atributo


// const animais = document.querySelector('.animais');

// animais.className; // string com o nome das classes
// animais.className = 'azul'; // substitui completamente a string
// animais.className += ' vermelho'; // adiciona vermelho à string

// animais.attributes = 'class="ativo"'; // não funciona, read-only


// // Adicione a classe ativo a todos os itens do menu

// const itensMenu = document.querySelectorAll('.menu a')
// itensMenu.forEach((item) => {
//     item.classList.add('ativo')
// })
// // Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro


// itensMenu.forEach((item) => {
//     item.classList.remove('ativo')
// })

// itensMenu[0].classList.add('ativo')
// // Verifique se as imagens possuem o atributo alt

// const imgs = document.querySelectorAll('img');

// imgs.forEach(() => {
//     const possuiAtributo = imgs.hasAttribute('alt')
// })


// // Modifique o href do link externo no menu

// const linkExterno = document.querySelector('a[href^="http"]')

// linkExterno.setAttribute('href', 'https://google.com' )



// // Verifique a distância da primeira imagem
// // em relação ao topo da página

// const primeiraImagem = document.querySelector('img')
// const distanciaDoTop = primeiraImagem.offsetTop
// console.log(distanciaDoTop)

// // Retorne a soma da largura de todas as imagens
// function somaImagens(){
//   const todasImagens = document.querySelectorAll('img')
// let soma = 0
//   todasImagens.forEach((imagem) => {
//     soma += imagem.offsetWidth
//     console.log(imagem.offsetWidth)
//   })
//   console.log(soma)
  
// }

// window.onload =function(){
// somaImagens()

// }

// // Verifique se os links da página possuem
// // o mínimo recomendado para telas utilizadas
// // com o dedo. (48px/48px de acordo com o google)

// const linksDaPagina = document.querySelectorAll('a')

// console.log(linksDaPagina)

// linksDaPagina.forEach((link) => {
//   const linkWidth = link.offsetWidth
//   const linkHeight = link.offsetHeight
//   if(linkWidth >= 48 && linkHeight >= 48){
//     console.log(link, 'Possui boa acessibilidade')
//   } else {
//     console.log(link, ' Nao possui boa acessibilidade')
//   }

// })

// // Se o browser for menor que 720px,
// // adicione a classe menu-mobile ao menu

// const browserSmall = window.matchMedia('(max-width: 720px)').matches

// if(browserSmall){
//   const menu = document.querySelector('.menu')
//   menu.classList.add('menu-mobile')
// }

// var nome = 'André';
// let idade = 28;
// const possuiFaculdade = true;


// var preco = 20;
// var totalComprado = 5;
// var precoTotal = preco * totalComprado;


// var nome = 'André'
// //var idade = 28
// //var possuiFaculdade = true;

    
//     // Declarar uma variável com o seu nome

// //const nome = 'Bruno'


// // Declarar uma variável com a sua idade

// //let idade = 46

// // Declarar uma variável com a sua comida

 
// // favorita e não atribuir valor
// let comidaFavorita

// // Atribuir valor a sua comida favorita

// comidaFavorita = 'pasta'

// // Declarar 5 variáveis diferentes sem valores

// let cor = 'Vermelho'
// let ano = 2020
// let isALanguage = true
// let mes = 'fevereiro'
// dia = 14

// var nome = 'André'; // String
// var idade = 28; // Number
// var possuiFaculdade = true; // Boolean
// var time; // Undefined
// var comida = null; // Null
// var simbolo = Symbol() // Symbol
// var novoObjeto = {} // Object


// var nome = 'André';
// console.log(typeof nome);


// // retorna string

// var nome = 'Bruno'

// // Declare uma variável contendo uma string

// var nome = 'André'

// // Declare uma variável contendo um número dentro de uma string
// var ano ='1974'

// // Declare uma variável com a sua idade

// const idadeBruno = 46

// // Declare duas variáveis, uma com seu nome

// var nome = 'Bruno'
// var nome = 'Bruno'
// // e outra com seu sobrenome e some as mesmas
// var sobrenome = 'Vieira'

// var NomeCompleto = nome + sobrenome

// // Coloque a seguinte frase em uma variável: It's time

// var sentense = "It's time"

// // Verifique o tipo da variável que contém o seu nome
// console.log(typeof nome)

// // Crie uma função para verificar se um valor é Truthy

// function isTruthy(dado) {
//   return !!dado;
// }

// function SeriaVerdadeiro(number){
//     if(number===0) {console.log('verdadeiro')}
// } console.log('falso')

// SeriaVerdadeiro(10)

// // Crie uma função matemática que retorne o perímetro de um quadrado

// function perímetroQuadrado(lado){
  
//   return lado *4
  
// }
// // lembrando: perímetro é a soma dos quatro lados do quadrado

// // Crie uma função que retorne o seu nome completo
// // ela deve possuir os parâmetros: nome e sobrenome

// function NomeCompleto( nome, sobrenome) {
//   return `${nome} ${sobrenome}`
// }

// // Crie uma função que verifica se um número é par

// function parOuImpar(numero){
//   if( x / 2 == 0 ){
//      return console.log ('par')
// }
// else return console.log('impar')
// }

// // Crie uma função que retorne o tipo de
// // dado do argumento passado nela (typeof)

// function TipoDeDado (dado) {
//   return typeof dado
// }

// // addEventListener é uma função nativa do JavaScript
// // o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// // utilize essa função para mostrar no console o seu nome completo
// // quando o evento 'scroll' ocorrer.

// addEventListener('scroll', function() {
//   console.log('Bruno Vieira')
// })

// // Corrija o erro abaixo

// var totalPaises = 193;

// function precisoVisitar(paisesVisitados) {
    
//     return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
//   }
//   function jaVisitei(paisesVisitados) {
//     return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
//   }
//   precisoVisitar(20);
//   jaVisitei(20);
  

//   // Objetos

//   var pessoa = {
//     nome: 'André',
//     idade: 28,
//     profissao: 'Designer',
//     possuiFaculdade: true,
//   }
  
//   pessoa.nome; // 'André'
//   pessoa.possuiFaculdade; // true
  

//   var quadrado = {
//     lados: 4,
//     area: function(lado) {
//       return lado * lado;
//     },
//     perimetro: function(lado) {
//       return this.lados * lado;
//     },
//   }
  
//   quadrado.lados; // 4
//   quadrado.area(5); // 25
//   quadrado.perimetro(5); // 20
  

//   var quadrado = {
//     lados: 4,
//     area(lado) {
//       return lado * lado;
//     },
//     perimetro(lado) {
//       return this.lados * lado;
//     },
//   }
  

//   var menu = {
//     width: 800,
//     height: 50,
//     backgroundColor: '#84E',
//   }
  
//   menu.backgroundColor = '#000';
//   console.log(menu.backgroundColor); // '#000'
  

//   var height = 120;
// var menu = {
//   width: 800,
//   height: 50,
//   metadeHeight() {
//     return this.height / 2;
//   }
// }

// menu.metadeHeight(); // 25
// // sem o this, seria 60


// var menu = {
//   width: 800,
// }

// menu.hasOwnProperty('width') // true
// menu.hasOwnProperty('height') // false


// // Crie um objeto com os seus dados pessoais
// // Deve possui pelo menos duas propriedades nome e sobrenome

// var dadosPessoais = { 
//   nome: 'Bruno',
//   sobrenome: 'Vieira',
//   idade: 46,
//   nacionalidade: 'brasileira',
 
// }

// // Crie um método no objeto anterior, que mostre o seu nome completo

// dadosPessoais.NomeCompleto = function(){
//   return `${this.nome} ${this.sobrenome}` 
// }


// // Modifique o valor da propriedade preco para 3000
// var carro = {
//   preco: 1000,
//   portas: 4,
//   marca: 'Audi',
// }

// carro.preco = 3000

// // Crie um objeto de um cachorro que represente um labrador,
// // preto com 10 anos, que late ao ver um homem

// var cachorro = { 
// raca: 'labrador',
// idade: 10,
// cor:'preto',
// latir() {
//   console.log(' au au au')
// }
// }

// // Tudo e objetos

// var nome = 'André';

// nome.length; // 5
// nome.charAt(1); // 'n'
// nome.replace('ré', 'rei'); // 'Andrei'
// nome; // 'André'


// var altura = 1.8;

// altura.toString(); // '1.8'
// altura.toFixed(); // '2'


// function areaQuadrado(lado) {
//   return lado * lado;
// }

// areaQuadrado.toString();
// //"function areaQuadrado(lado) {
// //  return lado * lado;
// //}"

// areaQuadrado.length; // 1


// <a class="btn">Clique</a>


// var btn = document.querySelector('.btn');

// btn.classList.add('azul') // adiciona a classe azul
// btn.innerText; // 'Clique'
// btn.addEventListener('click', function() {
//   console.log('Clicou')
// })


// // nomeie 3 propriedades ou métodos de strings
// var nome = 'André'
// // fixed
// // length
// // slice




// // nomeie 5 propriedades ou métodos de elementos do DOM

// var btn = document.querySelector('.btn')
// // addEventListener
// // appendChild
// // id
// // innerHTML
// // outerHTML



// // busque na web um objeto (método) capaz de interagir com o clipboard, 
// // clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V

// //clipboard.js

// // Crie uma array com os anos que o Brasil ganhou a copa
// // 1959, 1962, 1970, 1994, 2002

// var brasil = [1959, 1962, 1970, 1994, 2002]

// // Interaja com a array utilizando um loop, para mostrar
// // no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`

// brasil.forEach(function(ano){
//   console.log(`o Brasil ganhou a copa de ${ano}`)
// })

// // Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
// var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']
// for (var i = 0; i < frutas.length; i++){
//   console.log(frutas[i])
//   if(frutas[i] === 'Pera'){
//     break
//   }
// }

// // Coloque a última fruta da array acima em uma variável,
// // sem remover a mesma da array.

// var ultimaFruta = frutas.lastIndexOf


// // Retorne o url da página atual utilizando o objeto window

// const hrefPagina = window.location.href
// console.log(hrefPagina)

// // Seleciona o primeiro elemento da página que
// // possua a classe ativo

// const elementoAtivo = document.querySelector('.ativo')

// // Retorne a linguagem do navegador

// const linguagem = window.navigator.language

// console.log(linguagem)

// // Retorne a largura da janela 

// const larguraDaTela = window.innerWidth

// // console.log(larguraDaTela)

// const section = document.querySelector('.animais');

// section.clientHeight; // height + padding
// section.offsetHeight; // height + padding + border
// section.scrollHeight; // height total, mesmo dentro de scroll

// const section = document.querySelector('.animais');

// // Distância entre o topo do elemento e o topo da página
// section.offsetTop;

// // Distância entre o canto esquerdo do elemento
// // e o canto esquerdo da página
// section.offsetLeft;


// const section = document.querySelector('.animais');

// const rect = section.getBoundingClientRect();
// rect.height; // height do elemento
// rect.width; // width do elemento
// rect.top; // distância entre o topo do elemento e o scroll


// window.innerWidth; // width do janela
// window.outerWidth; // soma dev tools também
// window.innerHeight; // height do janela
// window.outerWidth; // soma a barra de endereço

// window.pageYOffset; // distância total do scroll horizontal
// window.pageXOffset; // distância total do scroll vertical

// if(window.innerWidth < 600) {
//   console.log('Tela menor que 600px');
// }


// const small = window.matchMedia('(max-width: 600px)');

// if(small.matches) {
//   console.log('Tela menor que 600px')
// } else {
//   console.log('Tela maior que 600px')
// }


// Verifique a distância da primeira imagem
// em relação ao topo da página

// Retorne a soma da largura de todas as imagens

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu

// const img = document.querySelector('img');

// // elemento.addEventListener(event, callback, options)
// img.addEventListener('click', function() {
//   console.log('Clicou');
// })


// const img = document.querySelector('img');
// function callback() {
//   console.log('Clicou');
// }

// img.addEventListener('click', callback); // 🚀
// img.addEventListener('click', callback()); // undefined
// img.addEventListener('click', function() {
//   console.log('Clicou');
// })
// img.addEventListener('click', () => {
//   console.log('Clicou');
// })


// const img = document.querySelector('img');

// function callback(event) {
//   console.log(event);
// }

// img.addEventListener('click', callback);


// const animaisLista = document.querySelector('.animais-lista');

// function executarCallback(event) {
//   const currentTarget = event.currentTarget; // this
//   const target = event.target; // onde o clique ocorreu
//   const type = event.type; // tipo de evento
//   const path = event.path;
//   console.log(currentTarget, target, type, path);
// }

// animaisLista.addEventListener('click', executarCallback);


// const linkExterno = document.querySelector('a[href^="http"]');

// function clickNoLink(event) {
//   event.preventDefault();
//   console.log(event.currentTarget.href);
// }

// linkExterno.addEventListener('click', clickNoLink);


// const img = document.querySelector('img');

// function callback(event) {
//   console.log(this); // retorna a imagem
//   console.log(this.getAttribute('src'));
// }

// img.addEventListener('click', callback);


// const h1 = document.querySelector('h1');

// function callback(event) {
//   console.log(event.type, event);
// }

// h1.addEventListener('click', callback);
// h1.addEventListener('mouseenter', callback);
// window.addEventListener('scroll', callback);
// window.addEventListener('resize', callback);
// window.addEventListener('keydown', callback);


// function handleKeyboard(event) {
//   if(event.key === 'a')
//     document.body.classList.toggle('azul');
//   else if(event.key === 'v')
//     document.body.classList.toggle('vermelho');
// }

// window.addEventListener('keydown', callback);


// const imgs = document.querySelectorAll('img');

// function imgSrc(event) {
//   const src = event.currentTarget.getAttribute('src');
//   console.log(src);
// }

// imgs.forEach((img) => {
//   img.addEventListener('click', imgSrc);
// });


// const imgs = document.querySelectorAll('img');

// function imgSrc(event) {
//   const src = event.currentTarget.getAttribute('src');
//   console.log(src);
// }

// imgs.forEach((img) => {
//   img.addEventListener('click', imgSrc);
// });


// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links

// const linksInternos = document.querySelectorAll('a[href^="#"]')

// function handleLink(event) {
//   event.preventDefault();
//   linksInternos.forEach((link) => {
//     link.classList.remove('ativo')
//   })
//   event.currentTarget.classList.add('ativo')
// }

// linksInternos.forEach((item) => {
  
//   item.addEventListener( 'click', handleLink)
// })


// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados

// function mostrarNoConsole(event) {
//   event.preventDefault();
//   console.log(event.currentTarget)
// }
// const todosElementos = document.querySelectorAll('body *')
// todosElementos.forEach((elemento) => {
//   elemento.addEventListener('click', mostrarNoConsole )
// })

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento

// const todosElementos = document.querySelectorAll('body *')

// function mostrarNoConsole(event) {
  
//   event.currentTarget.remove()
// }


// todosElementos.forEach((elemento) => {
//   elemento.addEventListener('click', mostrarNoConsole)
// })

// Se o usuário clicar na tecla (t), aumente todo o texto do site. 

// function handleClick(event){

//   console.log(event.key)
//   if(event.key === 't'){
//     document.documentElement.classList.toggle('texto-maior')
//   }
// }

// window.addEventListener('keydown', handleClick)

//Trasversing e Manipulação

// const menu = document.querySelector('.menu');

// menu.outerHTML; // todo o html do elemento
// menu.innerHTML; // html interno
// menu.innerText; // texto, sem tags

// menu.innerText = '<p>Texto</p>'; // a tag vai como texto
// menu.innerHTML = '<p>Texto</p>'; // a tag é renderizada


// const lista = document.querySelector('.animais-lista');

// lista.parentElement; // pai
// lista.parentElement.parentElement; // pai do pai
// lista.previousElementSibling; // elemento acima
// lista.nextElementSibling; // elemento abaixo

// lista.children; // HTMLCollection com os filhos
// lista.children[0]; // primeiro filho
// lista.children[--lista.children.length]; // último filho

// lista.querySelectorAll('li'); // todas as LI's
// lista.querySelector('li:last-child'); // último filho


// const lista = document.querySelector('.animais-lista');

// lista.previousElementSibling; // elemento acima
// lista.previousSibling; // node acima

// lista.firstChild; // primeiro node child
// lista.childNodes; // todos os node child


// const lista = document.querySelector('.animais-lista');
// const contato = document.querySelector('.contato');
// const titulo = contato.querySelector('.titulo');

// contato.appendChild(lista); // move lista para o final de contato
// contato.insertBefore(lista, titulo); // insere a lista antes de titulo
// contato.removeChild(titulo); // remove titulo de contato
// contato.replaceChild(lista, titulo); // substitui titulo por lista


// const animais = document.querySelector('.animais');

// const novoH1 = document.createElement('h1');
// novoH1.innerText = 'Novo Título';
// novoH1.classList.add('titulo');

// animais.appendChild(novoH1);


// const titulo = document.querySelector('h1');
// const titulo2 = document.querySelector('h1');
// const novoTitulo = titulo;
// // titulo, titulo2 e novoTitulo são iguais

// const cloneTitulo = titulo.cloneNode(true);
// const contato = document.querySelector('.contato');
// contato.appendChild(cloneTitulo);


// // Duplique o menu e adicione ele em copy

// const menu = document.querySelector('.menu')
// const menuClone = menu.cloneNode( true)
// const copy = document.querySelector('.copy')
// copy.appendChild(menuClone)

// Selecione o primeiro DT da dl de Faq

// const faq = document.querySelector('.faq')
// const primeiroDt = faq.querySelector('dt')

// // Selecione o DD referente ao primeiro DT

// const primeiroDd = primeiroDt.nextElementSibling

// // Substitua o conteúdo html de .faq pelo de .animais

// const faq = document.querySelector('.faq')
// const animais = document.querySelector('.animais')

// faq.innerHTML = animais.innerHTML