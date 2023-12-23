self.addEventListener("message", () => {
  let result = 0;
  for (let i = 0; i < 100000000; i++) {
    result += Math.sqrt(i);
  }
  postMessage(result);
});
