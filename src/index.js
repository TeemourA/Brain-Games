import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

const getName = () => {
  const name = readlineSync.question('May I have your name? ');
  const anon = 'Anonymous';
  return name.length ? name : anon;
};

const playQuiz = (quiz, rule) => {
  const roundsCount = 3;
  console.log('Welcome to the Brain Games!');
  console.log(`${rule}\n`);
  const userName = getName();
  console.log(`Hello, ${userName}!`);

  const iter = (roundCounter) => {
    if (roundCounter === 0) {
      console.log(`Congratulations, ${userName}!`);
    } else {
      const result = quiz();
      const question = car(result);
      const rightAnswer = cdr(result);
      console.log(`Question: ${question}`);
      const userAnswer = readlineSync.question('Your answer: ');

      if (userAnswer !== rightAnswer) {
        console.log(`Let's try again, ${userName}!\n'${userAnswer}' is wrong answer ;(. Correct answer is '${rightAnswer}'.`);
      } else {
        iter(roundCounter - 1);
      }
    }
  };
  iter(roundsCount);
};

export default playQuiz;
