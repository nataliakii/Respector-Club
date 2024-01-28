// import { createCanvas } from 'canvas';

// export default async (req, res) => {
//   const width = 300;
//   const height = 200;

//   // Create a canvas and draw something on it (for example, a rectangle)
//   const canvas = createCanvas(width, height);
//   const ctx = canvas.getContext('2d');

//   ctx.fillStyle = '#5594b0';
//   ctx.fillRect(0, 0, width, height);

//   // Convert canvas to a Base64 data URL
//   const dataUrl = canvas.toDataURL('image/png');

//   // Set response headers
//   res.setHeader('Content-Type', 'text/plain');
//   res.setHeader('Content-Disposition', 'attachment; filename=image.txt');

//   // Send the Base64 data URL in the response
//   res.send(dataUrl);
// };

// // import { createCanvas } from 'canvas';

// // export default async (req, res) => {
// //   const width = 300;
// //   const height = 200;

// //   // Create a canvas and draw something on it (for example, a rectangle)
// //   const canvas = createCanvas(width, height);
// //   const ctx = canvas.getContext('2d');

// //   ctx.fillStyle = '#5594b0';
// //   ctx.fillRect(0, 0, width, height);

// //   // Set response headers
// //   res.setHeader('Content-Type', 'image/png');
// //   res.setHeader('Content-Disposition', 'attachment; filename=image.png');

// //   // Convert canvas to a Buffer and send it in the response
// //   const buffer = canvas.toBuffer();
// //   res.end(buffer);
// // };
