import type { Progress } from '../types';

interface Props {
  progress: Progress;
  streak: number;
  completedCount: number;
  allComplete: boolean;
  onReset: () => void;
}

export function ProgressScreen({ progress, streak, completedCount, allComplete, onReset }: Props) {
  return (
    <div className="progress-screen">
      <div className="progress-stats">
        <div className="progress-stat">
          <span className="progress-stat-value">{completedCount}</span>
          <span className="progress-stat-label">Completed</span>
        </div>
        <div className="progress-stat">
          <span className="progress-stat-value">{28 - completedCount}</span>
          <span className="progress-stat-label">Remaining</span>
        </div>
        <div className="progress-stat">
          <span className="progress-stat-value">{streak}</span>
          <span className="progress-stat-label">Day Streak</span>
        </div>
      </div>

      {allComplete && (
        <div className="progress-complete-banner">
          Program Complete! You did all 28 days!
        </div>
      )}

      <div className="progress-calendar">
        <div className="progress-calendar-header">
          {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((d, i) => (
            <span key={i} className="progress-calendar-weekday">{d}</span>
          ))}
        </div>
        <div className="progress-calendar-grid">
          {Array.from({ length: 28 }, (_, i) => {
            const day = i + 1;
            const isCompleted = !!progress.completedDays[day];
            return (
              <div
                key={day}
                className={`progress-calendar-day ${isCompleted ? 'completed' : ''}`}
              >
                {isCompleted ? (
                  <svg width={16} height={16} viewBox="0 0 16 16" fill="none">
                    <path d="M2 8l4 4L14 4" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ) : (
                  day
                )}
              </div>
            );
          })}
        </div>
      </div>

      <button className="progress-reset" onClick={onReset}>
        Reset Progress
      </button>
    </div>
  );
}
