import readlineSync from 'readline-sync';
import { generateNumber } from '..';

const brainGCD = (name = 'Anonymous') => {
  const gcd = (x, y) => {
    if (y) {
      return gcd(y, x % y);
    }
    return x;
  };
  const firstNumber = generateNumber(100);
  const secondNumber = generateNumber(100);
  const rightAnswer = `${gcd(firstNumber, secondNumber)}`;
  console.log(`Question: ${firstNumber} ${secondNumber}`);
  const currentAnswer = readlineSync.question('Your answer:');
  const retry = () => console.log(`Let's try again, ${name}!\n'${currentAnswer}' is wrong answer ;(. Correct answer is '${rightAnswer}'.`);

  return (f) => f(rightAnswer, currentAnswer, retry);
};

export default brainGCD;
