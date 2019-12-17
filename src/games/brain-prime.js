import { cons } from '@hexlet/pairs';
import generateNumber from '../utils';
import playQuiz from '..';

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

const playBrainPrime = () => {
  const number = generateNumber(0, 150);
  const rightAnswer = isPrime(number) ? 'yes' : 'no';
  const currentQuestion = `${number}`;

  return cons(currentQuestion, rightAnswer);
};

export default () => playQuiz(playBrainPrime, rule);
