const grid = document.querySelector("#grid");
const drawBox = document.querySelector(".draw-box");
const createGridBtn = document.querySelector(".create-button");

let blockNumber = 16;
function getGridNumber() {
  blockNumber = prompt("Enter the number of blocks in the grid");
  if (blockNumber >= 100) blockNumber = 100;

  return blockNumber;
}
// createGridBtn.addEventListener('click',() => {
//   getGridNumber();
// })

function grids(blockNumber) {
  for (let i = 0; i < blockNumber; i++) {
    let gridBox = document.createElement("div");
    gridBox.className = "grid-box";
    gridBox.style.backgroundColor = "white";

    for (let j = 0; j < blockNumber; j++) {
      let gridRow = document.createElement("div");
      gridRow.className = "grid-row";
      gridRow.style.border = "1px solid black";
      gridBox.appendChild(gridRow);
    }

    drawBox.appendChild(gridBox);
  }
  const gridRow = document.querySelectorAll(".grid-row");

  for (let i = 0; i < gridRow.length; i++) {
    gridRow[i].addEventListener("mouseenter", () => {
      gridRow[i].style.backgroundColor = "red";
    });
  }
}

// buttons
function createNewGrid() {
  while (drawBox.firstChild) {
    drawBox.firstChild.remove();
  }
  getGridNumber();
  grids(blockNumber);
}
createGridBtn.addEventListener("click", createNewGrid);
