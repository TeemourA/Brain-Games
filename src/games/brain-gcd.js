import { cons } from '@hexlet/pairs';
import generateNumber from '../utils';
import playQuiz from '..';

const rule = 'Find the greatest common divisor of given numbers.';
const gcd = (x, y) => (y ? gcd(y, x % y) : x);

const playBrainGCD = () => {
  const firstNumber = generateNumber(0, 100);
  const secondNumber = generateNumber(0, 100);
  const rightAnswer = `${gcd(firstNumber, secondNumber)}`;
  const currentQuestion = `${firstNumber} ${secondNumber}`;

  return cons(currentQuestion, rightAnswer);
};

export default () => playQuiz(playBrainGCD, rule);
