import { cons, car, cdr } from '@hexlet/pairs';
import generateNumber from '../utils';
import playQuiz from '..';

const rule = 'What number is missing in the progression?';

const makeSecretProgressionAndSecretValue = (base, increment, length) => {
  const makeProgression = (len, progression) => {
    if (len) {
      const current = base + (increment * len);
      return makeProgression(len - 1, `${current} ${progression}`);
    }
    return progression;
  };
  const result = makeProgression(length, '');
  const secretValue = `${base + (increment * generateNumber(1, length))}`;
  const progressionWithSecret = `${result.replace(secretValue, '..')}`;
  return cons(secretValue, progressionWithSecret);
};

const playBrainProgression = () => {
  const base = generateNumber(1, 5);
  const increment = generateNumber(2, 5);
  const currentProgression = makeSecretProgressionAndSecretValue(base, increment, 10);
  const rightAnswer = car(currentProgression);
  const currentQuestion = cdr(currentProgression);

  return cons(currentQuestion, rightAnswer);
};

export default () => playQuiz(playBrainProgression, rule);
