import { createRequire } from "module";

const require = createRequire(import.meta.url);

const readlineSync = require("readline-sync");

console.log("Welcome to the Brain Games!");
let userNameInfo = readlineSync.question("May I have your name? ");
console.log("Hello, " + userNameInfo + "!");

export { userNameInfo };
