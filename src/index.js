import readlineSync from 'readline-sync';

const print = (text, name = '') => {
  console.log(`${text}, ${name}!`);
};

export const brainEven = (name = 'Anonymous') => {
  const currentNumber = Math.floor(Math.random() * 100);
  console.log(`Question: ${currentNumber}`);
  const rightAnswer = currentNumber % 2 ? 'no' : 'yes';
  const currentAnswer = readlineSync.question('Your answer:');
  const retry = () => console.log(`Let's try again, ${name}!`);
  return (f) => f(rightAnswer, currentAnswer, retry);
};

export const brainCalc = (name = 'Anonymous') => {
  const calculateAnswer = (o, x, y) => {
    switch (o) {
      case 0:
        return `${x + y}`;
      case 1:
        return `${x - y}`;
      case 2:
        return `${x * y}`;
      default:
        return '';
    }
  };

  const operations = '+-*';
  const firstNumber = Math.floor(Math.random() * 100);
  const secondNumber = Math.floor(Math.random() * 100);
  const random = Math.floor(Math.random() * 3);
  const rightAnswer = calculateAnswer(random, firstNumber, secondNumber);
  console.log(`Question: ${firstNumber} ${operations[random]} ${secondNumber}`);
  const currentAnswer = readlineSync.question('Your answer:');
  const retry = () => console.log(`Let's try again, ${name}!\n'${currentAnswer}' is wrong answer ;(. Correct answer is '${rightAnswer}'.`);

  return (f) => f(rightAnswer, currentAnswer, retry);
};

export const brainGCD = (name = '') => {
  const gcd = (x, y) => {
    if (y) {
      return gcd(y, x % y);
    }
    return x;
  };
  const firstNumber = Math.floor(Math.random() * 100);
  const secondNumber = Math.floor(Math.random() * 100);
  const rightAnswer = `${gcd(firstNumber, secondNumber)}`;
  console.log(`Question: ${firstNumber} ${secondNumber}`);
  const currentAnswer = readlineSync.question('Your answer:');
  const retry = () => console.log(`Let's try again, ${name}!\n'${currentAnswer}' is wrong answer ;(. Correct answer is '${rightAnswer}'.`);

  return (f) => f(rightAnswer, currentAnswer, retry);
};

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
    case brainEven:
      greeting();
      console.log('Answer "yes" if the number is even, otherwise answer "no".\n');
      break;
    case brainCalc:
      greeting();
      console.log('What is the result of the expression?\n');
      break;
    case brainGCD:
      greeting();
      console.log('Find the greatest common divisor of given numbers.\n');
      break;
    default:
      greeting();
  }
  const name = getName();
  print('Hello', name);
  return name;
};

export const getRigthAnswer = (brainGame) => brainGame((rightAnswer) => rightAnswer);

// eslint-disable-next-line max-len
export const getCurrentAnswer = (brainGame) => brainGame((rightAnswer, currentAnswer) => currentAnswer);

// eslint-disable-next-line max-len
export const getRetry = (brainGame) => brainGame((rightAnswer, currentAnswer, retry) => retry());

export const playQuiz = (quiz, name, counter = 0) => {
  if (counter === 3) {
    console.log(`Congratulations, ${name}!`);
  } else {
    const result = quiz(name);

    if (getRigthAnswer(result) !== getCurrentAnswer(result)) {
      getRetry(result);
    } else {
      playQuiz(quiz, name, counter + 1);
    }
  }
};
