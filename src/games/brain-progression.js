import { cons } from '@hexlet/pairs';
import generateNumber from '../utils';
import playGame from '..';

const rule = 'What number is missing in the progression?';

const makeProgression = (base, increment, length, progression) => {
  if (length) {
    const current = base + (increment * length);
    return makeProgression(base, increment, length - 1, `${current} ${progression}`);
  }
  return progression;
};


const generateBrainProgressionData = () => {
  const base = generateNumber(1, 5);
  const increment = generateNumber(2, 5);
  const length = 10;
  const secretValueIndex = generateNumber(1, length);

  const progression = makeProgression(base, increment, length, '');

  const rightAnswer = (base + (increment * secretValueIndex)).toString();
  const currentQuestion = progression.replace(rightAnswer, '..');

  return cons(currentQuestion, rightAnswer);
};

export default () => playGame(generateBrainProgressionData, rule);
