import { generateNumber, playQuiz } from '..';

const gcd = (x, y) => (y ? gcd(y, x % y) : x);
const rules = 'Find the greatest common divisor of given numbers.';

const brainGCD = () => {
  const firstNumber = generateNumber(100);
  const secondNumber = generateNumber(100);
  const rightAnswer = `${gcd(firstNumber, secondNumber)}`;
  const currentQuestion = `${firstNumber} ${secondNumber}`;

  return (f) => f(currentQuestion, rightAnswer);
};

export default () => playQuiz(brainGCD, rules);
