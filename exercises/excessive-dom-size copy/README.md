# Learnings

- processing in batch and single number when doing generator functions is the same speed
- The reason the Web Worker seems fast even though the message to start processing is sent on a button click is that the heavy computation doesn't block the UI thread. As soon as the user clicks the button, the Web Worker starts the task in the background, allowing the main thread to continue running smoothly.
- The Web Worker does not start any computation until it receives the message to start. The speed comes from the fact that it runs in parallel and doesn't interrupt or slow down the main thread, not from pre-computing the result.
