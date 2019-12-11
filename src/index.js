import readlineSync from 'readline-sync';

const print = (text, name = '') => {
  console.log(`${text}${name}!`);
};

const generateNumber = (n = 1, m = 0) => m + Math.floor(Math.random() * n);

const getFirstParameter = (f) => f((x) => x);

const getSecondParameter = (f) => f((x, y) => y);

const greeting = () => {
  console.log('Welcome to the Brain Games!');
};

const showRules = (rules) => {
  console.log(`${rules}\n`);
};

const getName = () => {
  const name = readlineSync.question('May I have your name? ');
  const anon = 'Anonymous';
  return name.length ? name : anon;
};

const retry = (userName, rightAnswer, currentAnswer) => console.log(`Let's try again, ${userName}!\n'${currentAnswer}' is wrong answer ;(. Correct answer is '${rightAnswer}'.`);

const playQuiz = (quiz, rules) => {
  greeting();
  showRules(rules);
  const userName = getName();
  print('Hello, ', userName);
  const iter = (quizFlow, name, counter = 0) => {
    if (counter === 3) {
      print('Congratulations, ', name);
    } else {
      const result = quizFlow();
      const question = getFirstParameter(result);
      const rightAnswer = getSecondParameter(result);
      console.log(`Question: ${question}`);
      const currentAnswer = readlineSync.question('Your answer: ');

      if (rightAnswer !== currentAnswer) {
        retry(name, rightAnswer, currentAnswer);
      } else {
        iter(quizFlow, name, counter + 1);
      }
    }
  };
  return iter(quiz, userName);
};

export {
  generateNumber, getFirstParameter, getSecondParameter, playQuiz,
};

// eslint-disable-next-line max-len
// export const getThirdParameter = (f) => f((x, y, z) => z); --- to get extra data from quizFlow if needed
