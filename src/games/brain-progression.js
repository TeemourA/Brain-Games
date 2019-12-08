import readlineSync from 'readline-sync';
import { generateNumber, getFirstParameter, getSecondParameter } from '..';

const brainProgression = (name = 'Anonymous') => {
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
  console.log(`Question: ${progressionWithSecret}`);
  const currentAnswer = readlineSync.question('Your answer:');
  const retry = () => console.log(`Let's try again, ${name}!\n'${currentAnswer}' is wrong answer ;(. Correct answer is '${rightAnswer}'.`);

  return (f) => f(rightAnswer, currentAnswer, retry);
};

export default brainProgression;
