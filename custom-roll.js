
const prompt = require('prompt-sync')({sigint: true});

let diceSides = Number(prompt("How many sides do the dice have? "));

console.log('Below is a random roll of dice with ${number of side}: ');
console.log(Math.ceil(Math.random() * diceSides));