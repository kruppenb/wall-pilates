import type { ProgramDay } from '../types';
import { EXERCISES } from '../data/exercises';
import { ILLUSTRATIONS } from '../illustrations/illustrations';
import { CircularProgress } from './CircularProgress';
import { useTimer } from '../hooks/useTimer';
import { useWakeLock } from '../hooks/useWakeLock';

interface Props {
  programDay: ProgramDay;
  onComplete: () => void;
  onClose: () => void;
}

export function TimerScreen({ programDay, onComplete, onClose }: Props) {
  const timer = useTimer(programDay.exercises, onComplete);
  const isActive = timer.phase !== 'idle' && timer.phase !== 'complete' && !timer.isPaused;
  useWakeLock(isActive);

  const currentExercise = programDay.exercises[timer.exerciseIndex];
  const exercise = currentExercise ? EXERCISES[currentExercise.exerciseId] : null;
  const Illustration = currentExercise ? ILLUSTRATIONS[currentExercise.exerciseId] : null;
  const nextExercise = programDay.exercises[timer.exerciseIndex + 1];
  const nextExerciseName = nextExercise ? EXERCISES[nextExercise.exerciseId]?.name : null;

  const totalSeconds = (() => {
    if (timer.phase === 'countdown') return 3;
    if (timer.phase === 'exercise') return currentExercise?.durationSeconds ?? 0;
    if (timer.phase === 'rest') return 10;
    return 0;
  })();

  return (
    <div className="timer-screen">
      <div className="timer-screen-header">
        <button className="timer-screen-close" onClick={onClose} aria-label="Close">
          <svg width={24} height={24} viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6l12 12" stroke="white" strokeWidth={2} strokeLinecap="round" />
          </svg>
        </button>
        <span className="timer-screen-progress">
          {timer.exerciseIndex + 1} / {programDay.exercises.length}
        </span>
      </div>

      {timer.phase === 'idle' && (
        <div className="timer-screen-content">
          <h2>Day {programDay.day}</h2>
          <p className="timer-screen-subtitle">{programDay.exercises.length} exercises</p>
          {Illustration && <Illustration size={160} />}
          <button className="timer-screen-action" onClick={timer.start}>
            Start
          </button>
        </div>
      )}

      {timer.phase === 'countdown' && (
        <div className="timer-screen-content">
          <p className="timer-screen-label">Get Ready</p>
          {Illustration && <Illustration size={140} />}
          <h3 className="timer-screen-exercise-name">{exercise?.name}</h3>
          <div className="timer-screen-countdown">{timer.secondsRemaining}</div>
        </div>
      )}

      {timer.phase === 'exercise' && (
        <div className="timer-screen-content">
          <p className="timer-screen-label">Exercise</p>
          {Illustration && <Illustration size={140} />}
          <h3 className="timer-screen-exercise-name">{exercise?.name}</h3>
          <CircularProgress seconds={timer.secondsRemaining} totalSeconds={totalSeconds} />
          <div className="timer-screen-controls">
            {timer.isPaused ? (
              <button className="timer-screen-action" onClick={timer.resume}>Resume</button>
            ) : (
              <button className="timer-screen-action secondary" onClick={timer.pause}>Pause</button>
            )}
            <button className="timer-screen-skip" onClick={timer.skip}>Skip</button>
          </div>
        </div>
      )}

      {timer.phase === 'rest' && (
        <div className="timer-screen-content">
          <p className="timer-screen-label">Rest</p>
          <CircularProgress seconds={timer.secondsRemaining} totalSeconds={10} size={160} />
          {nextExerciseName && (
            <p className="timer-screen-next">Next: {nextExerciseName}</p>
          )}
        </div>
      )}

      {timer.phase === 'complete' && (
        <div className="timer-screen-content">
          <div className="timer-screen-celebration">
            <div className="timer-screen-checkmark">
              <svg width={80} height={80} viewBox="0 0 80 80" fill="none">
                <circle cx={40} cy={40} r={36} fill="var(--color-success-bg)" />
                <path d="M24 40l10 10L56 30" stroke="var(--color-success)" strokeWidth={4} strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h2>Day {programDay.day} Complete!</h2>
            <p className="timer-screen-subtitle">Great work! Keep it up!</p>
          </div>
          <button className="timer-screen-action" onClick={onClose}>Done</button>
        </div>
      )}
    </div>
  );
}
