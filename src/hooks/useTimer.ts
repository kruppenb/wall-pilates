import { useState, useEffect, useRef, useCallback } from 'react';
import type { DayExercise } from '../types';

export type TimerPhase = 'idle' | 'countdown' | 'exercise' | 'rest' | 'complete';

interface TimerState {
  phase: TimerPhase;
  exerciseIndex: number;
  secondsRemaining: number;
  isPaused: boolean;
}

// Play a short chime using Web Audio API
function playChime(audioCtx: AudioContext) {
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  osc.connect(gain);
  gain.connect(audioCtx.destination);
  osc.type = 'sine';
  osc.frequency.value = 800;
  gain.gain.setValueAtTime(0.3, audioCtx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.3);
  osc.start(audioCtx.currentTime);
  osc.stop(audioCtx.currentTime + 0.3);
}

const COUNTDOWN_SECONDS = 3;
const REST_SECONDS = 10;

export function useTimer(exercises: DayExercise[], onComplete: () => void) {
  const [state, setState] = useState<TimerState>({
    phase: 'idle',
    exerciseIndex: 0,
    secondsRemaining: COUNTDOWN_SECONDS,
    isPaused: false,
  });

  const audioCtxRef = useRef<AudioContext | null>(null);
  const startedAtRef = useRef<number>(0);
  const durationRef = useRef<number>(0);

  // Initialize audio context on first user gesture (start)
  const initAudio = useCallback(() => {
    if (!audioCtxRef.current) {
      audioCtxRef.current = new AudioContext();
    }
  }, []);

  const start = useCallback(() => {
    initAudio();
    durationRef.current = COUNTDOWN_SECONDS;
    startedAtRef.current = Date.now();
    setState({
      phase: 'countdown',
      exerciseIndex: 0,
      secondsRemaining: COUNTDOWN_SECONDS,
      isPaused: false,
    });
  }, [initAudio]);

  const pause = useCallback(() => {
    setState((s) => {
      // Snapshot remaining time based on actual elapsed
      const elapsed = (Date.now() - startedAtRef.current) / 1000;
      const remaining = Math.max(0, Math.ceil(durationRef.current - elapsed));
      durationRef.current = remaining;
      return { ...s, isPaused: true, secondsRemaining: remaining };
    });
  }, []);

  const resume = useCallback(() => {
    startedAtRef.current = Date.now();
    setState((s) => ({ ...s, isPaused: false }));
  }, []);

  const skip = useCallback(() => {
    // Advance to next phase
    const nextIndex = state.exerciseIndex + 1;
    if (nextIndex >= exercises.length) {
      if (audioCtxRef.current) playChime(audioCtxRef.current);
      setState({ phase: 'complete', exerciseIndex: state.exerciseIndex, secondsRemaining: 0, isPaused: false });
      onComplete();
    } else {
      if (audioCtxRef.current) playChime(audioCtxRef.current);
      durationRef.current = REST_SECONDS;
      startedAtRef.current = Date.now();
      setState({ phase: 'rest', exerciseIndex: state.exerciseIndex, secondsRemaining: REST_SECONDS, isPaused: false });
    }
  }, [state.exerciseIndex, exercises.length, onComplete]);

  const reset = useCallback(() => {
    setState({ phase: 'idle', exerciseIndex: 0, secondsRemaining: COUNTDOWN_SECONDS, isPaused: false });
  }, []);

  // Tick interval — uses timestamps for accuracy
  useEffect(() => {
    if (state.isPaused || state.phase === 'idle' || state.phase === 'complete') return;

    const interval = setInterval(() => {
      const elapsed = (Date.now() - startedAtRef.current) / 1000;
      const remaining = Math.max(0, Math.ceil(durationRef.current - elapsed));

      if (remaining <= 0) {
        // Phase transition
        if (state.phase === 'countdown') {
          // Start first exercise
          const dur = exercises[0].durationSeconds;
          durationRef.current = dur;
          startedAtRef.current = Date.now();
          setState({ phase: 'exercise', exerciseIndex: 0, secondsRemaining: dur, isPaused: false });
        } else if (state.phase === 'exercise') {
          if (audioCtxRef.current) playChime(audioCtxRef.current);
          // Vibrate if supported (Android)
          if (navigator.vibrate) navigator.vibrate(200);

          const nextIndex = state.exerciseIndex + 1;
          if (nextIndex >= exercises.length) {
            setState({ phase: 'complete', exerciseIndex: state.exerciseIndex, secondsRemaining: 0, isPaused: false });
            onComplete();
          } else {
            durationRef.current = REST_SECONDS;
            startedAtRef.current = Date.now();
            setState({ phase: 'rest', exerciseIndex: state.exerciseIndex, secondsRemaining: REST_SECONDS, isPaused: false });
          }
        } else if (state.phase === 'rest') {
          const nextIndex = state.exerciseIndex + 1;
          const dur = exercises[nextIndex].durationSeconds;
          durationRef.current = dur;
          startedAtRef.current = Date.now();
          setState({ phase: 'exercise', exerciseIndex: nextIndex, secondsRemaining: dur, isPaused: false });
        }
      } else {
        setState((s) => ({ ...s, secondsRemaining: remaining }));
      }
    }, 250); // Update 4x/sec for smooth countdown

    return () => clearInterval(interval);
  }, [state.phase, state.isPaused, state.exerciseIndex, exercises, onComplete]);

  return { ...state, start, pause, resume, skip, reset };
}
