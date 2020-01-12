import { cons } from '@hexlet/pairs';
import generateNumber from '../utils';
import playGame from '..';

const rule = 'Find the greatest common divisor of given numbers.';
const gcd = (x, y) => (y ? gcd(y, x % y) : x);

const generateBrainGcdData = () => {
  const firstNumber = generateNumber(0, 100);
  const secondNumber = generateNumber(0, 100);
  const rightAnswer = gcd(firstNumber, secondNumber).toString();
  const currentQuestion = `${firstNumber} ${secondNumber}`;

  return cons(currentQuestion, rightAnswer);
};

export default () => playGame(generateBrainGcdData, rule);
