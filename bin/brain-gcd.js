#!/usr/bin/env node
/* eslint-disable no-console */
/* eslint-disable comma-dangle */

import readlineSync from 'readline-sync';
import userNameInfoGreeting from '/Users/grigory/backend-project-lvl1/src/cli.js';
import * as CONSTANTS from '/Users/grigory/backend-project-lvl1/src/index.js';

// GDC calc online link: http://www.alcula.com/calculators/math/gcd/#gsc.tab=0

const userName = userNameInfoGreeting();
let counter = 0;

console.log(`Hello, ${userName}!\nFind the greatest common divisor of given numbers.`);

function gcd(x, y) {
  if ((typeof x !== 'number') || (typeof y !== 'number')) return false;
  x = Math.abs(x);
  y = Math.abs(y);
  while (y) {
    const t = y;
    y = x % y;
    x = t;
  }
  return x;
}

function getRandomEquation() {
  const leftOperand = CONSTANTS.randomValue();
  const rightOperand = CONSTANTS.randomValue();
  const resultEquation = `${leftOperand} ${rightOperand}`;
  return resultEquation;
}

function brainGCD() {
  let trueAnswer;
  do {
    const initializeFunc = getRandomEquation();
    const arrSplit = initializeFunc.split(' ');
    const firstVal = parseInt(arrSplit[0]);
    const secondVal = parseInt(arrSplit[1]);

    console.log(`Question: ${initializeFunc}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (Number(userAnswer) === gcd(firstVal, secondVal)) {
      counter += 1;
      console.log('Correct!');
    } else if (Number(userAnswer) !== gcd(firstVal, secondVal)) {
      trueAnswer = `${gcd(firstVal, secondVal)}`;
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

brainGCD();
