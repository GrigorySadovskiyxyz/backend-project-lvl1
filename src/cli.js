#!/usr/bin/env node
/* eslint-disable no-console */
import readlineSync from 'readline-sync';

const userNameInfo = () => {
	const userName = readlineSync.question('May I have your name? ');
	return userName;
};

export { userNameInfo };
