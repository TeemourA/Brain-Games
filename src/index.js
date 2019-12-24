import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

const roundsCount = 3;
const isAnonymous = (name) => (!name.length);

const playQuiz = (generateGameData, rule) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${rule}\n`);
  const nameValue = readlineSync.question('May I have your name? ');
  const userName = isAnonymous(nameValue) ? 'Anonymous' : nameValue;
  console.log(`Hello, ${userName}!`);

  const iter = (roundCounter) => {
    if (roundCounter === 0) {
      console.log(`Congratulations, ${userName}!`);
    } else {
      const gameData = generateGameData();
      const question = car(gameData);
      const rightAnswer = cdr(gameData);
      console.log(`Question: ${question}`);
      const userAnswer = readlineSync.question('Your answer: ');

      if (userAnswer !== rightAnswer) {
        console.log(`Let's try again, ${userName}!`);
        console.log(`'${userAnswer}' is wrong answer ;(. Correct answer is '${rightAnswer}'.`);

        return;
      }
      iter(roundCounter - 1);
    }
  };
  iter(roundsCount);
};

export default playQuiz;
