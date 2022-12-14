// prendere elemento DOM
// chiedere con un promt di inserire 10 numeri all'utente
// stampare la somma di tutti i numeri inseriti

// prendere elemento DOM
const resultElement = document.getElementById('result');
// dichiaro variabile per sommare numeri
let sum = 0;
// chiedere con un promt di inserire 10 numeri all'utente
for (let i = 0; i < 10; i++) {
    const numbers = parseInt(prompt('inserisci un numero').trim());
    console.log(numbers);
    // faccio la somma dei numeri inseriti
    sum += numbers;
}

// stampo in pagina
console.log(sum);
resultElement.innerText = sum;
    
    