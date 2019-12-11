import { generateNumber, playQuiz } from '..';

const isPrime = (num) => {
  const iter = (number, divisor) => {
    if (number === divisor) {
      return 'yes';
    }
    if (number < 2 || number % divisor === 0) {
      return 'no';
    }

    return iter(number, divisor + 1);
  };
  return iter(num, 2);
};

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const brainPrime = () => {
  const number = generateNumber(150);
  const rightAnswer = isPrime(number);
  const currentQuestion = `${number}`;

  return (f) => f(currentQuestion, rightAnswer);
};

export default () => playQuiz(brainPrime, rules);
