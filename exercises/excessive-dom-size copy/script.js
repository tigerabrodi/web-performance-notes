// document.getElementById("processData").addEventListener("click", () => {
//   const start = performance.now();
//   const resultDiv = document.getElementById("result");
//   let result = 0;

//   for (let i = 0; i < 100000000; i++) {
//     result += Math.sqrt(i);
//   }

//   const duration = performance.now() - start;
//   resultDiv.textContent = `Result: ${result} (Time: ${duration.toFixed(2)}ms)`; // Result: 666666661666.567 (Time: 117.20ms)
// });

// function* processNumbers() {
//   let result = 0;
//   for (let i = 0; i < 100000000; i++) {
//     result += Math.sqrt(i);
//     if (i % 1000000 === 0) yield;
//   }
//   return result;
// }

// document.getElementById("processData").addEventListener("click", () => {
//   const start = performance.now();
//   const resultDiv = document.getElementById("result");
//   const generator = processNumbers();

//   function processChunk() {
//     const next = generator.next();
//     if (!next.done) {
//       requestAnimationFrame(processChunk);
//     } else {
//       const duration = performance.now() - start;
//       resultDiv.textContent = `Result with Generator: ${
//         next.value
//       } (Time: ${duration.toFixed(2)}ms)`; // Result with Generator: 666666661666.567 (Time: 1317.80ms)
//     }
//   }

//   processChunk();
// });

// function* processNumbersBatch() {
//   let result = 0;
//   let batchSize = 1000000;

//   for (let i = 0; i < 100000000; i += batchSize) {
//     for (let j = i; j < i + batchSize && j < 100000000; j++) {
//       result += Math.sqrt(j);
//     }
//     yield;
//   }
//   return result;
// }

// document.getElementById("processData").addEventListener("click", () => {
//   const start = performance.now();
//   const resultDiv = document.getElementById("result");
//   const generator = processNumbersBatch();

//   function processChunk() {
//     const next = generator.next();
//     if (!next.done) {
//       requestAnimationFrame(processChunk);
//     } else {
//       const duration = performance.now() - start;
//       resultDiv.textContent = `Result with Batched Generator: ${
//         next.value
//       } (Time: ${duration.toFixed(2)}ms)`; // Result with Batched Generator: 666666661666.567 (Time: 1310.70ms)
//     }
//   }

//   processChunk();
// });

// if (window.Worker) {
//   const myWorker = new Worker("worker.js");

//   document.getElementById("processData").addEventListener("click", () => {
//     const start = performance.now();
//     myWorker.postMessage("start");

//     myWorker.onmessage = function (e) {
//       const duration = performance.now() - start;
//       document.getElementById(
//         "result"
//       ).textContent = `Result with Web Worker: ${
//         e.data
//       } (Time: ${duration.toFixed(2)}ms)`; // Result with Web Worker: 666666661666.567 (Time: 120.60ms)
//     };
//   });
// } else {
//   console.log("Your browser doesn't support web workers.");
// }
