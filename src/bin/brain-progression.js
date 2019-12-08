#!/usr/bin/env node
import {
  askName, playQuiz, brainProgression,
} from '..';

playQuiz(brainProgression, askName(brainProgression));
