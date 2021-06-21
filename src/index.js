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

export { randomValue, randomOperator };
