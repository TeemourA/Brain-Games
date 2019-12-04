import readlineSync from 'readline-sync';

export const greetingBrainEven = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if the number is even, otherwise answer "no".\n');
};

const printName = (name) => {
  console.log(`Hello, ${name}!`);
};

export const askName = () => {
  const name = readlineSync.question('May I have your name?');
  printName(name);
  return name;
};

export const getRigthAnswer = (brainGame) => brainGame((rightAnswer) => rightAnswer);

export const getCurrentAnswer = (brainGame) => brainGame((rightAnswer, currentAnswer) => currentAnswer);

export const playQuiz = (quiz, name, counter = 0) => {
  if (counter === 3) {
    console.log(`Congratulations, ${name}!`);
  } else {
    const result = quiz();

    if (getRigthAnswer(result) !== getCurrentAnswer(result)) {
      console.log(`Let's try again, ${name}!`);
    } else {
      playQuiz(quiz, name, counter + 1);
    }
  }
};

export const brainEven = () => {
  const currentNumber = Math.floor(Math.random() * 100);
  console.log(`Question: ${currentNumber}`);
  const rightAnswer = currentNumber % 2 ? 'no' : 'yes';
  const currentAnswer = readlineSync.question('Your answer:');
  return (f) => f(rightAnswer, currentAnswer);
};

