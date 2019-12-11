import {
  generateNumber, getFirstParameter, getSecondParameter, playQuiz,
} from '..';

const rules = 'What number is missing in the progression?';

const brainProgression = () => {
  const makeProgression = (base, increment, length = 10, result = '') => {
    if (length) {
      const current = base + (increment * length);
      return makeProgression(base, increment, length - 1, `${current} ${result}`);
    }
    const secretValue = `${base + (increment * generateNumber(10, 1))}`;
    const progressionWithSecret = `${result.replace(secretValue, '..')}`;

    return (f) => f(secretValue, progressionWithSecret);
  };

  const currentProgression = makeProgression(generateNumber(5), generateNumber(3, 2));
  const rightAnswer = getFirstParameter(currentProgression);
  const progressionWithSecret = getSecondParameter(currentProgression);
  const currentQuestion = progressionWithSecret; // for further readability

  return (f) => f(currentQuestion, rightAnswer);
};

export default () => playQuiz(brainProgression, rules);
