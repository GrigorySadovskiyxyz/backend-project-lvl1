/* eslint-disable no-console */
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

const readlineSync = require('readline-sync');

console.log('Welcome to the Brain Games!');
const userNameInfo = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userNameInfo}!`);

export default userNameInfo;
