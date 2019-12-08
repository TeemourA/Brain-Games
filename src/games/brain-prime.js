import readlineSync from 'readline-sync';
import { generateNumber } from '..';

const brainPrime = (name = 'Anonymous') => {
  const isPrime = (num, divisor = 2) => {
    if (num === divisor) {
      return 'yes';
    }
    if (num < 2 || num % divisor === 0) {
      return 'no';
    }

    return isPrime(num, divisor + 1);
  };
  const number = generateNumber(150);
  const rightAnswer = isPrime(number);
  console.log(`Question: ${number}`);
  const currentAnswer = readlineSync.question('Your answer:');
  const retry = () => console.log(`Let's try again, ${name}!`);

  return (f) => f(rightAnswer, currentAnswer, retry);
};

export default brainPrime;
