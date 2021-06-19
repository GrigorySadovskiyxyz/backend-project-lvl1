#!/usr/bin/env node
/* eslint-disable no-console */
/* eslint-disable comma-dangle */
import { readlineSync } from 'readlineSync'; 

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log(
  `Hello, ${userName}!\nAnswer "yes" if the number is even, otherwise answer "no".`
); // Assign name of the user

const randomValue = function getRandomInt(value = 100) {
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
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === 'yes' && isTrue(eachStepValue) === true) {
      counter += 1;
      trueAnswer = 'yes';
      console.log('Correct!');
    } else if (userAnswer === 'no' && isTrue(eachStepValue) === false) {
      counter += 1;
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