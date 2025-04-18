import { isMainThread, Worker, workerData } from "node:worker_threads";
const __filename = new URL(import.meta.url).pathname;
console.log(__filename);
if (isMainThread) {
  new Worker(__filename, { workerData: [5, 4, 3, 2, 1] });
  new Worker(__filename, { workerData: [8, 4, 7, 2, 11] });
  console.log(`Main Thread! Process ID ${process.pid}`);
} else {
  console.log(
    `Inside Worker! Process ID ${process.pid} & Worker Data: ${workerData} sorted: ${workerData.sort((a, b) => a - b)}`,
  );
  console.log(isMainThread); // Prints 'false'.
}
