import sharp from 'sharp';

const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <rect width="512" height="512" rx="80" fill="#be185d"/>
  <text x="256" y="320" text-anchor="middle" fill="white" font-size="220" font-weight="bold" font-family="sans-serif">WP</text>
</svg>`;

const buf = Buffer.from(svg);

await sharp(buf).resize(192, 192).png().toFile('public/pwa-192x192.png');
await sharp(buf).resize(512, 512).png().toFile('public/pwa-512x512.png');

console.log('PWA icons generated');
