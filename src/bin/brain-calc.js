#!/usr/bin/env node
import brainCalc from '../games/brain-calc';
import {
  askName, playQuiz,
} from '..';

playQuiz(brainCalc, askName('brainCalc'));
