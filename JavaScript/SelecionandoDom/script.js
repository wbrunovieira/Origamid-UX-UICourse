// Retorne no console todas as imagens do site

const allImages = document.querySelectorAll('img')
console.log(allImages)

// Retorne no console apenas as imagens que começaram com a palavra imagem

const imageInitialImagens = document.querySelectorAll('img[src^="img/imagem"]')
console.log(imageInitialImagens)

// Selecione todos os links internos (onde o href começa com #)

const linksInternos = document.querySelectorAll('[href^="#"]')
console.log(linksInternos)

// Selecione o primeiro h2 dentro de .animais-descricao

const h2AnimaisDescricao = document.getElementsByClassName('animais-descricao')
console.log(h2AnimaisDescricao)

// Selecione o último p do site

const paragrafos = document.querySelectorAll('p')

const ultimoP = paragrafos[paragrafos.length - 1]

console.log(ultimoP)


const imgs = document.querySelectorAll('img');

imgs.forEach(function(item){
  console.log(item);
});


const imgs = document.querySelectorAll('img');

imgs.forEach(function(valorAtual, index, array){
  console.log(item); // o item atual no loop
  console.log(index); // o número do index
  console.log(array); // a Array completa
});


const titulos = document.getElementsByClassName('titulo');
const titulosArray = Array.from(titulos);

titulosArray.forEach(function(item){
  console.log(item);
});


const imgs = document.querySelectorAll('img');

imgs.forEach((item) => {
  console.log(item);
});


const imgs = document.querySelectorAll('img');

imgs.forEach(item => 
  console.log(item)
);

imgs.forEach(item => console.log(item));


// Mostre no console cada parágrado do site

const pNoSite = document.querySelectorAll('p')
console.log(pNoSite)

pNoSite.forEach((item) => {
    console.log(item)
})

// Mostre o texto dos parágrafos no console

pNoSite.forEach((item) => {
    console.log(item.innerText)
})

// Como corrigir os erros abaixo:
const imgs = document.querySelectorAll('img');

imgs.forEach((item, index) => {
  console.log(item, index)
})

let i = 0;
imgs.forEach( ()=> 
  console.log(i++))


imgs.forEach(() => i++);


console.log(i)



const menu = document.querySelector('.menu');

menu.className; // string
menu.classList; // lista de classes
menu.classList.add('ativo');
menu.classList.add('ativo', 'mobile'); // duas classes
menu.classList.remove('ativo');
menu.classList.toggle('ativo'); // adiciona/remove a classe
menu.classList.contains('ativo'); // true ou false
menu.classList.replace('ativo', 'inativo');


const animais = document.querySelector('.animais');

animais.attributes; // retorna todos os atributos
animais.attributes[0]; // retorna o primeiro atributo


const img = document.querySelector('img');

img.getAttribute('src'); // valor do src
img.setAttribute('alt', 'Texto Alternativo'); // muda o alt
img.hasAttribute('id'); // true / false
img.removeAttribute('alt'); // remove o alt

img.hasAttributes(); // true / false se tem algum atributo


const animais = document.querySelector('.animais');

animais.className; // string com o nome das classes
animais.className = 'azul'; // substitui completamente a string
animais.className += ' vermelho'; // adiciona vermelho à string

animais.attributes = 'class="ativo"'; // não funciona, read-only


// Adicione a classe ativo a todos os itens do menu

const itensMenu = document.querySelectorAll('.menu a')
itensMenu.forEach((item) => {
    item.classList.add('ativo')
})
// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro


itensMenu.forEach((item) => {
    item.classList.remove('ativo')
})

itensMenu[0].classList.add('ativo')
// Verifique se as imagens possuem o atributo alt

const imgs = document.querySelectorAll('img');

imgs.forEach(() => {
    const possuiAtributo = imgs.hasAttribute('alt')
})


// Modifique o href do link externo no menu

const linkExterno = document.querySelector('a[href^="http"]')

linkExterno.setAttribute('href', 'https://google.com' )