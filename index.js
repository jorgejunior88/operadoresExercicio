// comentário

// let nome = prompt('Qual o seu nome?');
// let sNome = prompt('Qual o seu sobrenome?');
// let idade = prompt('Qual a sua idade?');
// let est = prompt('Você é estudante: '); 

// console.log('Você é o ' + nome , sNome, 'você tem ' + idade, 'anos e ' + est, 'está estudando.');

// const got = 'Game of Trhones'
// const temporadasDeGot = 8
// console.log(typeof got, typeof temporadasDeGot);

// let und 
// console.log(typeof und);

// let a = 10
// let b = 10

// console.log(b)

// b = 5
// console.log(a, b)

// let a = 10
// let b = 20
// c = a
// b = c
// a = b

// console.log(a, b, c)

// let p = prompt("Quantas horas você trabalha por dia?")
// let t = prompt("Quanto você recebe por dia?")
// alert(`Voce recebe ${t/p} por hora`)


//Exercicios

// let nome
// let idade
// console.log(typeof nome, typeof idade)
// nome = String(prompt('Qual o seu nome?'))
// idade = Number(prompt('Qual a sua idade?'))
// console.log(typeof nome, typeof idade)
// console.log('Olá', nome, 'você tem', idade, 'anos.')


// let cel = prompt('Você tem celular? (Sim ou Não)')
// let bic = prompt('Você tem biciicleta? (Sim ou Não)')
// let rel = prompt('Você tem relógio? (Sim ou Não)')
// console.log(cel, bic, rel)


// let a = 10
// let b = 25
// c = a 
// a = b
// b = c
// console.log("O novo valor de a é", a) // O novo valor de a é 25
// console.log("O novo valor de b é", b) // O novo valor de b é 10


function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  
  const car1 = new Car('Eagle', 'Talon TSi', 1993);
  
  console.log(car1.model);
  // Expected output: "Eagle"