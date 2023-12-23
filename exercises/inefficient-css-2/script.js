// document.getElementById("updateButton").addEventListener("click", () => {
//   const dynamicContent = document.querySelector(".dynamic-content");
//   dynamicContent.innerHTML = "";

//   for (let i = 0; i < 50; i++) {
//     const newElement = document.createElement("p");
//     newElement.textContent = `Item ${i + 1}`;
//     dynamicContent.appendChild(newElement);
//   }
// });

document.getElementById("updateButton").addEventListener("click", () => {
  const dynamicContent = document.querySelector(".dynamic-content");

  // Instead of clearing and repopulating everything, just add new items
  for (let i = dynamicContent.children.length; i < 50; i++) {
    const newElement = document.createElement("p");
    newElement.textContent = `Item ${i + 1}`;
    dynamicContent.appendChild(newElement);
  }
});
