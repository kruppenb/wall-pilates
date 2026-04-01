export interface Exercise {
  id: string;
  name: string;
  description: string;
  steps: string[];
  videoSearchQuery: string;
}

export interface DayExercise {
  exerciseId: string;
  durationSeconds: number;
}

export interface ProgramDay {
  day: number;
  exercises: DayExercise[];
}

export interface Progress {
  completedDays: Record<number, string>; // day number → ISO date string
}
