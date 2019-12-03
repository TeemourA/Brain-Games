#!/usr/bin/env node
import { askName, playEvenessQuiz, greetingBrainEven } from '..';

greetingBrainEven();

playEvenessQuiz(askName());
