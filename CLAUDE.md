# Wall Pilates

28-day wall pilates program for beginners. React 19 + TypeScript + Vite PWA deployed to GitHub Pages.

## Architecture

- **Framework**: React 19, TypeScript, Vite 7 with PWA plugin
- **Deployment**: GitHub Pages via `.github/workflows/deploy.yml` on push to `main`
- **State**: localStorage for progress tracking (`useProgress` hook)
- **Data**: Static exercise/program data in `src/data/` (no backend)

### Key files

- `src/App.tsx` — Root component, manages view state (home/progress) and selected day
- `src/types.ts` — Core types: Exercise, DayExercise, ProgramDay, Progress
- `src/data/program.ts` — 28-day program schedule (Group A odd days, Group B even days)
- `src/data/exercises.ts` — Exercise definitions with descriptions and steps
- `src/hooks/useProgress.ts` — Progress state + localStorage persistence + streak calc
- `src/components/` — DayStrip, DayCard, ExerciseCard, ExerciseDetail, TimerScreen, ProgressScreen, CircularProgress

### Views

- **Home**: Day selector strip + DayCard with exercise list + "Start Workout" button
- **Progress**: Stats (completed/remaining/streak) + 28-day calendar grid + reset
- **Exercise Detail**: Modal overlay with illustration, instructions, video link
- **Timer**: Full-screen workout timer that steps through exercises, marks day complete

## Commands

```bash
npm run dev       # Start dev server (Vite)
npm run build     # TypeScript check + production build
npm run lint      # ESLint
npm run preview   # Preview production build
```

## Pre-commit/push testing

Before every commit and push, run Playwright MCP to verify the app:

1. Start dev server: `npx vite --port 5174 &`
2. Navigate to `http://localhost:5174`
3. Verify: page loads with title "Wall Pilates", no console errors
4. Verify: day strip renders 28 day buttons
5. Verify: clicking an exercise opens the detail modal
6. Verify: "Start Workout" opens the timer screen
7. Verify: progress view shows stats and calendar grid
8. Verify: mobile viewport (375x812) renders correctly
9. Run `npm run build` to confirm production build succeeds

Always test with Playwright MCP before committing and pushing changes.

## Rules

- Base path differs per environment: `/` locally, `/wall-pilates/` on GitHub Pages (handled in `vite.config.ts`)
- Exercise illustrations are inline SVG components in `src/illustrations/`
- Do not modify the 28-day program data without explicit request
- Keep the app fully offline-capable (PWA with service worker)
