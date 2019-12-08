#!/usr/bin/env node
import brainPrime from '../games/brain-prime';
import {
  askName, playQuiz,
} from '..';

playQuiz(brainPrime, askName('brainPrime'));
