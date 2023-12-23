document.getElementById("generateItems").addEventListener("click", () => {
  const container = document.querySelector(".container");

  // Generate a very large number of items
  for (let i = 0; i < 10000; i++) {
    const newItem = document.createElement("div");
    newItem.classList.add("item");
    newItem.textContent = `Item ${i + 1}`;
    container.appendChild(newItem);
  }
});
