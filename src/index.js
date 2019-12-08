import readlineSync from 'readline-sync';

const print = (text, name = '') => {
  console.log(`${text}, ${name}!`);
};

export const generateNumber = (n = 1, m = 0) => m + Math.floor(Math.random() * n);

export const getFirstParameter = (f) => f((x) => x);

export const getSecondParameter = (f) => f((x, y) => y);

export const getThirdParameter = (f) => f((x, y, z) => z);

export const askName = (quiz = '') => {
  const greeting = () => {
    console.log('Welcome to the Brain Games!');
  };

  const getName = () => {
    const name = readlineSync.question('May I have your name?');
    const anon = 'Anonymous';
    return name.length ? name : anon;
  };

  switch (quiz) {
    case 'brainEven':
      greeting();
      console.log('Answer "yes" if the number is even, otherwise answer "no".\n');
      break;
    case 'brainCalc':
      greeting();
      console.log('What is the result of the expression?\n');
      break;
    case 'brainGCD':
      greeting();
      console.log('Find the greatest common divisor of given numbers.\n');
      break;
    case 'brainProgression':
      greeting();
      console.log('What number is missing in the progression?\n');
      break;
    case 'brainPrime':
      greeting();
      console.log('Answer "yes" if given number is prime. Otherwise answer "no".\n');
      break;
    default:
      greeting();
  }
  const name = getName();
  print('Hello', name);
  return name;
};

export const playQuiz = (quiz, name, counter = 0) => {
  if (counter === 3) {
    console.log(`Congratulations, ${name}!`);
  } else {
    const result = quiz(name);
    const rightAnswer = getFirstParameter(result);
    const currentAnswer = getSecondParameter(result);
    const retry = getThirdParameter(result);

    if (rightAnswer !== currentAnswer) {
      retry();
    } else {
      playQuiz(quiz, name, counter + 1);
    }
  }
};
