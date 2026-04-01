import type { ProgramDay } from '../types';

// 28 Day Wall Pilates for Beginners
// Transcribed from poster — durations increase progressively across 4 weeks.
// Pattern: odd days = Group A (rolldown, leg swing, crunch, wall sit)
//          even days = Group B (wall slides, calf stretch, wall angel)
// Some days swap wall leg swing for side leg swing for variety.

export const PROGRAM_NAME = '28 Day Wall Pilates for Beginners';

export const DAYS: ProgramDay[] = [
  // === WEEK 1 ===
  {
    day: 1,
    exercises: [
      { exerciseId: 'supported-rolldown', durationSeconds: 30 },
      { exerciseId: 'wall-leg-swing', durationSeconds: 30 },
      { exerciseId: 'wall-crunch', durationSeconds: 30 },
      { exerciseId: 'wall-sit', durationSeconds: 20 },
    ],
  },
  {
    day: 2,
    exercises: [
      { exerciseId: 'unilateral-wall-slides', durationSeconds: 35 },
      { exerciseId: 'active-calf-stretch', durationSeconds: 15 },
      { exerciseId: 'wall-angel', durationSeconds: 40 },
    ],
  },
  {
    day: 3,
    exercises: [
      { exerciseId: 'supported-rolldown', durationSeconds: 35 },
      { exerciseId: 'side-leg-swing', durationSeconds: 10 },
      { exerciseId: 'wall-crunch', durationSeconds: 30 },
      { exerciseId: 'wall-sit', durationSeconds: 20 },
    ],
  },
  {
    day: 4,
    exercises: [
      { exerciseId: 'unilateral-wall-slides', durationSeconds: 40 },
      { exerciseId: 'active-calf-stretch', durationSeconds: 15 },
      { exerciseId: 'wall-angel', durationSeconds: 40 },
    ],
  },
  {
    day: 5,
    exercises: [
      { exerciseId: 'supported-rolldown', durationSeconds: 25 },
      { exerciseId: 'wall-leg-swing', durationSeconds: 15 },
      { exerciseId: 'wall-angel', durationSeconds: 25 },
    ],
  },
  {
    day: 6,
    exercises: [
      { exerciseId: 'unilateral-wall-slides', durationSeconds: 45 },
      { exerciseId: 'active-calf-stretch', durationSeconds: 30 },
      { exerciseId: 'wall-angel', durationSeconds: 45 },
    ],
  },
  {
    day: 7,
    exercises: [
      { exerciseId: 'supported-rolldown', durationSeconds: 37 },
      { exerciseId: 'side-leg-swing', durationSeconds: 15 },
      { exerciseId: 'wall-leg-swing', durationSeconds: 37 },
      { exerciseId: 'wall-sit', durationSeconds: 20 },
    ],
  },

  // === WEEK 2 ===
  {
    day: 8,
    exercises: [
      { exerciseId: 'unilateral-wall-slides', durationSeconds: 45 },
      { exerciseId: 'active-calf-stretch', durationSeconds: 20 },
      { exerciseId: 'wall-angel', durationSeconds: 45 },
    ],
  },
  {
    day: 9,
    exercises: [
      { exerciseId: 'supported-rolldown', durationSeconds: 37 },
      { exerciseId: 'wall-leg-swing', durationSeconds: 15 },
      { exerciseId: 'wall-crunch', durationSeconds: 37 },
      { exerciseId: 'wall-sit', durationSeconds: 20 },
    ],
  },
  {
    day: 10,
    exercises: [
      { exerciseId: 'unilateral-wall-slides', durationSeconds: 45 },
      { exerciseId: 'active-calf-stretch', durationSeconds: 15 },
      { exerciseId: 'wall-angel', durationSeconds: 45 },
    ],
  },
  {
    day: 11,
    exercises: [
      { exerciseId: 'supported-rolldown', durationSeconds: 39 },
      { exerciseId: 'wall-leg-swing', durationSeconds: 20 },
      { exerciseId: 'wall-crunch', durationSeconds: 39 },
      { exerciseId: 'wall-sit', durationSeconds: 25 },
    ],
  },
  {
    day: 12,
    exercises: [
      { exerciseId: 'unilateral-wall-slides', durationSeconds: 47 },
      { exerciseId: 'active-calf-stretch', durationSeconds: 20 },
      { exerciseId: 'wall-angel', durationSeconds: 47 },
    ],
  },
  {
    day: 13,
    exercises: [
      { exerciseId: 'supported-rolldown', durationSeconds: 40 },
      { exerciseId: 'side-leg-swing', durationSeconds: 20 },
      { exerciseId: 'wall-crunch', durationSeconds: 40 },
      { exerciseId: 'wall-sit', durationSeconds: 25 },
    ],
  },
  {
    day: 14,
    exercises: [
      { exerciseId: 'unilateral-wall-slides', durationSeconds: 30 },
      { exerciseId: 'active-calf-stretch', durationSeconds: 15 },
      { exerciseId: 'wall-angel', durationSeconds: 30 },
    ],
  },

  // === WEEK 3 ===
  {
    day: 15,
    exercises: [
      { exerciseId: 'supported-rolldown', durationSeconds: 40 },
      { exerciseId: 'wall-leg-swing', durationSeconds: 20 },
      { exerciseId: 'wall-crunch', durationSeconds: 40 },
      { exerciseId: 'wall-sit', durationSeconds: 25 },
    ],
  },
  {
    day: 16,
    exercises: [
      { exerciseId: 'unilateral-wall-slides', durationSeconds: 45 },
      { exerciseId: 'active-calf-stretch', durationSeconds: 20 },
      { exerciseId: 'wall-angel', durationSeconds: 45 },
    ],
  },
  {
    day: 17,
    exercises: [
      { exerciseId: 'supported-rolldown', durationSeconds: 45 },
      { exerciseId: 'side-leg-swing', durationSeconds: 20 },
      { exerciseId: 'wall-crunch', durationSeconds: 45 },
      { exerciseId: 'wall-sit', durationSeconds: 25 },
    ],
  },
  {
    day: 18,
    exercises: [
      { exerciseId: 'unilateral-wall-slides', durationSeconds: 50 },
      { exerciseId: 'active-calf-stretch', durationSeconds: 25 },
      { exerciseId: 'wall-angel', durationSeconds: 50 },
    ],
  },
  {
    day: 19,
    exercises: [
      { exerciseId: 'supported-rolldown', durationSeconds: 45 },
      { exerciseId: 'wall-leg-swing', durationSeconds: 25 },
      { exerciseId: 'side-leg-swing', durationSeconds: 20 },
      { exerciseId: 'wall-sit', durationSeconds: 30 },
    ],
  },
  {
    day: 20,
    exercises: [
      { exerciseId: 'unilateral-wall-slides', durationSeconds: 50 },
      { exerciseId: 'active-calf-stretch', durationSeconds: 25 },
      { exerciseId: 'wall-angel', durationSeconds: 50 },
    ],
  },
  {
    day: 21,
    exercises: [
      { exerciseId: 'supported-rolldown', durationSeconds: 45 },
      { exerciseId: 'side-leg-swing', durationSeconds: 20 },
      { exerciseId: 'wall-crunch', durationSeconds: 30 },
      { exerciseId: 'wall-angel', durationSeconds: 30 },
    ],
  },

  // === WEEK 4 ===
  {
    day: 22,
    exercises: [
      { exerciseId: 'unilateral-wall-slides', durationSeconds: 40 },
      { exerciseId: 'active-calf-stretch', durationSeconds: 40 },
      { exerciseId: 'wall-angel', durationSeconds: 45 },
    ],
  },
  {
    day: 23,
    exercises: [
      { exerciseId: 'supported-rolldown', durationSeconds: 45 },
      { exerciseId: 'side-leg-swing', durationSeconds: 25 },
      { exerciseId: 'active-calf-stretch', durationSeconds: 25 },
      { exerciseId: 'wall-angel', durationSeconds: 30 },
    ],
  },
  {
    day: 24,
    exercises: [
      { exerciseId: 'unilateral-wall-slides', durationSeconds: 45 },
      { exerciseId: 'active-calf-stretch', durationSeconds: 25 },
      { exerciseId: 'wall-angel', durationSeconds: 45 },
    ],
  },
  {
    day: 25,
    exercises: [
      { exerciseId: 'supported-rolldown', durationSeconds: 39 },
      { exerciseId: 'side-leg-swing', durationSeconds: 15 },
      { exerciseId: 'wall-crunch', durationSeconds: 28 },
      { exerciseId: 'wall-sit', durationSeconds: 30 },
    ],
  },
  {
    day: 26,
    exercises: [
      { exerciseId: 'unilateral-wall-slides', durationSeconds: 45 },
      { exerciseId: 'active-calf-stretch', durationSeconds: 25 },
      { exerciseId: 'wall-angel', durationSeconds: 45 },
    ],
  },
  {
    day: 27,
    exercises: [
      { exerciseId: 'supported-rolldown', durationSeconds: 45 },
      { exerciseId: 'wall-leg-swing', durationSeconds: 15 },
      { exerciseId: 'wall-crunch', durationSeconds: 38 },
      { exerciseId: 'wall-angel', durationSeconds: 45 },
    ],
  },
  {
    day: 28,
    exercises: [
      { exerciseId: 'unilateral-wall-slides', durationSeconds: 50 },
      { exerciseId: 'side-leg-swing', durationSeconds: 25 },
      { exerciseId: 'active-calf-stretch', durationSeconds: 35 },
      { exerciseId: 'wall-sit', durationSeconds: 45 },
    ],
  },
];
