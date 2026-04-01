import { useState, useCallback } from 'react';
import type { Progress } from '../types';

const STORAGE_KEY = 'wall-pilates-progress';

function loadProgress(): Progress {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch { /* ignore */ }
  return { completedDays: {} };
}

function saveProgress(p: Progress) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(p));
}

function calcStreak(completedDays: Record<number, string>): number {
  // Get unique completion dates sorted descending
  const dates = [...new Set(Object.values(completedDays))].sort().reverse();
  if (dates.length === 0) return 0;

  const today = new Date().toISOString().slice(0, 10);
  const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);

  // Streak is only active if most recent completion is today or yesterday
  if (dates[0] !== today && dates[0] !== yesterday) return 0;

  let streak = 1;
  for (let i = 0; i < dates.length - 1; i++) {
    const curr = new Date(dates[i]).getTime();
    const prev = new Date(dates[i + 1]).getTime();
    if (curr - prev === 86400000) {
      streak++;
    } else {
      break;
    }
  }
  return streak;
}

export function useProgress() {
  const [progress, setProgress] = useState<Progress>(loadProgress);

  const completeDay = useCallback((day: number) => {
    setProgress((prev) => {
      const next: Progress = {
        completedDays: {
          ...prev.completedDays,
          [day]: new Date().toISOString().slice(0, 10),
        },
      };
      saveProgress(next);
      return next;
    });
  }, []);

  const resetProgress = useCallback(() => {
    const empty: Progress = { completedDays: {} };
    saveProgress(empty);
    setProgress(empty);
  }, []);

  const currentDay = (() => {
    for (let d = 1; d <= 28; d++) {
      if (!progress.completedDays[d]) return d;
    }
    return 28; // all done
  })();

  const allComplete = Object.keys(progress.completedDays).length >= 28;
  const streak = calcStreak(progress.completedDays);
  const completedCount = Object.keys(progress.completedDays).length;

  return { progress, completeDay, resetProgress, currentDay, allComplete, streak, completedCount };
}
