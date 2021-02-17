#!/usr/bin/env node
/* eslint-disable no-console */
/* eslint-disable comma-dangle */
import { createRequire } from 'module'; // Importing "require" for the readlineSync

const require = createRequire(import.meta.url);
const readlineSync = require('readline-sync'); // Importing readlineSync

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!\nWhat is the result of the expression?.`); // Assign name of the user
