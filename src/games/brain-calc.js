import { generateNumber, playQuiz } from '..';

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

const rules = 'What is the result of the expression?';

const brainCalc = () => {
  const list = '+-*';
  const firstNumber = generateNumber(100);
  const secondNumber = generateNumber(100);
  const operation = generateNumber(list.length);
  const rightAnswer = calculateAnswer(operation, firstNumber, secondNumber);
  const currentQuestion = `${firstNumber} ${list[operation]} ${secondNumber}`;

  return (f) => f(currentQuestion, rightAnswer);
};

export default () => playQuiz(brainCalc, rules);
