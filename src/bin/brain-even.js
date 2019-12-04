#!/usr/bin/env node
import {
  askName, playQuiz, greetingBrainEven, brainEven,
} from '..';

greetingBrainEven();

playQuiz(brainEven, askName());
