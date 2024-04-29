const grid = document.querySelector("#grid");


for (let i = 0; i < 16; i++) {

  let gridBox = document.createElement("div");
  gridBox.className = "grid-box";

  gridBox.style.backgroundColor = "red";
  gridBox.style.width = "100px";
  gridBox.style.height = "100px";

  grid.appendChild(gridBox);
}