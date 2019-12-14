import { cons } from '@hexlet/pairs';
import { generateNumber, playQuiz } from '..';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

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

const brainPrime = () => {
  const number = generateNumber(150);
  const rightAnswer = isPrime(number) ? 'yes' : 'no';
  const currentQuestion = `${number}`;

  return cons(currentQuestion, rightAnswer);
};

export default () => playQuiz(brainPrime, rules);
