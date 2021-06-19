#!/usr/bin/env node
/* eslint-disable no-console */
/* eslint-disable comma-dangle */

import * as CONSTANTS from 'cli.js'
import readlineSync from 'readline-sync';

CONSTANTS.userNameInfo();

let counter = 0;

const randomValue = function getRandomInt(value = 100) {
    return Math.ceil(Math.random() * value);
  }; // Generating random number up to 100

