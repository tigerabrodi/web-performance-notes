document.getElementById("updateItems").addEventListener("click", () => {
  const container = document.querySelector(".container");

  // Force Synchronous Layout inside a loop
  for (let i = 0; i < 100; i++) {
    const newItem = document.createElement("div");
    newItem.classList.add("item");
    newItem.textContent = `Item ${i + 1}`;
    container.appendChild(newItem);

    // Forced layout calculation
    // console.log(newItem.offsetWidth);
  }
});
