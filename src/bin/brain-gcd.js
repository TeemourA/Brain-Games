#!/usr/bin/env node
import brainGCD from '../games/brain-gcd';
import {
  askName, playQuiz,
} from '..';

playQuiz(brainGCD, askName('brainGCD'));
