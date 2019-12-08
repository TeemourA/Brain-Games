import readlineSync from 'readline-sync';

const print = (text, name = '') => {
  console.log(`${text}, ${name}!`);
};

const generateNumber = (n = 1, m = 0) => m + Math.floor(Math.random() * n);

export const getFirstParameter = (f) => f((x) => x);

export const getSecondParameter = (f) => f((x, y) => y);

export const getThirdParameter = (f) => f((x, y, z) => z);

export const brainEven = (name = 'Anonymous') => {
  const currentNumber = generateNumber(100);
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
  const firstNumber = generateNumber(100);
  const secondNumber = generateNumber(100);
  const random = generateNumber(3);
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
  const firstNumber = generateNumber(100);
  const secondNumber = generateNumber(100);
  const rightAnswer = `${gcd(firstNumber, secondNumber)}`;
  console.log(`Question: ${firstNumber} ${secondNumber}`);
  const currentAnswer = readlineSync.question('Your answer:');
  const retry = () => console.log(`Let's try again, ${name}!\n'${currentAnswer}' is wrong answer ;(. Correct answer is '${rightAnswer}'.`);

  return (f) => f(rightAnswer, currentAnswer, retry);
};

// brain-progression
export const brainProgression = (name = '') => {
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
    case brainProgression:
      greeting();
      console.log('What number is missing in the progression?\n');
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
