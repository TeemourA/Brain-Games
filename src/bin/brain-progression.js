#!/usr/bin/env node
import brainProgression from '../games/brain-progression';
import {
  askName, playQuiz,
} from '..';

playQuiz(brainProgression, askName('brainProgression'));
