#!/usr/bin/env node
import {
  askName, playQuiz, brainGCD,
} from '..';

playQuiz(brainGCD, askName(brainGCD));
