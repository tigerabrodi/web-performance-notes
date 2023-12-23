// Simple script to interact with the list items
document.querySelectorAll(".list-item").forEach((item) => {
  item.addEventListener("mouseover", () => {
    console.log("Item hovered");
  });
});
