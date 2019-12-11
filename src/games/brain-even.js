import { generateNumber, playQuiz } from '..';

const isEven = (n) => (!(n % 2));
const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const brainEven = () => {
  const currentQuestion = generateNumber(100);
  const rightAnswer = isEven(currentQuestion) ? 'yes' : 'no';
  return (f) => f(currentQuestion, rightAnswer);
};

export default () => playQuiz(brainEven, rules);
