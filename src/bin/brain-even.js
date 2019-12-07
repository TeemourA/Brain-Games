#!/usr/bin/env node
import {
  askName, playQuiz, brainEven,
} from '..';

playQuiz(brainEven, askName(brainEven));
