import { Question } from './types';
import { QUESTIONS_2014 } from './anno2014';

// Combine questions from all year files.
// In the future, we can import QUESTIONS_2015, etc. and add them here.
export const QUESTIONS: Question[] = [
  ...QUESTIONS_2014,
];

// Generate the list of unique systems from the questions.
export const SYSTEMS: string[] = [...new Set(QUESTIONS.map(q => q.system))];
