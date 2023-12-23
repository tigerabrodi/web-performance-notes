document.getElementById("addItems").addEventListener("click", () => {
  const content = document.getElementById("content");
  for (let i = 0; i < 100; i++) {
    const newItem = document.createElement("div");
    newItem.textContent = `Item ${i + 1}`;

    // why is this inefficient?
    // 1. we are adding an event listener to each item
    // 2. we are recreating the function for each item, instead of reusing the same function
    // Solution here is to use event delegation, where we add the event listener to the parent, because the event bubbles up
    newItem.addEventListener("click", () => {
      console.log(`Item ${i + 1} clicked`);
    });
    content.appendChild(newItem);
  }
});
