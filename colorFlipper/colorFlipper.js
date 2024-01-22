// Storing different colors in an array
const colors = ["red", "green", "blue", "pink", "orange", "cyan", "grey"];

// Grabbing references to UI components
const bgColorText = document.querySelector("#current-color-text");
const colorFlipBTn = document.querySelector("button");
const page = document.querySelector("body");

// Button special effects
let loopingColors;

// Functions to choose a random color from the array and set the background and
// the centered text accordingly
function getRandomColor() {

    // Get a random number between zero and the lenght of color array to choose
    const randomColorIdx = Math.floor(Math.random() * colors.length);
    const randomColor = colors[randomColorIdx];
    return randomColor;
}


function flipColor() {

  randomColor = getRandomColor();

  // Change the background and the text content
  page.style.backgroundColor = randomColor;
  bgColorText.textContent = randomColor;
  bgColorText.style.color = randomColor;
}

function loopColors() {
  loopingColors = setInterval(() => {
    colorFlipBTn.style.backgroundColor = getRandomColor();
  }, 750);
}

function resetButtonColor(){
  clearInterval(loopingColors);
  colorFlipBTn.style.backgroundColor = "darkslategray";
}

// Button functions
colorFlipBTn.addEventListener("click", flipColor);
colorFlipBTn.addEventListener("mouseover", loopColors);
colorFlipBTn.addEventListener("mouseout", resetButtonColor);
