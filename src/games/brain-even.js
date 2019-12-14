import { cons } from '@hexlet/pairs';
import { generateNumber, playQuiz } from '..';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (n) => (!(n % 2));

const brainEven = () => {
  const currentQuestion = generateNumber(100);
  const rightAnswer = isEven(currentQuestion) ? 'yes' : 'no';
  return cons(currentQuestion, rightAnswer);
};

export default () => playQuiz(brainEven, rules);
