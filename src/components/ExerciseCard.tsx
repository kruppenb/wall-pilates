import { EXERCISES } from '../data/exercises';
import { ILLUSTRATIONS } from '../illustrations/illustrations';
import type { DayExercise } from '../types';

interface Props {
  dayExercise: DayExercise;
  onClick: () => void;
}

export function ExerciseCard({ dayExercise, onClick }: Props) {
  const exercise = EXERCISES[dayExercise.exerciseId];
  const Illustration = ILLUSTRATIONS[dayExercise.exerciseId];
  if (!exercise) return null;

  const mins = Math.floor(dayExercise.durationSeconds / 60);
  const secs = dayExercise.durationSeconds % 60;
  const duration = mins > 0 ? `${mins}:${secs.toString().padStart(2, '0')}` : `${secs}s`;

  return (
    <button className="exercise-card" onClick={onClick}>
      <div className="exercise-card-illustration">
        {Illustration && <Illustration size={56} />}
      </div>
      <div className="exercise-card-info">
        <div className="exercise-card-name">{exercise.name}</div>
        <div className="exercise-card-duration">{duration}</div>
      </div>
      <div className="exercise-card-arrow">
        <svg width={20} height={20} viewBox="0 0 20 20" fill="none">
          <path d="M7 4l6 6-6 6" stroke="var(--color-text-muted)" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </button>
  );
}
