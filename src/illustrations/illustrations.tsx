// Improved SVG illustration components for all 8 wall pilates exercises.
// Style: bold, clear stick-figure with rounded limbs. Designed to read well at 56px.
// Wall shown as a thick gray slab. Figure uses high-contrast rose on light skin.

interface Props {
  className?: string;
  size?: number;
}

const SKIN = '#f0c4aa';
const OUTFIT = '#be185d';
const WALL = '#c8c4c0';
const WALL_EDGE = '#b0ada8';
const HAIR = '#44403c';
const SHOE = '#881337';
const GUIDE = '#e8608a';

function Head({ cx, cy, r = 14 }: { cx: number; cy: number; r?: number }) {
  return (
    <g>
      <circle cx={cx} cy={cy} r={r} fill={SKIN} />
      <path
        d={`M${cx - r + 2},${cy - 1} Q${cx - r + 1},${cy - r - 3} ${cx},${cy - r - 3} Q${cx + r - 1},${cy - r - 3} ${cx + r - 2},${cy - 1}`}
        fill={HAIR}
      />
    </g>
  );
}

function WallSlab({ x, y = 10, width = 24, height = 260 }: { x: number; y?: number; width?: number; height?: number }) {
  return (
    <g>
      <rect x={x} y={y} width={width} height={height} fill={WALL} rx={3} />
      <rect x={x} y={y} width={4} height={height} fill={WALL_EDGE} rx={2} />
    </g>
  );
}

function Shoe({ cx, cy, angle = 0 }: { cx: number; cy: number; angle?: number }) {
  return <ellipse cx={cx} cy={cy} rx={14} ry={7} fill={SHOE} transform={angle ? `rotate(${angle},${cx},${cy})` : undefined} />;
}

export function SupportedRolldown({ className, size = 240 }: Props) {
  return (
    <svg viewBox="0 0 200 280" width={size} height={(size * 280) / 200} className={className} role="img" aria-label="Person doing a supported rolldown: standing with back to wall, curling spine forward">
      <WallSlab x={148} />
      {/* Legs — standing straight, feet away from wall */}
      <line x1={92} y1={200} x2={88} y2={252} stroke={SKIN} strokeWidth={12} strokeLinecap="round" />
      <line x1={108} y1={200} x2={112} y2={252} stroke={SKIN} strokeWidth={12} strokeLinecap="round" />
      <Shoe cx={82} cy={258} />
      <Shoe cx={118} cy={258} />
      {/* Torso — curving forward from hips */}
      <path d="M100,200 Q96,172 82,145 Q72,128 65,112" fill="none" stroke={OUTFIT} strokeWidth={26} strokeLinecap="round" />
      {/* Arms dangling */}
      <line x1={66} y1={118} x2={55} y2={162} stroke={SKIN} strokeWidth={9} strokeLinecap="round" />
      <line x1={72} y1={120} x2={62} y2={164} stroke={SKIN} strokeWidth={9} strokeLinecap="round" />
      {/* Hands */}
      <circle cx={53} cy={164} r={6} fill={SKIN} />
      <circle cx={60} cy={166} r={6} fill={SKIN} />
      <Head cx={60} cy={98} />
      {/* Guide: hips to wall */}
      <line x1={125} y1={198} x2={148} y2={198} stroke={GUIDE} strokeWidth={2} strokeDasharray="5,4" opacity={0.7} />
      {/* Arrow pointing down showing roll direction */}
      <path d="M42,120 C38,140 42,155 50,165" fill="none" stroke={GUIDE} strokeWidth={2.5} opacity={0.6} />
      <polygon points="48,168 55,162 44,162" fill={GUIDE} opacity={0.6} />
    </svg>
  );
}

export function WallLegSwing({ className, size = 240 }: Props) {
  return (
    <svg viewBox="0 0 200 280" width={size} height={(size * 280) / 200} className={className} role="img" aria-label="Person doing a wall leg swing: standing sideways to wall, swinging leg forward and back">
      <WallSlab x={160} />
      {/* Standing leg */}
      <line x1={100} y1={178} x2={100} y2={248} stroke={SKIN} strokeWidth={12} strokeLinecap="round" />
      <Shoe cx={100} cy={256} />
      {/* Swinging leg — forward position */}
      <line x1={92} y1={178} x2={52} y2={215} stroke={SKIN} strokeWidth={12} strokeLinecap="round" />
      <Shoe cx={44} cy={218} angle={-30} />
      {/* Swing arc */}
      <path d="M52,220 Q75,180 92,178 Q82,230 58,260" fill="none" stroke={GUIDE} strokeWidth={2} strokeDasharray="5,4" opacity={0.5} />
      {/* Arrow showing swing direction */}
      <polygon points="50,215 40,225 55,224" fill={GUIDE} opacity={0.5} />
      {/* Torso */}
      <rect x={82} y={96} width={34} height={82} rx={14} fill={OUTFIT} />
      {/* Hand on wall for balance */}
      <line x1={116} y1={112} x2={158} y2={108} stroke={SKIN} strokeWidth={9} strokeLinecap="round" />
      <circle cx={160} cy={108} r={6} fill={SKIN} />
      {/* Other arm relaxed */}
      <line x1={84} y1={112} x2={68} y2={150} stroke={SKIN} strokeWidth={9} strokeLinecap="round" />
      <Head cx={99} cy={80} />
    </svg>
  );
}

export function SideLegSwing({ className, size = 240 }: Props) {
  return (
    <svg viewBox="0 0 200 280" width={size} height={(size * 280) / 200} className={className} role="img" aria-label="Person doing a side leg swing: facing wall, swinging leg out to the side">
      <WallSlab x={0} y={0} width={200} height={24} />
      {/* Hands on wall */}
      <line x1={80} y1={82} x2={80} y2={30} stroke={SKIN} strokeWidth={9} strokeLinecap="round" />
      <line x1={120} y1={82} x2={120} y2={30} stroke={SKIN} strokeWidth={9} strokeLinecap="round" />
      <circle cx={80} cy={28} r={6} fill={SKIN} />
      <circle cx={120} cy={28} r={6} fill={SKIN} />
      {/* Torso */}
      <rect x={80} y={82} width={40} height={80} rx={16} fill={OUTFIT} />
      <Head cx={100} cy={66} />
      {/* Standing leg */}
      <line x1={92} y1={162} x2={92} y2={245} stroke={SKIN} strokeWidth={12} strokeLinecap="round" />
      <Shoe cx={92} cy={253} />
      {/* Swinging leg — out to side */}
      <line x1={108} y1={162} x2={168} y2={200} stroke={SKIN} strokeWidth={12} strokeLinecap="round" />
      <Shoe cx={174} cy={204} angle={35} />
      {/* Swing arc */}
      <path d="M168,200 Q140,175 108,162 Q135,218 165,248" fill="none" stroke={GUIDE} strokeWidth={2} strokeDasharray="5,4" opacity={0.5} />
      <polygon points="170,197 178,205 172,208" fill={GUIDE} opacity={0.5} />
    </svg>
  );
}

export function WallCrunch({ className, size = 240 }: Props) {
  return (
    <svg viewBox="0 0 200 280" width={size} height={(size * 280) / 200} className={className} role="img" aria-label="Person doing a wall crunch: lying on back with feet on wall, crunching up">
      <WallSlab x={162} y={80} height={190} />
      {/* Floor */}
      <line x1={0} y1={248} x2={165} y2={248} stroke={WALL} strokeWidth={3} />
      {/* Upper legs — angled up to wall */}
      <line x1={78} y1={212} x2={118} y2={165} stroke={SKIN} strokeWidth={12} strokeLinecap="round" />
      <line x1={90} y1={212} x2={130} y2={165} stroke={SKIN} strokeWidth={12} strokeLinecap="round" />
      {/* Lower legs — feet on wall */}
      <line x1={118} y1={165} x2={158} y2={140} stroke={SKIN} strokeWidth={12} strokeLinecap="round" />
      <line x1={130} y1={165} x2={162} y2={148} stroke={SKIN} strokeWidth={12} strokeLinecap="round" />
      {/* Feet on wall */}
      <ellipse cx={162} cy={137} rx={9} ry={12} fill={SHOE} />
      <ellipse cx={165} cy={147} rx={9} ry={12} fill={SHOE} />
      {/* Torso — crunching upward */}
      <path d="M84,212 Q62,212 46,194 Q36,180 30,168" fill="none" stroke={OUTFIT} strokeWidth={28} strokeLinecap="round" />
      {/* Arms behind head */}
      <line x1={30} y1={170} x2={20} y2={152} stroke={SKIN} strokeWidth={8} strokeLinecap="round" />
      <line x1={34} y1={172} x2={42} y2={156} stroke={SKIN} strokeWidth={8} strokeLinecap="round" />
      <Head cx={28} cy={156} r={12} />
      {/* Crunch direction arrow */}
      <path d="M50,230 C38,220 30,206 28,190" fill="none" stroke={GUIDE} strokeWidth={2.5} opacity={0.6} />
      <polygon points="26,192 24,182 32,188" fill={GUIDE} opacity={0.6} />
      {/* 90° label at knees */}
      <path d="M108,170 L108,160 L98,160" fill="none" stroke={GUIDE} strokeWidth={2} opacity={0.5} />
    </svg>
  );
}

export function WallSit({ className, size = 240 }: Props) {
  return (
    <svg viewBox="0 0 200 280" width={size} height={(size * 280) / 200} className={className} role="img" aria-label="Person doing a wall sit: back flat against wall, thighs parallel to floor, knees at 90 degrees">
      <WallSlab x={138} />
      {/* Torso — back flat against wall */}
      <rect x={108} y={72} width={32} height={78} rx={14} fill={OUTFIT} />
      <Head cx={124} cy={58} />
      {/* Arms at sides */}
      <line x1={110} y1={92} x2={98} y2={138} stroke={SKIN} strokeWidth={8} strokeLinecap="round" />
      <line x1={138} y1={92} x2={138} y2={138} stroke={SKIN} strokeWidth={8} strokeLinecap="round" />
      {/* Upper legs — horizontal (thighs parallel to floor) */}
      <line x1={118} y1={150} x2={72} y2={152} stroke={SKIN} strokeWidth={13} strokeLinecap="round" />
      <line x1={128} y1={150} x2={82} y2={152} stroke={SKIN} strokeWidth={13} strokeLinecap="round" />
      {/* Lower legs — vertical */}
      <line x1={72} y1={152} x2={70} y2={238} stroke={SKIN} strokeWidth={12} strokeLinecap="round" />
      <line x1={82} y1={152} x2={84} y2={238} stroke={SKIN} strokeWidth={12} strokeLinecap="round" />
      <Shoe cx={64} cy={246} />
      <Shoe cx={90} cy={246} />
      {/* 90° angle indicators */}
      <path d="M92,152 L92,140 L80,140" fill="none" stroke={GUIDE} strokeWidth={2} opacity={0.6} />
      {/* "90°" text label */}
      <text x={82} y={136} fill={GUIDE} fontSize={12} fontWeight="bold" opacity={0.6}>90°</text>
    </svg>
  );
}

export function UnilateralWallSlides({ className, size = 240 }: Props) {
  return (
    <svg viewBox="0 0 200 280" width={size} height={(size * 280) / 200} className={className} role="img" aria-label="Person doing unilateral wall slides: back against wall, sliding one arm up overhead while the other stays at 90 degrees">
      <WallSlab x={138} />
      {/* Torso */}
      <rect x={104} y={88} width={36} height={80} rx={14} fill={OUTFIT} />
      <Head cx={122} cy={72} />
      {/* Left arm — resting at 90° */}
      <line x1={106} y1={104} x2={72} y2={104} stroke={SKIN} strokeWidth={9} strokeLinecap="round" />
      <line x1={72} y1={104} x2={72} y2={74} stroke={SKIN} strokeWidth={9} strokeLinecap="round" />
      <circle cx={72} cy={72} r={6} fill={SKIN} />
      {/* Right arm — sliding UP along wall */}
      <line x1={136} y1={98} x2={140} y2={62} stroke={SKIN} strokeWidth={9} strokeLinecap="round" />
      <line x1={140} y1={62} x2={140} y2={28} stroke={SKIN} strokeWidth={9} strokeLinecap="round" />
      <circle cx={140} cy={26} r={6} fill={SKIN} />
      {/* Slide arrow */}
      <path d="M152,58 L152,30" fill="none" stroke={GUIDE} strokeWidth={2.5} opacity={0.7} />
      <polygon points="152,28 147,38 157,38" fill={GUIDE} opacity={0.7} />
      {/* Legs */}
      <line x1={112} y1={168} x2={108} y2={248} stroke={SKIN} strokeWidth={12} strokeLinecap="round" />
      <line x1={128} y1={168} x2={132} y2={248} stroke={SKIN} strokeWidth={12} strokeLinecap="round" />
      <Shoe cx={102} cy={255} />
      <Shoe cx={138} cy={255} />
    </svg>
  );
}

export function ActiveCalfStretch({ className, size = 240 }: Props) {
  return (
    <svg viewBox="0 0 200 280" width={size} height={(size * 280) / 200} className={className} role="img" aria-label="Person doing an active calf stretch: leaning into wall in a lunge, pressing back heel into the floor">
      <WallSlab x={0} y={0} width={24} height={280} />
      {/* Hands pressing wall */}
      <line x1={60} y1={100} x2={28} y2={92} stroke={SKIN} strokeWidth={9} strokeLinecap="round" />
      <line x1={60} y1={118} x2={28} y2={108} stroke={SKIN} strokeWidth={9} strokeLinecap="round" />
      <circle cx={26} cy={90} r={6} fill={SKIN} />
      <circle cx={26} cy={106} r={6} fill={SKIN} />
      {/* Torso — leaning forward */}
      <path d="M80,158 Q70,132 58,108" fill="none" stroke={OUTFIT} strokeWidth={28} strokeLinecap="round" />
      <Head cx={54} cy={90} />
      {/* Front leg — bent (lunge) */}
      <line x1={74} y1={158} x2={58} y2={212} stroke={SKIN} strokeWidth={12} strokeLinecap="round" />
      <line x1={58} y1={212} x2={52} y2={254} stroke={SKIN} strokeWidth={12} strokeLinecap="round" />
      <Shoe cx={46} cy={260} />
      {/* Back leg — straight */}
      <line x1={88} y1={158} x2={148} y2={218} stroke={SKIN} strokeWidth={12} strokeLinecap="round" />
      <line x1={148} y1={218} x2={155} y2={254} stroke={SKIN} strokeWidth={12} strokeLinecap="round" />
      <Shoe cx={152} cy={260} />
      {/* Heel press indicator — arrow pushing heel down */}
      <path d="M170,240 L170,256" fill="none" stroke={GUIDE} strokeWidth={2.5} opacity={0.7} />
      <polygon points="170,258 165,250 175,250" fill={GUIDE} opacity={0.7} />
      {/* Floor indicator under heel */}
      <line x1={140} y1={266} x2={170} y2={266} stroke={GUIDE} strokeWidth={2} opacity={0.5} />
    </svg>
  );
}

export function WallAngel({ className, size = 240 }: Props) {
  return (
    <svg viewBox="0 0 200 280" width={size} height={(size * 280) / 200} className={className} role="img" aria-label="Person doing a wall angel: back against wall, arms in goal post position sliding up and down like a snow angel">
      <WallSlab x={138} />
      {/* Torso */}
      <rect x={104} y={88} width={36} height={80} rx={14} fill={OUTFIT} />
      <Head cx={122} cy={72} />
      {/* Arms in "goal post" — pressed against wall */}
      {/* Left arm */}
      <line x1={106} y1={100} x2={78} y2={100} stroke={SKIN} strokeWidth={9} strokeLinecap="round" />
      <line x1={78} y1={100} x2={78} y2={58} stroke={SKIN} strokeWidth={9} strokeLinecap="round" />
      <circle cx={78} cy={56} r={6} fill={SKIN} />
      {/* Right arm */}
      <line x1={136} y1={100} x2={140} y2={100} stroke={SKIN} strokeWidth={9} strokeLinecap="round" />
      <line x1={140} y1={100} x2={140} y2={58} stroke={SKIN} strokeWidth={9} strokeLinecap="round" />
      <circle cx={140} cy={56} r={6} fill={SKIN} />
      {/* Ghost arms — extended up (showing slide destination) */}
      <line x1={78} y1={56} x2={78} y2={25} stroke={SKIN} strokeWidth={7} strokeLinecap="round" opacity={0.25} />
      <line x1={140} y1={56} x2={140} y2={25} stroke={SKIN} strokeWidth={7} strokeLinecap="round" opacity={0.25} />
      <circle cx={78} cy={23} r={5} fill={SKIN} opacity={0.25} />
      <circle cx={140} cy={23} r={5} fill={SKIN} opacity={0.25} />
      {/* Slide arrows */}
      <path d="M68,56 L68,28" fill="none" stroke={GUIDE} strokeWidth={2.5} opacity={0.6} />
      <polygon points="68,26 63,36 73,36" fill={GUIDE} opacity={0.6} />
      <path d="M152,56 L152,28" fill="none" stroke={GUIDE} strokeWidth={2.5} opacity={0.6} />
      <polygon points="152,26 147,36 157,36" fill={GUIDE} opacity={0.6} />
      {/* Legs */}
      <line x1={112} y1={168} x2={108} y2={248} stroke={SKIN} strokeWidth={12} strokeLinecap="round" />
      <line x1={128} y1={168} x2={132} y2={248} stroke={SKIN} strokeWidth={12} strokeLinecap="round" />
      <Shoe cx={102} cy={255} />
      <Shoe cx={138} cy={255} />
    </svg>
  );
}

// Generated image filenames (served from public/illustrations/)
const GENERATED_IMAGES: Record<string, string> = {
  'supported-rolldown': 'supported-rolldown.jpg',
  'wall-leg-swing': 'wall-leg-swing.jpg',
  'side-leg-swing': 'side-leg-swing.jpg',
  'wall-crunch': 'wall-crunch.jpg',
  'wall-sit': 'wall-sit.jpg',
  'unilateral-wall-slides': 'unilateral-wall-slides.jpg',
  'active-calf-stretch': 'active-calf-stretch.jpg',
  'wall-angel': 'wall-angel.jpg',
};

function makeImageComponent(filename: string, alt: string) {
  return function GeneratedIllustration({ className, size = 240 }: Props) {
    const src = `${import.meta.env.BASE_URL}illustrations/${filename}`;
    return (
      <img
        src={src}
        alt={alt}
        className={className}
        width={size}
        height={size}
        style={{ objectFit: 'contain', borderRadius: 12 }}
      />
    );
  };
}

// SVG fallbacks (kept for exercises without generated images)
const SVG_ILLUSTRATIONS: Record<string, React.ComponentType<Props>> = {
  'supported-rolldown': SupportedRolldown,
  'wall-leg-swing': WallLegSwing,
  'side-leg-swing': SideLegSwing,
  'wall-crunch': WallCrunch,
  'wall-sit': WallSit,
  'unilateral-wall-slides': UnilateralWallSlides,
  'active-calf-stretch': ActiveCalfStretch,
  'wall-angel': WallAngel,
};

// Map exercise IDs to illustration components (prefer generated images)
export const ILLUSTRATIONS: Record<string, React.ComponentType<Props>> = Object.fromEntries(
  Object.entries(SVG_ILLUSTRATIONS).map(([id, SvgComponent]) => {
    const filename = GENERATED_IMAGES[id];
    if (filename) {
      const name = id.split('-').map(w => w[0].toUpperCase() + w.slice(1)).join(' ');
      return [id, makeImageComponent(filename, `Person doing ${name}`)];
    }
    return [id, SvgComponent];
  })
);
