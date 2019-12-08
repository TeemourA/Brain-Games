#!/usr/bin/env node
import brainEven from '../games/brain-even';
import {
  askName, playQuiz,
} from '..';

playQuiz(brainEven, askName('brainEven'));
