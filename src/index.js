import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

const generateNumber = (n = 1, m = 0) => m + Math.floor(Math.random() * n);

const getName = () => {
  const name = readlineSync.question('May I have your name? ');
  const anon = 'Anonymous';
  return name.length ? name : anon;
};

const playQuiz = (quiz, rules) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${rules}\n`);
  const userName = getName();
  console.log(`Hello, ${userName}!`);
  const iter = (quizFlow, name, counter = 0) => {
    if (counter === 3) {
      console.log(`Congratulations, ${name}!`);
    } else {
      const result = quizFlow();
      const question = car(result);
      const rightAnswer = cdr(result);
      console.log(`Question: ${question}`);
      const userAnswer = readlineSync.question('Your answer: ');

      if (rightAnswer !== userAnswer) {
        console.log(`Let's try again, ${name}!\n'${userAnswer}' is wrong answer ;(. Correct answer is '${rightAnswer}'.`);
      } else {
        iter(quizFlow, name, counter + 1);
      }
    }
  };
  return iter(quiz, userName);
};

export {
  generateNumber, playQuiz,
};
