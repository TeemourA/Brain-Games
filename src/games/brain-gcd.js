import { cons } from '@hexlet/pairs';
import { generateNumber, playQuiz } from '..';

const rules = 'Find the greatest common divisor of given numbers.';
const gcd = (x, y) => (y ? gcd(y, x % y) : x);

const brainGCD = () => {
  const firstNumber = generateNumber(100);
  const secondNumber = generateNumber(100);
  const rightAnswer = `${gcd(firstNumber, secondNumber)}`;
  const currentQuestion = `${firstNumber} ${secondNumber}`;

  return cons(currentQuestion, rightAnswer);
};

export default () => playQuiz(brainGCD, rules);
