// document.getElementById("addBoxes").addEventListener("click", () => {
//   const container = document.getElementById("container");

//   // Simulate layout thrashing
//   for (let i = 0; i < 50; i++) {
//     const box = document.createElement("div");
//     box.classList.add("box");
//     container.appendChild(box);

//     // Triggering layout calculations inside a loop
//     console.log(box.offsetWidth, box.offsetHeight);
//   }
// });

// document.getElementById("addBoxes").addEventListener("click", () => {
//   const container = document.getElementById("container");
//   const boxes = [];

//   // First, perform all DOM writes
//   for (let i = 0; i < 50; i++) {
//     const box = document.createElement("div");
//     box.classList.add("box");
//     container.appendChild(box);
//     boxes.push(box);
//   }

//   // Then, perform all DOM reads
//   boxes.forEach((box) => {
//     console.log(box.offsetWidth, box.offsetHeight);
//   });
// });

document.getElementById("addBoxes").addEventListener("click", () => {
  const container = document.getElementById("container");

  const addBox = (i) => {
    if (i < 50) {
      const box = document.createElement("div");
      box.classList.add("box");
      container.appendChild(box);

      // Defer layout calculations to the next repaint and not in the same frame as the DOM write
      requestAnimationFrame(() => {
        console.log(box.offsetWidth, box.offsetHeight);
        addBox(i + 1); // Add the next box
      });
    }
  };

  addBox(0); // Start adding boxes
});
