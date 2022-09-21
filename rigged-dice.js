
const prompt = require('prompt-sync')({sigint: true});

//let diceRoll = Number(prompt("Choose a number between 1 and 6: "));


//if(diceRoll === 1){
 //   console.log(Math.ceil(Math.random() * 1) + 1);
//}
//else if(diceRoll === 2){
 //   console.log(Math.ceil(Math.random() * 2));
//} else if (diceRoll === 3){
  ////  console.log(Math.ceil(Math.random() * 3) + 1);
//} else if (diceRoll === 4){
 ////   console.log(Math.ceil(Math.random() * 4) );
//}  else if (diceRoll === 5){
 //   console.log(Math.ceil(Math.random() * 5));
//}  else if (diceRoll === 6){
 //   console.log(Math.ceil(Math.random() * 6));
//} else {
//    console.log("error");
//}

let rigged = Number(prompt("Enter a side you want between 1 and 6: "));

let diceRoll = Math.ceil(Math.random() * 7);

console.log("Actual roll: " + diceRoll);

if(diceRoll === 7){
    console.log(rigged);
} else {
    console.log(diceRoll);
}