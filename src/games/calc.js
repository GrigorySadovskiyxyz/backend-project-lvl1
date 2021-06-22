#!/usr/bin/env node
/* eslint-disable no-console */
/* eslint-disable comma-dangle */

import readlineSync from 'readline-sync';
import userNameInfoGreeting from '../src/cli.js';
import * as CONSTANTS from '../src/index.js';

const userName = userNameInfoGreeting();
let counter = 0;

console.log(`Hello, ${userName}!\nWhat is the result of the expression?`);

function getRandomEquation() {
  const leftOperand = CONSTANTS.randomValue();
  const rightOperand = CONSTANTS.randomValue();
  const operator = CONSTANTS.randomOperator();
  const resultEquation = `${leftOperand} ${operator} ${rightOperand}`;
  return resultEquation;
}

function brainCalc() {
  let trueAnswer;
  do {
    const initializeFunc = getRandomEquation();
    console.log(`Question: ${initializeFunc}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (Number(userAnswer) === (eval(initializeFunc))) {
      counter += 1;
      console.log('Correct!');
    } else if (Number(userAnswer) !== (eval(initializeFunc))) {
      trueAnswer = `${eval(initializeFunc)}`;
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${trueAnswer}'.`
      );
      break;
    }
  } while (counter !== 3);
  if (counter === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
}

export default brainCalc;
