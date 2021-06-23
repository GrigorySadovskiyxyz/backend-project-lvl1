#!/usr/bin/env node
import userNameInfoGreeting from '../src/cli';

const userName = userNameInfoGreeting();

console.log(`Hello, ${userName}!`);
