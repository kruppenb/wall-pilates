import { useEffect, useRef } from 'react';
import type { Progress } from '../types';

interface Props {
  selectedDay: number;
  currentDay: number;
  progress: Progress;
  onSelect: (day: number) => void;
}

export function DayStrip({ selectedDay, currentDay, progress, onSelect }: Props) {
  const stripRef = useRef<HTMLDivElement>(null);
  const currentRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    currentRef.current?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
  }, []);

  return (
    <div className="day-strip" ref={stripRef}>
      {Array.from({ length: 28 }, (_, i) => {
        const day = i + 1;
        const isCompleted = !!progress.completedDays[day];
        const isCurrent = day === currentDay;
        const isSelected = day === selectedDay;

        return (
          <button
            key={day}
            ref={isCurrent ? currentRef : undefined}
            className={`day-strip-item ${isSelected ? 'selected' : ''} ${isCompleted ? 'completed' : ''} ${isCurrent && !isCompleted ? 'current' : ''}`}
            onClick={() => onSelect(day)}
          >
            {isCompleted ? (
              <svg width={14} height={14} viewBox="0 0 14 14" fill="none">
                <path d="M2 7l3.5 3.5L12 4" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            ) : (
              day
            )}
          </button>
        );
      })}
    </div>
  );
}
