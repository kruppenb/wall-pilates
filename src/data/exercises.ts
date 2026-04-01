import type { Exercise } from '../types';

export const EXERCISES: Record<string, Exercise> = {
  'supported-rolldown': {
    id: 'supported-rolldown',
    name: 'Supported Rolldown',
    description: 'Stand with your back against the wall and slowly roll your spine forward, one vertebra at a time, reaching your hands toward the floor.',
    steps: [
      'Stand with your back flat against the wall, feet hip-width apart, a foot away from the wall',
      'Tuck your chin and slowly peel your spine off the wall from top to bottom',
      'Let your arms hang heavy as you roll down toward the floor',
      'Pause at the bottom, then slowly roll back up, pressing each vertebra into the wall',
    ],
    videoSearchQuery: 'wall pilates supported rolldown beginner',
  },
  'wall-leg-swing': {
    id: 'wall-leg-swing',
    name: 'Wall Leg Swing',
    description: 'Stand sideways to the wall with one hand for balance, and swing your outer leg forward and back in a controlled motion.',
    steps: [
      'Stand sideways to the wall, place your inside hand on the wall for balance',
      'Shift your weight to the leg closest to the wall',
      'Swing your outer leg forward and back in a smooth, controlled arc',
      'Keep your torso tall and core engaged throughout the swing',
    ],
    videoSearchQuery: 'wall pilates leg swing exercise beginner',
  },
  'side-leg-swing': {
    id: 'side-leg-swing',
    name: 'Side Leg Swing',
    description: 'Face the wall with both hands on it for balance, and swing one leg out to the side and back across your body.',
    steps: [
      'Face the wall and place both hands on it at shoulder height',
      'Shift your weight onto one leg',
      'Swing the other leg out to the side, then across the front of your body',
      'Keep hips level and core tight — the movement comes from the hip',
    ],
    videoSearchQuery: 'wall pilates side leg swing beginner',
  },
  'wall-crunch': {
    id: 'wall-crunch',
    name: 'Wall Crunch',
    description: 'Lie on your back with your feet flat on the wall, knees at 90 degrees, and perform crunches lifting your shoulders off the floor.',
    steps: [
      'Lie on your back with your butt close to the wall',
      'Place your feet flat on the wall so your knees are at 90 degrees',
      'Place your hands behind your head, elbows wide',
      'Lift your shoulders off the floor by engaging your abs, then slowly lower back down',
    ],
    videoSearchQuery: 'wall pilates wall crunch exercise beginner',
  },
  'wall-sit': {
    id: 'wall-sit',
    name: 'Wall Sit',
    description: 'Slide your back down the wall until your thighs are parallel to the floor, as if sitting in an invisible chair. Hold the position.',
    steps: [
      'Stand with your back flat against the wall, feet shoulder-width apart',
      'Slide down the wall until your thighs are parallel to the floor',
      'Keep your knees directly above your ankles, not past your toes',
      'Press your lower back into the wall and hold — breathe steadily',
    ],
    videoSearchQuery: 'wall sit exercise proper form beginner',
  },
  'unilateral-wall-slides': {
    id: 'unilateral-wall-slides',
    name: 'Unilateral Wall Slides',
    description: 'Stand with your back against the wall and slide one arm up overhead while keeping your back and arm pressed into the wall.',
    steps: [
      'Stand with your back flat against the wall, feet slightly away from it',
      'Press both arms into the wall at shoulder height, elbows bent at 90 degrees',
      'Slowly slide one arm up overhead while keeping it pressed against the wall',
      'Return to the start position and repeat on the other side',
    ],
    videoSearchQuery: 'wall slides exercise unilateral beginner',
  },
  'active-calf-stretch': {
    id: 'active-calf-stretch',
    name: 'Active Calf Stretch',
    description: 'Face the wall in a lunge position with your back heel pressing into the ground, actively stretching your calf muscle.',
    steps: [
      'Face the wall and place both hands on it at chest height',
      'Step one foot back into a lunge position, keeping the back leg straight',
      'Press your back heel firmly into the ground',
      'Lean gently into the wall to deepen the stretch — hold, then switch sides',
    ],
    videoSearchQuery: 'wall calf stretch exercise beginner pilates',
  },
  'wall-angel': {
    id: 'wall-angel',
    name: 'Wall Angel',
    description: 'Stand with your back against the wall, arms in a "goal post" position, and slide them up and down like making a snow angel.',
    steps: [
      'Stand with your back flat against the wall, feet a few inches away',
      'Raise your arms to a "goal post" position — elbows at 90 degrees, backs of hands on the wall',
      'Slowly slide your arms up overhead, keeping your wrists and elbows touching the wall',
      'Slide back down to the goal post position — move slowly and feel the squeeze between your shoulder blades',
    ],
    videoSearchQuery: 'wall angel exercise proper form beginner',
  },
};
