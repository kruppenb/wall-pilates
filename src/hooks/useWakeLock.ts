import { useEffect, useRef } from 'react';

export function useWakeLock(active: boolean) {
  const wakeLockRef = useRef<WakeLockSentinel | null>(null);

  useEffect(() => {
    if (!active) {
      wakeLockRef.current?.release();
      wakeLockRef.current = null;
      return;
    }

    let cancelled = false;

    async function request() {
      try {
        if ('wakeLock' in navigator) {
          const lock = await navigator.wakeLock.request('screen');
          if (cancelled) {
            lock.release();
          } else {
            wakeLockRef.current = lock;
          }
        }
      } catch {
        // Wake Lock not supported or permission denied — silently ignore
      }
    }

    request();

    return () => {
      cancelled = true;
      wakeLockRef.current?.release();
      wakeLockRef.current = null;
    };
  }, [active]);
}
