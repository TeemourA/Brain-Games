import { cons } from '@hexlet/pairs';
import generateNumber from '../utils';
import playQuiz from '..';

const rule = 'What is the result of the expression?';
const operations = '+-*';

const calculateAnswer = (operation, x, y) => {
  switch (operation) {
    case '+':
      return x + y;
    case '-':
      return x - y;
    case '*':
      return x * y;
    default:
      return null;
  }
};

const playBrainCalc = () => {
  const firstOperand = generateNumber(0, 100);
  const secondOperand = generateNumber(0, 100);
  const operation = operations[generateNumber(0, operations.length - 1)];
  const rightAnswer = `${calculateAnswer(operation, firstOperand, secondOperand)}`;
  const currentQuestion = `${firstOperand} ${operation} ${secondOperand}`;

  return cons(currentQuestion, rightAnswer);
};

export default () => playQuiz(playBrainCalc, rule);
