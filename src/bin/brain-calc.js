#!/usr/bin/env node
import {
  askName, playQuiz, brainCalc,
} from '..';

playQuiz(brainCalc, askName(brainCalc));
