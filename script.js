import { prompt } from './helper.js';

console.log('ADDITION-MASTER ™️');


const firstNumber = Number(await prompt('Enter the first number: '));
const secondNumber = Number(await prompt('Enter the second number: '));

console.log('The sum is', firstNumber + secondNumber);
