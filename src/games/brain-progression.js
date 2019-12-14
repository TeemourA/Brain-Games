import { cons, car, cdr } from '@hexlet/pairs';
import { generateNumber, playQuiz } from '..';

const rules = 'What number is missing in the progression?';

const makeProgression = (base, increment, length, counter = 0, result = '') => {
  if (length) {
    const current = base + (increment * length);
    return makeProgression(base, increment, length - 1, counter + 1, `${current} ${result}`);
  }
  const secretValue = `${base + (increment * generateNumber(counter, 1))}`;
  const progressionWithSecret = `${result.replace(secretValue, '..')}`;

  return cons(secretValue, progressionWithSecret);
};

const brainProgression = () => {
  const base = generateNumber(5);
  const increment = generateNumber(3, 2);
  const currentProgression = makeProgression(base, increment, 10);
  const rightAnswer = car(currentProgression);
  const currentQuestion = cdr(currentProgression);

  return cons(currentQuestion, rightAnswer);
};

export default () => playQuiz(brainProgression, rules);
