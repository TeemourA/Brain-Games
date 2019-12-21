import { cons } from '@hexlet/pairs';
import generateNumber from '../utils';
import playGame from '..';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  const iter = (number, divisor) => {
    if (number === divisor) {
      return true;
    }
    if (number < 2 || number % divisor === 0) {
      return false;
    }

    return iter(number, divisor + 1);
  };
  return iter(num, 2);
};

const generateBrainPrimeData = () => {
  const currentQuestion = generateNumber(0, 150);
  const rightAnswer = isPrime(currentQuestion) ? 'yes' : 'no';

  return cons(currentQuestion, rightAnswer);
};

export default () => playGame(generateBrainPrimeData, rule);
