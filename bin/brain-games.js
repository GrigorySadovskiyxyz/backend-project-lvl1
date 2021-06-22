#!/usr/bin/env node
import userNameInfoGreeting from '../src/cli.js';

const userName = userNameInfoGreeting();

console.log(`Hello, ${userName}!`);