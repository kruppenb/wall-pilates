import { useState, useCallback } from 'react';
import { DAYS } from './data/program';
import { useProgress } from './hooks/useProgress';
import { DayStrip } from './components/DayStrip';
import { DayCard } from './components/DayCard';
import { ExerciseDetail } from './components/ExerciseDetail';
import { TimerScreen } from './components/TimerScreen';
import { ProgressScreen } from './components/ProgressScreen';
import './App.css';

type View = 'home' | 'progress';

function App() {
  const { progress, completeDay, resetProgress, currentDay, allComplete, streak, completedCount } = useProgress();
  const [view, setView] = useState<View>('home');
  const [selectedDay, setSelectedDay] = useState(currentDay);
  const [detailExerciseId, setDetailExerciseId] = useState<string | null>(null);
  const [timerDay, setTimerDay] = useState<number | null>(null);

  const programDay = DAYS.find((d) => d.day === selectedDay);
  const timerProgramDay = timerDay != null ? DAYS.find((d) => d.day === timerDay) : null;

  const handleStartWorkout = useCallback(() => {
    setTimerDay(selectedDay);
  }, [selectedDay]);

  const handleTimerComplete = useCallback(() => {
    if (timerDay != null) {
      completeDay(timerDay);
    }
  }, [timerDay, completeDay]);

  const handleTimerClose = useCallback(() => {
    setTimerDay(null);
  }, []);

  return (
    <div className="app-shell">
      <header className="app-header">
        <h1 className="app-title">Wall Pilates</h1>
        <button
          className={`app-header-toggle ${view === 'progress' ? 'active' : ''}`}
          onClick={() => setView(view === 'home' ? 'progress' : 'home')}
          aria-label={view === 'home' ? 'View progress' : 'Back to home'}
        >
          {view === 'home' ? (
            <svg width={24} height={24} viewBox="0 0 24 24" fill="none">
              <rect x={3} y={3} width={7} height={7} rx={1.5} stroke="currentColor" strokeWidth={1.5} />
              <rect x={3} y={14} width={7} height={7} rx={1.5} stroke="currentColor" strokeWidth={1.5} />
              <rect x={14} y={3} width={7} height={7} rx={1.5} stroke="currentColor" strokeWidth={1.5} />
              <rect x={14} y={14} width={7} height={7} rx={1.5} stroke="currentColor" strokeWidth={1.5} />
            </svg>
          ) : (
            <svg width={24} height={24} viewBox="0 0 24 24" fill="none">
              <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </button>
      </header>

      {streak > 0 && view === 'home' && (
        <div className="streak-banner">
          <span className="streak-fire">&#x1F525;</span>
          <span>{streak} day streak!</span>
        </div>
      )}

      {allComplete && view === 'home' && (
        <div className="complete-banner">
          &#x1F389; Program Complete! You did all 28 days!
        </div>
      )}

      <main className="app-main">
        {view === 'home' ? (
          <>
            <DayStrip
              selectedDay={selectedDay}
              currentDay={currentDay}
              progress={progress}
              onSelect={setSelectedDay}
            />
            {programDay && (
              <DayCard
                programDay={programDay}
                isCompleted={!!progress.completedDays[selectedDay]}
                onExerciseClick={setDetailExerciseId}
                onStartWorkout={handleStartWorkout}
              />
            )}
          </>
        ) : (
          <ProgressScreen
            progress={progress}
            streak={streak}
            completedCount={completedCount}
            allComplete={allComplete}
            onReset={resetProgress}
          />
        )}
      </main>

      {detailExerciseId && (
        <ExerciseDetail
          exerciseId={detailExerciseId}
          onClose={() => setDetailExerciseId(null)}
        />
      )}

      {timerProgramDay && (
        <TimerScreen
          programDay={timerProgramDay}
          onComplete={handleTimerComplete}
          onClose={handleTimerClose}
        />
      )}
    </div>
  );
}

export default App;
