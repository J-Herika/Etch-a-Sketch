const grid = document.querySelector("#grid");
let gridNumber;

for (let i = 0; i < 19; i++) {
  let gridBox = document.createElement("div");
  gridBox.className = "grid-box";

  gridBox.style.backgroundColor = "red";
  gridBox.style.width = "100px";
  gridBox.style.height = "100px";

  grid.appendChild(gridBox);
}
const gridBox = document.querySelectorAll(".grid-box");
console.log(gridBox);

for (let i = 0; i < gridBox.length; i++) {
  gridBox[i].addEventListener("mouseenter", () => {
    gridBox[i].style.backgroundColor = "purple";
  });
}
