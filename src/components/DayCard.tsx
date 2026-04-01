import type { ProgramDay } from '../types';
import { ExerciseCard } from './ExerciseCard';

interface Props {
  programDay: ProgramDay;
  isCompleted: boolean;
  onExerciseClick: (exerciseId: string) => void;
  onStartWorkout: () => void;
}

export function DayCard({ programDay, isCompleted, onExerciseClick, onStartWorkout }: Props) {
  const totalSeconds = programDay.exercises.reduce((sum, e) => sum + e.durationSeconds, 0);
  const totalMins = Math.ceil(totalSeconds / 60);

  return (
    <div className="day-card">
      <div className="day-card-header">
        <div>
          <h2 className="day-card-title">Day {programDay.day}</h2>
          <span className="day-card-meta">
            {programDay.exercises.length} exercises &middot; ~{totalMins} min
          </span>
        </div>
        {isCompleted && (
          <span className="day-card-badge">
            <svg width={16} height={16} viewBox="0 0 16 16" fill="none">
              <path d="M2 8l4 4L14 4" stroke="var(--color-success)" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Done
          </span>
        )}
      </div>

      <div className="day-card-exercises">
        {programDay.exercises.map((de) => (
          <ExerciseCard
            key={de.exerciseId}
            dayExercise={de}
            onClick={() => onExerciseClick(de.exerciseId)}
          />
        ))}
      </div>

      <button className="day-card-start" onClick={onStartWorkout}>
        {isCompleted ? 'Redo Workout' : 'Start Workout'}
      </button>
    </div>
  );
}
