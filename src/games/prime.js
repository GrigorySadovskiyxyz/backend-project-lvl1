#!/usr/bin/env node
/* eslint-disable no-console */
/* eslint-disable comma-dangle */

import readlineSync from 'readline-sync';
import userNameInfoGreeting from '../../src/cli.js';
import * as CONSTANTS from '../../src/index.js';

const userName = userNameInfoGreeting();
let counter = 0;

console.log(
  `Hello, ${userName}!\nAnswer "yes" if given number is prime. Otherwise answer "no".`
); // Assign name of the user

function isPrime(num) {
  if (num <= 1) return false;
  if (num == 2) return true;

  for (let i = 2; i <= num / 2; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
}

function brainPrime() {
  let trueAnswer;
  do {
    const givenNum = CONSTANTS.randomValue();
    const initializeFunc = isPrime(givenNum);
    console.log(`Question: ${givenNum}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if ((userAnswer === 'yes') && (initializeFunc === true)) {
      counter += 1;
      console.log('Correct!');
    } else if ((userAnswer === 'no') && (initializeFunc === false)) {
      counter += 1;
      console.log('Correct!');
    } else {
      trueAnswer = initializeFunc ? 'yes' : 'no';
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${trueAnswer}'.\nLet's try again, ${userName}`
      );
      break;
    }
  } while (counter !== 3);
  if (counter === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
}

export default brainPrime;
