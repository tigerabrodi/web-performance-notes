let items = [];

const addItem = () => {
  const container = document.getElementById("container");
  const newItem = document.createElement("div");
  newItem.classList.add("item");
  newItem.textContent = "New Item";
  container.appendChild(newItem);

  items.push(newItem); // Store reference to each item
};

const removeItems = () => {
  const container = document.getElementById("container");
  container.innerHTML = ""; // Clear container
};

document.getElementById("addItems").addEventListener("click", addItem);
document.getElementById("removeItems").addEventListener("click", removeItems);

// let items = [];

// const addItem = () => {
//   const container = document.getElementById("container");
//   const newItem = document.createElement("div");
//   newItem.classList.add("item");
//   newItem.textContent = "New Item";
//   container.appendChild(newItem);

//   items.push(newItem); // Store reference to each item
// };

// const removeItems = () => {
//   const container = document.getElementById("container");
//   container.innerHTML = ""; // Clear container

//   items = []; // Clear the array to remove references to DOM elements
// };

// document.getElementById("addItems").addEventListener("click", addItem);
// document.getElementById("removeItems").addEventListener("click", removeItems);
