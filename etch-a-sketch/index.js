function makeRows(rows, cols) {
  const box = document.getElementById("box");

  // Clear old cells
  box.innerHTML = "";

  // Set CSS grid size
  box.style.setProperty('--grid-rows', rows);
  box.style.setProperty('--grid-cols', cols);

  for (let c = 0; c < rows * cols; c++) {
    const cell = document.createElement("div");
    cell.className = "grid-item";
    cell.innerText = c + 1;
    box.appendChild(cell);

    // mouseover event for color and darkening
    cell.addEventListener("mouseenter", () => {
      // give it a random color to the cell
      if (!cell.dataset.rgb) {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        cell.dataset.rgb = `${r},${g},${b}`;  
        cell.dataset.darkness = 0;           
        cell.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
      } else {
        // darken it
        let darkness = Number(cell.dataset.darkness);
        if (darkness < 10) {
          darkness++;
          cell.dataset.darkness = darkness;

          const [r, g, b] = cell.dataset.rgb.split(",").map(Number);
          const factor = 1 - darkness * 0.1;  // reduce brightness by 10% each time
          const newR = Math.floor(r * factor);
          const newG = Math.floor(g * factor);
          const newB = Math.floor(b * factor);
          cell.style.backgroundColor = `rgb(${newR}, ${newG}, ${newB})`;
        }
      }
    });
  }
}

makeRows(16, 16);




const button = document.getElementById("button");

button.addEventListener("click", () => {
  const rows = Number(prompt("Enter number of rows (max 50):"));
  const cols = Number(prompt("Enter number of columns (max 50):"));

  if (
    !isNaN(rows) && rows > 0 && rows <= 65 &&
    !isNaN(cols) && cols > 0 && cols <= 65
  ) {
    makeRows(rows, cols);
  } else {
    alert("Please enter positive numbers up to 50!");
  }
});
