
// Change text content dynamically
document.getElementById("changeTextBtn").addEventListener("click", () => {
    const title = document.getElementById("main-title");
    title.textContent = "You clicked the button!";
    title.style.color = "green"; // Modify CSS style
    title.style.fontSize = "2em"; // Change font size
    title.style.transition = "color 0.5s, font-size 0.5s"; // Add transition effect
    

    // Add confetti effect
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
      
  });
  
  // Add or remove a box element dynamically
  document.getElementById("toggleBoxBtn").addEventListener("click", () => {
    const container = document.getElementById("box-container");
    const existingBox = document.getElementById("magic-box");
  
    if (existingBox) {
      container.removeChild(existingBox);
    } else {
      const box = document.createElement("div");
      box.id = "magic-box";
      box.textContent = "I'm a dynamic box!";
      box.style.padding = "20px";
      box.style.backgroundColor = "lightblue";
      box.style.marginTop = "10px";
      container.appendChild(box);
    }
  });
  