import sharp from 'sharp';

const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <!-- Background -->
  <rect width="512" height="512" rx="100" fill="#be185d"/>

  <!-- Face -->
  <circle cx="256" cy="255" r="145" fill="#f5d0b0"/>

  <!-- Blonde hair - back volume -->
  <ellipse cx="256" cy="200" rx="155" ry="130" fill="#f0c040"/>

  <!-- Hair top/bangs -->
  <path d="M101,215 Q100,90 256,80 Q412,90 411,215" fill="#f0c040"/>
  <path d="M101,215 Q115,170 170,180 Q185,130 256,125 Q327,130 342,180 Q397,170 411,215"
        fill="#e8b030"/>

  <!-- Ponytail -->
  <path d="M390,160 Q440,130 445,220 Q445,300 400,330"
        fill="#f0c040" stroke="none"/>
  <path d="M400,330 Q435,290 438,220 Q438,150 395,150"
        fill="none" stroke="#daa020" stroke-width="6" opacity="0.4"/>
  <!-- Ponytail strand details -->
  <path d="M405,180 Q430,200 425,260"
        fill="none" stroke="#daa020" stroke-width="4" opacity="0.3"/>

  <!-- Hair tie -->
  <ellipse cx="393" cy="160" rx="14" ry="12" fill="#be185d"/>
  <ellipse cx="393" cy="160" rx="14" ry="12" fill="white" opacity="0.15"/>

  <!-- Eyes -->
  <ellipse cx="210" cy="240" rx="18" ry="22" fill="#44403c"/>
  <ellipse cx="302" cy="240" rx="18" ry="22" fill="#44403c"/>
  <!-- Eye shine -->
  <circle cx="216" cy="232" r="6" fill="white"/>
  <circle cx="308" cy="232" r="6" fill="white"/>
  <circle cx="206" cy="244" r="3" fill="white" opacity="0.5"/>
  <circle cx="298" cy="244" r="3" fill="white" opacity="0.5"/>

  <!-- Eyebrows -->
  <path d="M188,210 Q210,198 232,208" fill="none" stroke="#c09030" stroke-width="6" stroke-linecap="round"/>
  <path d="M280,208 Q302,198 324,210" fill="none" stroke="#c09030" stroke-width="6" stroke-linecap="round"/>

  <!-- Nose -->
  <path d="M256,260 Q248,280 254,285" fill="none" stroke="#d4a888" stroke-width="4" stroke-linecap="round"/>

  <!-- Smile -->
  <path d="M200,310 Q230,350 256,350 Q282,350 312,310"
        fill="none" stroke="#c0544e" stroke-width="8" stroke-linecap="round"/>

  <!-- Cheek blush -->
  <ellipse cx="175" cy="300" rx="28" ry="18" fill="#f0a0a0" opacity="0.35"/>
  <ellipse cx="337" cy="300" rx="28" ry="18" fill="#f0a0a0" opacity="0.35"/>
</svg>`;

const buf = Buffer.from(svg);

await sharp(buf).resize(192, 192).png().toFile('public/pwa-192x192.png');
await sharp(buf).resize(512, 512).png().toFile('public/pwa-512x512.png');

console.log('PWA icons generated');
