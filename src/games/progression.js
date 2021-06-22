#!/usr/bin/env node
/* eslint-disable no-console */
/* eslint-disable comma-dangle */

import readlineSync from 'readline-sync';
import userNameInfoGreeting from '/Users/grigory/backend-project-lvl1/src/cli.js';
import * as CONSTANTS from '/Users/grigory/backend-project-lvl1/src/index.js';

const userName = userNameInfoGreeting();
let counter = 0;

console.log(`Hello, ${userName}!\nWhat number is missing in the progression?`);

function progressionFunc() {
  const randomIndex = CONSTANTS.randomIndex();
  const newArr = CONSTANTS.randomArr();
  const seekValue = newArr[randomIndex];
  newArr[randomIndex] = '..';
  return [newArr, seekValue];
}

function brainProgression() {
  let trueAnswer;
  do {
    const initializeFunc = progressionFunc();

    console.log(`Question: ${initializeFunc[0].join(' ')}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (Number(userAnswer) === initializeFunc[1]) {
      counter += 1;
      console.log('Correct!');
    } else if (Number(userAnswer) !== initializeFunc[1]) {
      trueAnswer = `${initializeFunc[1]}`;
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

export default brainProgression;
