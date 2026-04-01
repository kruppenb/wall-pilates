import { GoogleGenAI } from '@google/genai';
import mime from 'mime';
import { writeFileSync } from 'fs';
import sharp from 'sharp';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

const config = {
  imageConfig: {
    imageSize: '1K',
  },
  responseModalities: ['IMAGE', 'TEXT'],
};

const model = 'gemini-3-pro-image-preview';

const contents = [
  {
    role: 'user',
    parts: [
      {
        text: 'A cute app icon for a wall pilates fitness app. Show just the head of a smiling blonde girl with a ponytail hairstyle. Cartoon/emoji style, simple flat design, clean shapes. Pink/magenta rounded square background color #be185d. The face should be friendly and cheerful with rosy cheeks. Recognizable at small icon sizes. No text, no words, no letters.',
      },
    ],
  },
];

console.log('Generating icon with Gemini...');

const response = await ai.models.generateContentStream({
  model,
  config,
  contents,
});

for await (const chunk of response) {
  if (!chunk.candidates || !chunk.candidates[0].content || !chunk.candidates[0].content.parts) {
    continue;
  }
  if (chunk.candidates?.[0]?.content?.parts?.[0]?.inlineData) {
    const inlineData = chunk.candidates[0].content.parts[0].inlineData;
    const buffer = Buffer.from(inlineData.data || '', 'base64');

    writeFileSync('public/pwa-512x512.png', buffer);
    console.log('Saved 512x512 icon, size:', buffer.length);

    await sharp(buffer).resize(192, 192).png().toFile('public/pwa-192x192.png');
    console.log('Saved 192x192 icon');
  } else {
    console.log(chunk.text);
  }
}

console.log('Done!');
