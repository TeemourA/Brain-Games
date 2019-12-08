import readlineSync from 'readline-sync';
import { generateNumber } from '..';

const brainEven = (name = 'Anonymous') => {
  const currentNumber = generateNumber(100);
  console.log(`Question: ${currentNumber}`);
  const rightAnswer = currentNumber % 2 ? 'no' : 'yes';
  const currentAnswer = readlineSync.question('Your answer:');
  const retry = () => console.log(`Let's try again, ${name}!`);
  return (f) => f(rightAnswer, currentAnswer, retry);
};

export default brainEven;
