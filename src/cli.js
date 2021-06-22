#!/usr/bin/env node
/* eslint-disable no-console */
import readlineSync from 'readline-sync';

const userNameInfoGreeting = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  return userName;
};

export default userNameInfoGreeting;
