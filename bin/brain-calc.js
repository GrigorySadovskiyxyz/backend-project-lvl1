#!/usr/bin/env node
/* eslint-disable no-console */
/* eslint-disable comma-dangle */
import { createRequire } from 'module'; // Importing "require" for the readlineSync

const require = createRequire(import.meta.url);
const readlineSync = require('readline-sync'); // Importing readlineSync

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!\nWhat is the result of the expression?.`); // Instructions and name link

const randomValue = function getRandomInt(value = 100) {
  return Math.ceil(Math.random() * value);
}; // Making random number from 0 to 100

// const probabilityValue = Math.random(); // Making random math operand
let result;
let sign;

const getStuff = function getRandomEquation(value = Math.random()) {
  const leftOperand = randomValue();
  const rightOperand = randomValue();

  switch (value) {
    case value < 0.33:
      result = `${leftOperand} - ${rightOperand}`;
      sign = leftOperand - rightOperand;
      return result, sign;
    case value > 0.33 && value < 0.66:
      result = `${leftOperand} + ${rightOperand}`;
      sign = leftOperand + rightOperand;
      return result, sign;
    case value > 0.66 && value < 1:
      result = `${leftOperand} * ${rightOperand}`;
      sign = leftOperand * rightOperand;
      return result, sign;
    default:
      result = `${leftOperand} * ${rightOperand}`;
  }
  return result;
};

function brainCalc() {
  let counter = 0;
  let trueAnswer;
  do {
    let initializeFunc = getStuff();
    console.log(`Question: ${initializeFunc}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (Number(userAnswer) === sign) {
      counter += 1;
      console.log('Correct!');
    } else if (Number(userAnswer) !== sign) {
      trueAnswer = `${sign}`;
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${trueAnswer}'.`
      );
      break;
    }
  } while (counter !== 3);
}

brainCalc();
