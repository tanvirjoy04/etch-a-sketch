const gridSquare = document.querySelector('.grid-square');
const initLine = 16;

function calcWidthPercent(line){
  let widthPercentage = 100 / line;
  return `${widthPercentage}%`;
}

function createNewDiv(line){
  let grid = line ** 2;
  let fragment = document.createDocumentFragment();
  for(let i = 0; i < grid; i++){
    const newDiv = document.createElement("div");
    newDiv.classList.add("square-div");
    newDiv.style.flexBasis = calcWidthPercent(line);
    fragment.appendChild(newDiv);
  }

  gridSquare.appendChild(fragment);

  // add event listener to all Square-div
  let items = document.querySelectorAll(".square-div");
  items.forEach((item) => {
    item.addEventListener("mouseenter", () => {  
      item.style.backgroundColor = randomColor();
    });
  });

}

createNewDiv(initLine);

function removeAll (items){
  for(let item of items){
    item.remove();
  }
} 

const newGrid = document.getElementById('grid-btn');

newGrid.addEventListener('click', function(){
  let newLine = prompt("Enter new Line Grid Square Number: (1 - 100)");
  if(newLine > 100 || newLine < 0 || !Number(newLine)) {
    return alert("Please input a valid number");
  }

  let items = document.querySelectorAll(".square-div");
  removeAll(items);
  createNewDiv(newLine);
  
});

//create random rgb color
function randomColor(){
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  let RGB = `rgb(${r}, ${g}, ${b})`;
  return RGB;
}
