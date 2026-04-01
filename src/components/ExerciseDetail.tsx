import { EXERCISES } from '../data/exercises';
import { ILLUSTRATIONS } from '../illustrations/illustrations';

interface Props {
  exerciseId: string;
  onClose: () => void;
}

export function ExerciseDetail({ exerciseId, onClose }: Props) {
  const exercise = EXERCISES[exerciseId];
  const Illustration = ILLUSTRATIONS[exerciseId];
  if (!exercise) return null;

  const videoUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(exercise.videoSearchQuery)}`;

  return (
    <div className="overlay open" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="exercise-detail">
        <button className="exercise-detail-close" onClick={onClose} aria-label="Close">
          <svg width={24} height={24} viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6l12 12" stroke="var(--color-text)" strokeWidth={2} strokeLinecap="round" />
          </svg>
        </button>

        <div className="exercise-detail-illustration">
          {Illustration && <Illustration size={180} />}
        </div>

        <h2 className="exercise-detail-name">{exercise.name}</h2>
        <p className="exercise-detail-desc">{exercise.description}</p>

        <div className="exercise-detail-steps">
          <h3>How to do it</h3>
          <ol>
            {exercise.steps.map((step, i) => (
              <li key={i}>{step}</li>
            ))}
          </ol>
        </div>

        <a
          className="exercise-detail-video"
          href={videoUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg width={20} height={20} viewBox="0 0 20 20" fill="none">
            <rect x={2} y={4} width={16} height={12} rx={2} stroke="currentColor" strokeWidth={1.5} />
            <path d="M8 8l4 2.5L8 13V8z" fill="currentColor" />
          </svg>
          Watch Video
        </a>

        <p className="exercise-detail-disclaimer">
          If you feel any pain, stop immediately. Consult a doctor before starting any exercise program.
        </p>

        <button className="exercise-detail-got-it" onClick={onClose}>
          Got it
        </button>
      </div>
    </div>
  );
}
