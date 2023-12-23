document.getElementById("addItem").addEventListener("click", () => {
  const container = document.querySelector(".container");
  const newItem = document.createElement("div");
  newItem.classList.add("item");
  newItem.textContent = "New Item";
  container.appendChild(newItem);

  // Attaching a new click event listener every time an item is added
  newItem.addEventListener("click", () => {
    newItem.style.backgroundColor = "lightblue";
  });
});
