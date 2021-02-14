import { createRequire } from 'module'; // Importing "require" for the readlineSync

const require = createRequire(import.meta.url);
const readlineSync = require('readline-sync'); // Importing readlineSync

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`); // Assign name of the user

console.log('Answer "yes" if the number is even, otherwise answer "no".');

let randomValue = function getRandomInt(value = 100) {
  return Math.ceil(Math.random() * value);
}; // Generating random number up to 100

const isTrue = function isEven(value) {
  if (value % 2 === 0) {
    return true;
  }
  return false;
}; // Checking if the number is even (boolean)

const isEvenLogic = function checkUserAnswer() {
  let counter = 0;
  let trueAnswer;
  do {
    const eachStepValue = randomValue();
    console.log(`Question: ${eachStepValue}`);
    let userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === 'yes' && isTrue(eachStepValue) === true) {
      counter++;
      trueAnswer = 'yes';
      console.log('Correct!');
    } else if (userAnswer === 'no' && isTrue(eachStepValue) === false) {
      counter++;
      trueAnswer = 'no';
      console.log('Correct!');
    } else {
      trueAnswer = isTrue(eachStepValue) ? 'yes' : 'no';
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${trueAnswer}'.`
      );
      console.log(`Let's try again, ${userName}!`);
      break;
    }
  } while (counter !== 3);
}; // Logic of the game

isEvenLogic(); // Initializing the game
