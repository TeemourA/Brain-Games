import { cons } from '@hexlet/pairs';
import generateNumber from '../utils';
import playQuiz from '..';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (n) => (!(n % 2));

const playBrainEven = () => {
  const currentQuestion = generateNumber(0, 100);
  const rightAnswer = isEven(currentQuestion) ? 'yes' : 'no';
  return cons(currentQuestion, rightAnswer);
};

export default () => playQuiz(playBrainEven, rule);
