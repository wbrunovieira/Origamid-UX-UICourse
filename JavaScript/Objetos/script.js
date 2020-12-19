// // const carro = {
// //     marca: 'Marca',
// //     preco: 0,
// //   }
  
// //   const honda = carro;
// //   honda.marca = 'Honda';
// //   honda.preco = 4000;
  
// //   const fiat = carro;
// //   fiat.marca = 'Fiat';
// //   fiat.preco = 3000;

  
// //   function Carro() {
// //     this.marca = 'Marca';
// //     this.preco = 0;
// //   }
  
// //   const honda = new Carro();
// //   honda.marca = 'Honda';
// //   honda.preco = 4000;
// //   const fiat = new Carro();
// //   fiat.marca = 'Fiat';
// //   fiat.preco = 3000;

  
// //   const honda = new Carro();

// // // 1 Cria um novo objeto
// // honda = {};

// // // 2 Define o protótipo
// // honda.prototype = Carro.prototype;

// // // 3 Aponta a variável this para o objeto
// // this = honda;

// // // 4 Executa a função, substituindo this pelo objeto
// // honda.marca = 'Marca';
// // honda.preco = 0;

// // // 5 Retorna o novo objeto
// // return honda = {
// //   marca: 'Marca',
// //   preco: 0,
// // }


// // function Carro(marca, preco) {
// //     this.marca = marca;
// //     this.preco = preco;
// //   }
  
// //   const honda = new Carro('Honda', 4000);
// //   const fiat = new Carro('Fiat', 3000);

  
// //   function Carro(marca, precoInicial) {
// //     const taxa = 1.2;
// //     const precoFinal = precoInicial * taxa;
// //     this.marca = marca;
// //     this.preco = precoFinal;
// //     console.log(this);
// //   }
  
// //   const honda = new Carro('Honda', 2000);

  
// //   const Dom = {
// //     seletor: 'li',
// //     element() {
// //       return document.querySelector(this.seletor);
// //     },
// //     ativo() {
// //       this.element().classList.add('ativo');
// //     },
// //   }
  
// //   Dom.ativo(); // adiciona ativo ao li
// //   Dom.seletor = 'ul';
// //   Dom.ativo(); // adiciona ativo ao ul

  
// //   function Dom() {
// //     this.seletor = 'li';
// //     const element = document.querySelector(this.seletor);
// //     this.ativo = function() {
// //       element.classList.add('ativo');
// //     };
// //   }
  
// //   const lista = new Dom();
// //   lista.seletor = 'ul';
// //   lista.ativo();
  
// //   const lastLi = new Dom();
// //   lastLi.seletor = 'li:last-child';
// //   lastLi.ativo();

  
// //   function Dom(seletor) {
// //     const element = document.querySelector(seletor);
// //     this.ativo = function(classe) {
// //       element.classList.add(classe);
// //     };
// //   }
  
// //   const lista = new Dom('ul');
// //   lista.ativo('ativo');
  
// //   const lastLi = new Dom('li:last-child');
// //   lastLi.ativo('ativo');

  
// //   // Transforme o objeto abaixo em uma Constructor Function
// //  function Pessoa (nome, idade) {
// //     this.nome = nome,
// //     this.idade = idade,
// //     this.andar = function() {
// //       return console.log(this.nome + ' andou');
// //     }
// //   }
  
// //   // Crie 3 pessoas, João - 20 anos,
// //   // Maria - 25 anos, Bruno - 15 anos
  
// //   const joao = new Pessoa('Joao', 20)
  

// //   const maria = new Pessoa('Maria', 25)

// //   const bruno = new Pessoa('Bruno', 15)
  
// //   // Crie uma Constructor Function (Dom) para manipulação
// //   // de listas de elementos do dom. Deve conter as seguintes
// //   // propriedades e métodos:
// //   //
// //   // elements, retorna NodeList com os elementos selecionados
// //   // addClass(classe), adiciona a classe a todos os elementos
// //   // removeClass(classe), remove a classe a todos os elementos
  

// //   function Dom(seletor) {
// //       const elementList = document.querySelectorAll(seletor)
// //       this.elements = elementList
      
// //       this.AddClass = function(classe){
// //           elementList.forEach((element) => {
// //               element.classList.add(classe)
// //           })
// //       }
// //       this.removeClass = function(classe) {
// //         elementList.forEach((element) => {
// //             element.classList.remove(classe)
// //         })
// //       }
// //   }

// //  const li = new Dom('li')
// //  li.AddClass('teste')

// //  li.removeClass('teste')

// //  const h1 = new Dom('h1')

// //  // Construtores de objetos nativos
// // Object
// // String
// // 

// // strings

// // const comida = 'Pizza';
// // const liquido = new String('Água');
// // const ano = new String(2018);


// // const comida = 'Pizza';
// // const frase = 'A melhor comida';

// // comida.length; // 5
// // frase.length; // 15

// // comida[0] // P
// // frase[0] // A
// // frase[frase.length - 1] // a


// // const linguagem = 'JavaScript';

// // linguagem.charAt(0); // J
// // linguagem.charAt(2); // v
// // linguagem.charAt(linguagem.length - 1); // t


// // const frase = 'A melhor linguagem é ';
// // const linguagem = 'JavaScript';

// // const fraseCompleta = frase.concat(linguagem, '!!');


// // const fruta = 'Banana';
// // const listaFrutas = 'Melancia, Banana, Laranja';

// // listaFrutas.includes(fruta); // true
// // fruta.includes(listaFrutas); // false


// // const fruta = 'Banana';

// // fruta.endsWith('nana'); // true
// // fruta.startsWith('Ba'); // true
// // fruta.startsWith('na'); // false


// // const transacao1 = 'Depósito de cliente';
// // const transacao2 = 'Depósito de fornecedor';
// // const transacao3 = 'Taxa de camisas';

// // transacao1.slice(0, 3); // Dep
// // transacao2.slice(0, 3); // Dep
// // transacao3.slice(0, 3); // Tax

// // transacao1.slice(12); // cliente
// // transacao1.slice(-4); // ente
// // transacao1.slice(3, 6); // ósi


// // const linguagem = 'JavaScript';
// // linguagem.substring(3,5); // aS
// // linguagem.substring(0,4); // Java
// // linguagem.substring(4); // Script
// // linguagem.substring(-3); // JavaScript


// // const instrumento = 'Guitarra';

// // instrumento.indexOf('r'); // 5
// // instrumento.lastIndexOf('r'); // 6
// // instrumento.indexOf('ta'); // 3


// // const listaPrecos = ['R$ 99', 'R$ 199', 'R$ 12000'];

// // listaPrecos.forEach((preco) => {
// //   console.log(preco.padStart(10, '.'));
// // })

// // listaPrecos[0].padStart(10, '.'); // .....R$ 99
// // listaPrecos[0].padEnd(10, '.');   // R$ 99.....


// // const frase = 'Ta';

// // frase.repeat(5); // TaTaTaTaTa


// // let listaItens = 'Camisas Bonés Calças Bermudas Vestidos Saias';
// // listaItens = listaItens.replace(/[ ]+/g, ', ');

// // let preco = 'R$ 1200,43';
// // preco = preco.replace(',', '.'); // 'R$ 1200.43'


// // const listaItens = 'Camisas Bonés Calças Bermudas Vestidos Saias';
// // const arrayItens = listaItens.split(' ');

// // const htmlText = '<div>O melhor item</div><div>A melhor lista</div>';
// // const htmlArray = htmlText.split('div');
// // const htmlNovo = htmlArray.join('section');


// // const sexo1 = 'Feminino';
// // const sexo2 = 'feminino';
// // const sexo3 = 'FEMININO';

// // (sexo1.toLowerCase() === 'feminino'); // true
// // (sexo2.toLowerCase() === 'feminino'); // true
// // (sexo3.toLowerCase() === 'feminino'); // true


// // const valor = '  R$ 23.00   ' 
// // valor.trim(); // 'R$ 23.00'
// // valor.trimStart(); // 'R$ 23.00   '
// // valor.trimEnd(); // '  R$ 23.00'




// // // Utilizando o foreach na array abaixo,
// // // some os valores de Taxa e os valores de Recebimento

// // const transacoes = [
// //   {
// //     descricao: 'Taxa do Pão',
// //     valor: 'R$ 39',
// //   },
// //   {
// //     descricao: 'Taxa do Mercado',
// //     valor: 'R$ 129',
// //   },
// //   {
// //     descricao: 'Recebimento de Cliente',
// //     valor: 'R$ 99',
// //   },
// //   {
// //     descricao: 'Taxa do Banco',
// //     valor: 'R$ 129',
// //   },
// //   {
// //     descricao: 'Recebimento de Cliente',
// //     valor: 'R$ 49',
// //   },
// // ];
// // let taxaTotal = 0
// // let recebimentoTotal = 0
// // transacoes.forEach((item) => {
// //   const numeroLimpo = +item.valor.replace('R$ ', '')
// //   if(item.descricao.slice(0,4) === 'Taxa'){
// //     taxaTotal += numeroLimpo
// //   } else if(item.descricao.slice(0,4) === 'Rece'){
// //     recebimentoTotal += numeroLimpo
// //   }
// // })
// // console.log(taxaTotal)
// // console.log(recebimentoTotal)


// // // Retorne uma array com a lista abaixo
// // const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';

// // const arrayItens =transportes.split(';')
// // console.log(arrayItens)


// // // Substitua todos os span's por a's
// // const html = `<ul>
// //                 <li><span>Sobre</span></li>
// //                 <li><span>Produtos</span></li>
// //                 <li><span>Contato</span></li>
// //               </ul>`;

// // const htmlSemSpan = html.split('span')
// // const htmlComA = htmlSemSpan.join('a')            
// // console.log(htmlComA)


// // // // Retorne o último caracter da frase
// //  const frase = 'Melhor do ano!';
// //  const fraseSemUltimo = frase[frase.length-1]
// //  console.log(fraseSemUltimo)

// // // // Retorne o total de taxas
// //  const transacoes2 = ['Taxa do Banco', '   TAXA DO PÃO', '  taxa do mercado', 'depósito Bancário', 'TARIFA especial'];


// //  let taxasTotal = 0
// //  transacoes2.forEach((item) => {
// //    iten= item.toLocaleLowerCase().trim().slice(0,4)
// //    if(iten === 'taxa') taxasTotal++
   
// //  })

// //  console.log(taxasTotal)


// // const numerosa = [1,3,4,5,6]

// // Match.max(1,3,4,5)

// //Numbers

// // const ano = 2018;
// // const preco = new Number(99);


// // Number.isNaN(NaN); // true
// // Number.isNaN(4 + 5); // false

// // Number.isInteger(20); // true
// // Number.isInteger(23.6); // false


// // parseFloat('99.50'); // Mesma função sem o Number
// // Number.parseFloat('99.50'); // 99.5
// // Number.parseFloat('100 Reais'); // 100
// // Number.parseFloat('R$ 100'); // NaN

// // parseInt('99.50', 10); // 99
// // parseInt(5.43434355555, 10); // 5
// // Number.parseInt('100 Reais', 10); // 100


// // const preco = 2.99;
// // preco.toFixed(); // 3

// // const carro = 1000.455;
// // carro.toFixed(2) // 1000.46

// // const preco2 = 1499.49;
// // preco2.toFixed() // 1499


// // const preco = 2.99;
// // preco.toString(10); // '2.99'


// // const preco = 59.49;
// // preco.toLocaleString('en-US', {style: 'currency', currency: 'USD'}); // $59.49
// // preco.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}); // R$ 59,49


// // Math.PI // 3.14159
// // Math.E // 2.718
// // Math.LN10 // 2.303


// // Math.abs(-5.5); // 5.5
// // Math.ceil(4.8334); // 5
// // Math.ceil(4.3); // 5
// // Math.floor(4.8334); // 4
// // Math.floor(4.3); // 4
// // Math.round(4.8334); // 5
// // Math.round(4.3); // 4


// // Math.max(5,3,10,42,2); // 42
// // Math.min(5,3,10,42,2); // 2

// // Math.random(); // 0.XXX
// // Math.floor(Math.random() * 100); // entre 0 e 100
// // Math.floor(Math.random() * 500);  // entre 0 e 500

// // // Número random entre 72 e 32
// // Math.floor(Math.random() * (72 - 32 + 1)) + 32; 
// // Math.floor(Math.random() * (max - min + 1)) + min;


// // Retorne um número aleatório
// // entre 1050 e 2000

// // console.log(Math.floor(Math.random() * (2000 - 1050 + 1)) + 1050)


// // // Retorne o maior número da lista abaixo
// // const numeros = '4, 5, 20, 8, 9';

// // const arrayNumeros= numeros.split(',')
// // const numeroMaximo = Math.max(...arrayNumeros)

// // console.log(numeroMaximo)


// // // Crie uma função para limpar os preços
// // // e retornar os números com centavos arredondados
// // // depois retorne a soma total
// // const listaPrecos = ['R$ 59,99', ' R$ 100,222',
// //                      'R$ 230  ', 'r$  200'];

// //  function limparPreco(preco) {
// //    preco = +preco.toUpperCase().replace('R$', '').trim().replace(',', '.')
// //    preco = +preco.toFixed(2)
// //    return preco
// //  }

// //  let soma = 0
// //  listaPrecos.forEach((preco) => {
// //    soma += limparPreco(preco)
// //  })

// // console.log(soma.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'}))
              

// // const instrumentos = ['Guitarra', 'Baixo', 'Violão'];
// // const precos = [49, 99, 69, 89];

// // const dados = [new String('Tipo 1'), ['Carro', 'Portas', {cor: 'Azul', preco: 2000}], function andar(nome) { console.log(nome) }];

// // dados[2]('Ford');
// // dados[1][2].cor; // azul


// // const instrumentos = ['Guitarra', 'Baixo', 'Violão'];
// // const carros = new Array('Corola', 'Mustang', 'Honda');

// // carros[1] // Mustang
// // carros[2] = 'Ferrari';
// // carros[10] = 'Parati';
// // carros.length; // 11


// // let li = document.querySelectorAll('li'); // NodeList
// // li = Array.from(li); // Array

// // const carros = {
// //   0: 'Fiat',
// //   1: 'Honda',
// //   2: 'Ford',
// //   length: 4,
// // }

// // const carrosArray = Array.from(carros);


// // let li = document.querySelectorAll('li'); // NodeList
// // Array.isArray(li); // false

// // li = Array.from(li); // Array
// // Array.isArray(li); // true


// // Array.of(10); // [10]
// // Array.of(1,2,3,4); // [1,2,3,4]
// // new Array(5); // [,,,,]
// // Array(5); // [,,,,]
// // Array(1,2,3,4); // [1,2,3,4]


// // const frutas = ['Banana', 'Pêra', ['Uva Roxa', 'Uva Verde']];
// // frutas.length; // 3

// // frutas[0].length; // 6
// // frutas[1].length; // 5
// // frutas[2].length; // 2


// // const instrumentos = ['Guitarra', 'Baixo', 'Violão'];
// // instrumentos.sort();
// // instrumentos; // ['Baixo', 'Guitarra', Violão]

// // const idades = [32,21,33,43,1,12,8];
// // idades.sort();
// // idades; // [1, 12, 21, 32, 33, 43, 8]


// // const carros = ['Ford', 'Fiat', 'VW'];
// // carros.unshift('Honda', 'Kia'); // 5
// // carros; // ['Honda', 'Kia', 'Ford', 'Fiat', 'VW'];

// // carros.push('Ferrari'); // 6
// // carros; // ['Honda', 'Kia', 'Ford', 'Fiat', 'VW', 'Ferrari'];


// // const carros = ['Ford', 'Fiat', 'VW', 'Honda'];
// // const primeiroCarro = carros.shift(); // 'Ford'
// // carros; // ['Fiat', 'VW', 'Honda'];

// // const ultimoCarro = carros.pop(); // 'Honda'
// // carros; // ['Fiat', 'VW'];


// // const carros = ['Ford', 'Fiat', 'VW', 'Honda'];
// // carros.reverse(); // ['Honda', 'VW', 'Fiat', 'Ford'];


// // const carros = ['Ford', 'Fiat', 'VW', 'Honda'];
// // carros.splice(1, 0, 'Kia', 'Mustang'); // []
// // carros; // ['Ford', 'Kia', 'Mustang', 'Fiat', 'VW', 'Honda']

// // carros.splice(3, 2, 'Ferrari'); // ['Fiat', 'VW']
// // carros; // ['Ford', 'Kia', 'Mustang', 'Ferrari', 'Honda']


// // ['Item1', 'Item2', 'Item3', 'Item4'].copyWithin(2, 0, 3);
// // // ['Item1', 'Item2', 'Item1', 'Item2']

// // ['Item1', 'Item2', 'Item3', 'Item4'].copyWithin(-1);
// // // ['Item1', 'Item2', 'Item3', 'Item1']


// // ['Item1', 'Item2', 'Item3', 'Item4'].fill('Banana');
// // // ['Banana', 'Banana', 'Banana', 'Banana']

// // ['Item1', 'Item2', 'Item3', 'Item4'].fill('Banana', 2);
// // // ['Item1', 'Item2', 'Banana', 'Banana']

// // ['Item1', 'Item2', 'Item3', 'Item4'].fill('Banana', 1, 3);
// // // ['Item1', 'Banana', 'Banana', 'Item4']


// // const transporte1 = ['Barco', 'Aviao'];
// // const transporte2 = ['Carro', 'Moto'];
// // const transportes = transporte1.concat(transporte2);
// // // ['Barco', 'Aviao', 'Carro', 'Moto'];

// // const maisTransportes = [].concat(transporte1, transporte2, 'Van');
// // // ['Barco', 'Aviao', 'Carro', 'Moto', 'Van'];


// // const linguagens = ['html', 'css', 'js', 'php', 'python', 'js'];

// // linguagens.includes('css'); // true
// // linguagens.includes('ruby'); // false
// // linguagens.indexOf('python'); // 4
// // linguagens.indexOf('js'); // 2
// // linguagens.lastIndexOf('js'); // 5


// // const linguagens = ['html', 'css', 'js', 'php', 'python'];
// // linguagens.join(); // 'html,css,js,php,python'
// // linguagens.join(' '); // 'html css js php python'
// // linguagens.join('-_-'); // 'html-_-css-_-js-_-php-_-python'

// // let htmlString = '<h2>Título Principal</h2>'
// // htmlString = htmlString.split('h2');
// // // ['<', '>Título Principal</', '>']
// // htmlString = htmlString.join('h1');
// // // <h1>Título Principal</h1>


// // const linguagens = ['html', 'css', 'js', 'php', 'python'];
// // linguagens.slice(3); // ['php', 'python']
// // linguagens.slice(1, 4); // ['css', 'js', 'php']

// // // const cloneLinguagens = linguagens.slice();


// // const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão'];
// // // Remova o primeiro valor de comidas e coloque em uma variável

// // const primeiro = comidas.shift()
// // // Remova o último valor de comidas e coloque em uma variável
// // const ultimo = comidas.pop();
// // // Adicione 'Arroz' ao final da array

// // const maisArroz = comidas.push('Arroz')

// // // Adicione 'Peixe' e 'Batata' ao início da array

// // const maisPeixe = comidas.unshift('Peixe, Batata', comidas)

// // console.log(maisPeixe)


// // let estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber', 'Julia'];
// // // Arrume os estudantes em ordem alfabética

// // estudantes.sort()

// // // Inverta a ordem dos estudantes

// // estudantes.reverse()
// // // Verifique se Joana faz parte dos estudantes

// // estudantes.includes('Joana')
// // // Verifique se Juliana faz parte dos estudantes

// // estudantes.includes('Juliana')

// // let html = `<section>
// //               <div>Sobre</div>
// //               <div>Produtos</div>
// //               <div>Contato</div>
// //             </section>`
// // // Substitua section por ul e div com li,
// // // utilizando split e join

// // html = html.split('section').join('ul').split('div').join('li')




// // const carros = ['Ford', 'Fiat', 'VW', 'Honda'];
// // // Remova o último carro, mas antes de remover
// // // salve a array original em outra variável

// // const carrosClone = carros.slice()
// // carros.pop()

// // const carros = ['Ford', 'Fiat', 'Honda'];
// // carros.forEach(function(item, index, array) {
// //   console.log(item.toUpperCase());
// // });

// // // com Arrow Function
// // carros.forEach((item, index, array) => {
// //   console.log(item.toUpperCase());
// // });


// // const li = document.querySelectorAll('li');

// // li.forEach(i => i.classList.add('ativa'));

// // li.forEach(function(item) {
// //   item.classList.add('ativa');
// // });


// // const carros = ['Ford', 'Fiat', 'Honda'];
// // carros.forEach((item, index, array) => {
// //   array[index] = 'Carro ' + item;
// // });

// // carros; // ['Carro Ford', 'Carro Fiat', 'Carro Honda']

// // const carros = ['Ford', 'Fiat', 'Honda'];
// // const newCarros = carros.map((item) => {
// //   return 'Carro ' + item;
// // });

// // carros; // ['Ford', 'Fiat', 'Honda']
// // newCarros; // ['Carro Ford', 'Carro Fiat', 'Carro Honda']; 



// // const carros = ['Ford', 'Fiat', 'Honda'];
// // const newCarros = carros.map((item) => {
// //   const novoValor = 'Carro ' + item;
// // });

// // newCarros; // [undefined, undefined, undefined];

// // const numeros = [2, 4, 6, 8, 10, 12, 14];
// // const numerosX3 = numeros.map(n => n * 3);

// // numerosX3; // [6, 12, 18, 24, 30, 36, 42];


// // const numeros = [2, 4, 6, 8, 10, 12, 14];
// // const numerosX3 = numeros.map(n => n * 3);

// // numerosX3; // [6, 12, 18, 24, 30, 36, 42];


// // const aulas = [
// //   {
// //     nome: 'HTML 1',
// //     min: 15
// //   },
// //   {
// //     nome: 'HTML 2',
// //     min: 10
// //   },
// //   {
// //     nome: 'CSS 1',
// //     min: 20
// //   },
// //   {
// //     nome: 'JS 1',
// //     min: 25
// //   },
// // ]

// // const tempoAulas = aulas.map(aula => aula.min);
// // // [15, 10, 20, 25];

// // const puxarNomes = aula => aula.nome;
// // const nomesAulas = aulas.map(puxarNomes);
// // // ['HTML 1', 'HTML 2', 'CSS 1', 'JS 1']


// // const aulas = [10, 25, 30];
// // const total1 = aulas.reduce((acumulador, atual) => {
// //   return acumulador + atual;
// // });
// // total1; // 65

// // const total2 = aulas.reduce((acc, cur) => acc + cur, 100);
// // total2; // 165


// // const aulas = [10, 25, 30];

// // // 1
// // aulas.reduce((0, 10) => {
// //   return 0 + 10;
// // }, 0); // retorna 10

// // // 2
// // aulas.reduce((10, 25) => {
// //   return 10 + 25;
// // }, 0); // retorna 35

// // // 3
// // aulas.reduce((35, 30) => {
// //   return 35 + 30;
// // }, 0); // retorna 65


// // const aulas = [10, 25, 30];

// // // 1
// // aulas.reduce((10, 25) => {
// //   return 10 + 25;
// // }) // retorna 35

// // // 2
// // aulas.reduce((35, 30) => {
// //   return 35 + 30;
// // }) // retorna 65


// // const numeros = [10, 25, 60, 5, 35, 10];

// // const maiorValor = numeros.reduce((anterior, atual) => {
// //   return anterior < atual ? atual : anterior;
// // });

// // maiorValor; // 60


// // const aulas = [
// //   {
// //     nome: 'HTML 1',
// //     min: 15
// //   },
// //   {
// //     nome: 'HTML 2',
// //     min: 10
// //   },
// //   {
// //     nome: 'CSS 1',
// //     min: 20
// //   },
// //   {
// //     nome: 'JS 1',
// //     min: 25
// //   },
// // ]

// // const listaAulas = aulas.reduce((acumulador, atual, index) => {
// //   acumulador[index] = atual.nome;
// //   return acumulador;
// // }, {})


// // // 1
// // aulas.reduce(({}, {nome: 'HTML 1', min: 15}, 0) => {
// //   {}[0] = 'HTML 1';
// //   return {0: 'HTML 1'};
// // }, {})

// // // 2
// // aulas.reduce(({0: 'HTML 1'}, {nome: 'HTML 2', min: 10}, 1) => {
// //   {0: 'HTML 1'}[1] = 'HTML 2';
// //   return {0: 'HTML 1', 1: 'HTML 2'};
// // }, {})

// // // 3
// // aulas.reduce(({0: 'HTML 1', 1: 'HTML 2'}, {nome: 'CSS 1', min: 20}, 2) => {
// //   {0: 'HTML 1', 1: 'HTML 2'}[2] = 'CSS 1';
// //   return {0: 'HTML 1', 1: 'HTML 2', 2: 'CSS 1'};
// // }, {})

// // // 4
// // aulas.reduce(({0: 'HTML 1', 1: 'HTML 2', 2: 'CSS 1'}, {nome: 'JS 1', min: 25}, 3) => {
// //   {0: 'HTML 1', 1: 'HTML 2', 2: 'CSS 1'}[3] = 'JS 1';
// //   return {0: 'HTML 1', 1: 'HTML 2', 2: 'CSS 1', 3: 'JS 1'};
// // }, {})


// // const frutas = ['Banana', 'Pêra', 'Uva'];

// // const frutasRight = frutas.reduceRight((acc, fruta) => acc + ' ' + fruta);
// // const frutasLeft = frutas.reduce((acc, fruta) => acc + ' ' + fruta);

// // frutasRight; // Uva Pêra Banana
// // frutasLeft; // Banana Pêra Uva


// // const frutas = ['Banana', 'Pêra', 'Uva'];
// // const temUva = frutas.some((fruta) => {
// //   return fruta === 'Uva';
// // }); // true

// // function maiorQue100(numero) {
// //   return numero > 100;
// // }
// // const numeros = [0, 43, 22, 88, 101, 2];
// // const temMaior = numeros.some(maiorQue100); // true


// // const frutas = ['Banana', 'Pêra', 'Uva', ''];
// // // False pois pelo menos uma fruta
// // // está vazia '', o que é um valor falsy
// // const arraysCheias = frutas.every((fruta) => {
// //   return fruta; // false
// // });

// // const numeros = [6, 43, 22, 88, 101, 29];
// // const maiorQue3 = numeros.every(x => x > 3); // true


// // const frutas = ['Banana', 'Pêra', 'Uva', 'Maçã'];
// // const buscaUva = frutas.findIndex((fruta) => {
// //   return fruta === 'Uva'; 
// // }); // 2

// // const numeros = [6, 43, 22, 88, 101, 29];
// // const buscaMaior45 = numeros.find(x => x > 45); // 88


// // const frutas = ['Banana', undefined, null, '', 'Uva', 0, 'Maçã'];
// // const arrayLimpa = frutas.filter((fruta) => {
// //   return fruta; 
// // }); // ['Banana', 'Uva', 'Maçã']

// // const numeros = [6, 43, 22, 88, 101, 29];
// // const buscaMaior45 = numeros.filter(x => x > 45); // [88, 101]


// // const aulas = [
// //   {
// //     nome: 'HTML 1',
// //     min: 15
// //   },
// //   {
// //     nome: 'HTML 2',
// //     min: 10
// //   },
// //   {
// //     nome: 'CSS 1',
// //     min: 20
// //   },
// //   {
// //     nome: 'JS 1',
// //     min: 25
// //   },
// // ]

// // const aulasMaiores = aulas.filter((aula) => { 
// //   return aula.min > 15;
// // });
// // // [{nome: 'CSS 1', min: 20}, {nome: 'JS 1', min: 25}]


// // // Selecione cada curso e retorne uma array
// // // com objetos contendo o título, descricao,
// // // aulas e horas de cada curso
// // const cursos = document.querySelectorAll('.curso')

// // const arrayCursos = Array.from(cursos)

// // const objetoCursos = arrayCursos.map((curso) => {
// //   const titulo = curso.querySelector('h1').innerText
// //   const descricao = curso.querySelector('p').innerText
// //   const aulas = curso.querySelector('.aulas').innerText
// //   const horas = curso.querySelector('.horas').innerText

// //   return {
// //      titulo,descricao, aulas, horas
// //   }
// // })


// // // Retorne uma lista com os
// // // números maiores que 100
// // const numeros = [3, 44, 333, 23, 122, 322, 33];
// // const numerosMaiores = numeros.filter((item) => item > 100)


// // // Verifique se Baixo faz parte
// // // da lista de instrumentos e retorne true
// // const instrumentos = ['Guitarra', 'Baixo', 'Bateria', 'Teclado']

// // const temBaixo = instrumentos.some((item) => item === 'Baixo')


// // // Retorne o valor total das compras
// // const compras = [
// //   {
// //     item: 'Banana',
// //     preco: 'R$ 4,99'
// //   },
// //   {
// //     item: 'Ovo',
// //     preco: 'R$ 2,99'
// //   },
// //   {
// //     item: 'Carne',
// //     preco: 'R$ 25,49'
// //   },
// //   {
// //     item: 'Refrigerante',
// //     preco: 'R$ 5,35'
// //   },
// //   {
// //     item: 'Quejo',
// //     preco: 'R$ 10,60'
// //   }
// // ]

// // const comprasTotais = compras.reduce((acumulador, item) => { 
// //   const precoLimpo = +item.preco.replace('R$ ', '').replace(',', '.')
  
// //   return acumulador + precoLimpo
   
// // // },0)

// // function areaQuadrado(lado) {
// //   return lado * lado;
// // }

// // const perimetroQuadrado = new Function('lado', 'return lado * 4');


// // function somar(n1, n2) {
// //   return n1 + n2;
// // }

// // somar.length; // 2
// // somar.name; // 'somar'


// // const carro = {
// //   marca: 'Ford',
// //   ano: 2018
// // }

// // function descricaoCarro() {
// //   console.log(this.marca + ' ' + this.ano);
// // }

// // descricaoCarro() // undefined undefined
// // descricaoCarro.call() // undefined undefined
// // descricaoCarro.call(carro) // Ford 2018


// // const carros = ['Ford', 'Fiat', 'VW'];

// // carros.forEach((item) => {
// //   console.log(item);
// // }); // Log de cada Carro

// // carros.forEach.call(carros, (item) => {
// //   console.log(item);
// // }); // Log de cada Carro

// // const frutas = ['Banana', 'Pêra', 'Uva'];

// // carros.forEach.call(frutas, (item) => {
// //   console.log(item);
// // }); // Log de cada Fruta


// // function Dom(seletor) {
// //   this.element = document.querySelector(seletor);
// // };

// // Dom.prototype.ativo = function(classe) {
// //   this.element.classList.add(classe);
// // };

// // const lista = new Dom('ul');
// // lista.ativo('ativar');
// // console.log(lista);


// // const novoSeletor = {
// //   element: document.querySelector('li')
// // }

// // Dom.prototype.ativo.call(novoSeletor, 'ativar');


// // Array.prototype.mostreThis = function() {
// //   console.log(this);
// // }

// // const frutas = ['Uva', 'Maçã', 'Banana'];
// // frutas.mostreThis(); // ['Uva', 'Maçã', 'Banana']

// // Array.prototype.pop.call(frutas); // Remove Banana
// // frutas.pop(); // Mesma coisa que a função acima


// // const li = document.querySelectorAll('li');

// // const filtro = Array.prototype.filter.call(li, function(item) {
// //   return item.classList.contains('ativo');
// // });

// // filtro; // Retorna os itens que possuem ativo


// // const numeros = [3,4,6,1,34,44,32];
// // Math.max.apply(null, numeros);
// // Math.max.call(null, 3, 4, 5, 6, 7, 20);

// // // Podemos passar null para o valor
// // // de this, caso a função não utilize
// // // o objeto principal para funcionar


// // const li = document.querySelectorAll('li');

// // function itemPossuiAtivo(item) {
// //   return item.classList.contains('ativo');
// // }

// // const filtro1 = Array.prototype.filter.call(li, itemPossuiAtivo);
// // const filtro2 = Array.prototype.filter.apply(li, [itemPossuiAtivo]);


// // const li = document.querySelectorAll('li');

// // const filtrarLi = Array.prototype.filter.bind(li, function(item) {
// //   return item.classList.contains('ativo');
// // });

// // filtrarLi();


// // const carro = {
// //   marca: 'Ford',
// //   ano: 2018,
// //   acelerar: function(aceleracao, tempo) {
// //     return `${this.marca} acelerou ${aceleracao} em ${tempo}`;
// //   }
// // }
// // carro.acelerar(100, 20);
// // // Ford acelerou 100 em 20

// // const honda = {
// //   marca: 'Honda',
// // };
// // const acelerarHonda = carro.acelerar.bind(honda);
// // acelerarHonda(200, 10);
// // // Honda acelerou 200 em 10


// // function imc(altura, peso) {
// //   return peso / (altura * altura);
// // }

// // const imc180 = imc.bind(null, 1.80);

// // imc(1.80, 70); // 21.6
// // imc180(70); // 21.6


// // Retorne a soma total de caracteres dos
// // parágrafos acima utilizando reduce

// // const todosP = document.querySelectorAll('p')
// // const caracteres = Array.prototype.reduce.call(todosP, (acumulador, item) => {
// //   return acumulador  + item.innerText.length
// // },0)


// // console.log(caracteres)

// // Crie uma função que retorne novos elementos
// // html, com os seguintes parâmetros
// // tag, classe e conteudo.

// // function criarElemento(tag, classe, conteudo){
// //   const elemento = document.createElement(tag);
// //   classe ? elemento.classList.add(classe) : null;
// //   conteudo ? elemento.innerHTML = conteudo : null;
// //   return elemento
// // }


// // Crie uma nova função utilizando a anterior como base
// // essa nova função deverá sempre criar h1 com a
// // classe titulo. Porém o parâmetro conteudo continuará dinâmico


// // const h1Titulo = criarElemento.bind(null, 'h1', 'titulo')


// objetos

// const carro = {
//   marca: 'Ford',
//   ano: 2018,
// }

// const pessoa = new Object({
//   nome: 'André',
//   idade: 28,
// })

// const carro = {
//   rodas: 4,
//   init(marca) {
//     this.marca = marca;
//     return this;
//   },
//   acelerar() {
//     return `${this.marca} acelerou as ${this.rodas} rodas`;
//   },
//   buzinar() {
//     return this.marca + ' buzinou';
//   }
// }

// const honda = Object.create(carro);
// honda.init('Honda').acelerar();


// const funcaoAutomovel = {
//   acelerar() {
//     return 'acelerou';
//   },
//   buzinar() {
//     return 'buzinou';
//   },
// }

// const moto = {
//   rodas: 2,
//   capacete: true,
// }

// const carro = {
//   rodas: 4,
//   mala: true,
// }

// Object.assign(moto, funcaoAutomovel);
// Object.assign(carro, funcaoAutomovel);


// const moto = {}
// Object.defineProperties(moto, {
//   rodas: {
//     value: 2,
//     configurable: false, // impede deletar e mudança de valor
//     enumarable: true, // torna enumerável
//   },
//   capacete: {
//     value: true,
//     configurable: true,
//     writable: false, // impede mudança de valor
//   },
// })

// moto.rodas = 4;
// delete moto.capacete;
// moto;
// // {rodas: 2}


// const moto = {}
// Object.defineProperties(moto, {
//   velocidade: {
//     get() {
//       return this._velocidade;
//     },
//     set(valor) {
//       this._velocidade = 'Velocidade ' + valor;
//     }
//   },
// })

// moto.velocidade = 200;
// moto.velocidade;
// // Velocidade 200


// Object.getOwnPropertyDescriptors(Array);
// // Lista com métodos e propriedades e Array

// Object.getOwnPropertyDescriptors(Array.prototype);
// // Lista com métodos e propriedades do protótipo de Array

// Object.getOwnPropertyDescriptor(window, 'innerHeight');
// // Puxa de uma única propriedade


// Object.keys(Array);
// // [] vazia, pois não possui propriedades enumeráveis

// const carro = {
//   marca: 'Ford',
//   ano: 2018,
// }
// Object.keys(carro);
// // ['marca', 'ano']
// Object.values(carro);
// // ['Ford', 2018]
// Object.entries(carro);
// // [['marca', 'Ford'], ['ano', 2018]]


// Object.getOwnPropertyNames(Array);
// // ['length', 'name', 'prototype', 'isArray', 'from', 'of']

// Object.getOwnPropertyNames(Array.prototype);
// // [..., 'filter', 'map', 'every', 'some', 'reduce', ...]

// const carro = {
//   marca: 'Ford',
//   ano: 2018,
// }
// Object.getOwnPropertyNames(carro);
// // ['marca', 'ano']


// const frutas = ['Banana', 'Pêra']
// Object.getPrototypeOf(frutas);
// Object.getPrototypeOf(''); // String

// const frutas1 = ['Banana', 'Pêra'];
// const frutas2 = ['Banana', 'Pêra'];

// Object.is(frutas1, frutas2); // false


// const carro = {
//   marca: 'Ford',
//   ano: 2018,
// }
// Object.freeze(carro);
// Object.seal(carro);
// Object.preventExtensions(carro);

// Object.isFrozen(carro); // true
// Object.isSealed(carro); // true
// Object.isExtensible(carro); // true


// const frutas = ['Banana', 'Uva'];
// frutas.constructor; // Array

// const frase = 'Isso é uma String';
// frase.constructor; // String


// const frutas = ['Banana', 'Uva'];

// frutas.hasOwnProperty('map'); // false
// Array.hasOwnProperty('map'); // false
// Array.prototype.hasOwnProperty('map'); // true

// Array.prototype.propertyIsEnumerable('map'); // false
// window.propertyIsEnumerable('innerHeight'); // true


// const frutas = ['Banana', 'Uva'];

// Array.prototype.isPrototypeOf(frutas); // true


// const frutas = ['Banana', 'Uva'];
// frutas.toString(); // 'Banana,Uva'
// typeof frutas; // object
// Object.prototype.toString.call(frutas); // [object Array]

// const frase = 'Uma String';
// frase.toString(); // 'Uma String'
// typeof frase; // string
// Object.prototype.toString.call(frase); // [object String]

// const carro = {marca: 'Ford'};
// carro.toString(); // [object Object]
// typeof carro; // object
// Object.prototype.toString.call(carro); // [object Object]

// const li = document.querySelectorAll('li');
// typeof li; // object
// Object.prototype.toString.call(li); // [object NodeList]

// Crie uma função que verifique
// corretamente o tipo de dado


functions VeficarDado(dado){
  return Object.prototype.toString.call(dado)
}

// Crie um objeto quadrado com
// a propriedade lados e torne
// ela imutável

const quadrado = {}
Object.defineProperties(quadrado, {
  lados: {
    values: 4,
    enumerable: true,

  }
})

// Previna qualquer mudança
// no objeto abaixo
const configuracao = {
  width: 800,
  height: 600,
  background: '#333'
}
Object.freeze(configuracao)

// Liste o nome de todas
// as propriedades do
// protótipo de String e Array

console.log(Object.getOwnPropertyNames(String.prototype))
console.log(Object.getOwnPropertyNames(Array.prototype))

