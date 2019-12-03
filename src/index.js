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

export const playEvenessQuiz = (name, counter = 0) => {
  if (counter === 3) {
    console.log(`Congratulations, ${name}!`);
  } else {
    const currentNumber = Math.floor(Math.random() * 100);
    console.log(`Question: ${currentNumber}`);
    const rigthAnswer = currentNumber % 2 ? 'no' : 'yes';
    const currentAnswer = readlineSync.question('Your answer:');

    if (rigthAnswer !== currentAnswer) {
      console.log(`Let's try again, ${name}!`);
    } else {
      playEvenessQuiz(name, counter + 1);
    }
  }
};
