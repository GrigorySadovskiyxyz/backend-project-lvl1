#!/usr/bin/env node
/* eslint-disable no-console */
/* eslint-disable comma-dangle */

const randomValue = function getRandomInt(value = 100) {
  return Math.ceil(Math.random() * value);
}; // Generating random number up to 100

const randomOperator = function getRandomOperator(value = 3) {
  const arr = ['-', '+', '*'];
  return arr[Math.floor(Math.random() * value)];
};

// Рекомендуемая длина прогрессии – 10 чисел.

const randomArr = function getRandomArr() {
  const arr = [];
  const randomFirstValue = randomValue(100);
  const randomSizing = randomValue(4);
  let newVal = randomFirstValue + randomSizing;
  arr.push(randomFirstValue);

  for (let i = 0; i < 9; i++) {
    arr.push(newVal);
    newVal += randomSizing;
  }
  return arr;
};

const randomIndex = function getRandomIndex(value = 9) {
  return Math.floor(Math.random() * value);
}; // Generating random number up to 100

export {
  randomValue, randomOperator, randomArr, randomIndex
};
