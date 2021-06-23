#!/usr/bin/env node
/* eslint-disable import/extensions */

import userNameInfoGreeting from '../src/cli.js';

const userName = userNameInfoGreeting();

console.log(`Hello, ${userName}!`);
