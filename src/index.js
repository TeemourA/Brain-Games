import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

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
  const iter = (startQuiz, name, roundCounter) => {
    if (roundCounter === 0) {
      console.log(`Congratulations, ${name}!`);
    } else {
      const result = startQuiz();
      const question = car(result);
      const rightAnswer = cdr(result);
      console.log(`Question: ${question}`);
      const userAnswer = readlineSync.question('Your answer: ');

      if (rightAnswer !== userAnswer) {
        console.log(`Let's try again, ${name}!\n'${userAnswer}' is wrong answer ;(. Correct answer is '${rightAnswer}'.`);
      } else {
        iter(startQuiz, name, roundCounter - 1);
      }
    }
  };
  return iter(quiz, userName, 3);
};

export default playQuiz;
