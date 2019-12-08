import readlineSync from 'readline-sync';
import { generateNumber } from '..';

const brainCalc = (name = 'Anonymous') => {
  const calculateAnswer = (o, x, y) => {
    switch (o) {
      case 0:
        return `${x + y}`;
      case 1:
        return `${x - y}`;
      case 2:
        return `${x * y}`;
      default:
        return '';
    }
  };
  const operations = '+-*';
  const firstNumber = generateNumber(100);
  const secondNumber = generateNumber(100);
  const random = generateNumber(3);
  const rightAnswer = calculateAnswer(random, firstNumber, secondNumber);
  console.log(`Question: ${firstNumber} ${operations[random]} ${secondNumber}`);
  const currentAnswer = readlineSync.question('Your answer:');
  const retry = () => console.log(`Let's try again, ${name}!\n'${currentAnswer}' is wrong answer ;(. Correct answer is '${rightAnswer}'.`);

  return (f) => f(rightAnswer, currentAnswer, retry);
};

export default brainCalc;
