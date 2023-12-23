const addItem = () => {
  const container = document.getElementById("container");
  const newItem = document.createElement("div");
  newItem.classList.add("item");
  newItem.textContent = "New Item";
  container.appendChild(newItem);

  // Add an event listener to each item
  newItem.addEventListener("click", () => {
    console.log("Item clicked");
  });
};

const removeItems = () => {
  const container = document.getElementById("container");
  container.innerHTML = ""; // Remove all items
};

document.getElementById("addItems").addEventListener("click", addItem);
document.getElementById("removeItems").addEventListener("click", removeItems);
