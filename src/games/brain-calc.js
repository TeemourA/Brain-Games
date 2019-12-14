import { cons } from '@hexlet/pairs';
import { generateNumber, playQuiz } from '..';

const rules = 'What is the result of the expression?';
const list = '+-*';

const calculateAnswer = (o, x, y) => {
  switch (o) {
    case '+':
      return x + y;
    case '-':
      return x - y;
    case '*':
      return x * y;
    default:
      return '';
  }
};

const brainCalc = () => {
  const firstNumber = generateNumber(100);
  const secondNumber = generateNumber(100);
  const operation = list[generateNumber(list.length)];
  const rightAnswer = `${calculateAnswer(operation, firstNumber, secondNumber)}`;
  const currentQuestion = `${firstNumber} ${operation} ${secondNumber}`;

  return cons(currentQuestion, rightAnswer);
};

export default () => playQuiz(brainCalc, rules);
