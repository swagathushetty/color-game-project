var numSquares = 6;


var colors = [];

//assigning a goal value to our game
var pickedColor;

var squares = document.querySelectorAll(".square");
 

//slecting the span in h1
var colorDisplay = document.getElementById("colorDisplay");

//its a span to display wheter user did write or wrong
var messageDisplay = document.querySelector("#message");

var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");

//contains the two buttons Easy and Hard
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
         //mode button event listners
         for(var i = 0; i < modeButtons.length; i++) {
         modeButtons[i].addEventListener("click", function() {
    
           //removing the class from both the buttons
           modeButtons[0].classList.remove("selected");
           modeButtons[1].classList.remove("selected");

           //adding classlist to the clicked one
           this.classList.add("selected"); 
           this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
           reset();
         });
       }
       
       for(var i = 0; i < squares.length; i++) {
  
               //add click listeners to squares
               squares[i].addEventListener("click", function() {
                 //grab color of clicked squares
                 var clickedColor = this.style.background;
                 //compare color to pickedColor
                 if(clickedColor === pickedColor) {
                   messageDisplay.textContent = "Correct!";
                   resetButton.textContent = "Play Again?";
             
                   //change the color of all the squares to our clicked color
                   changeColors(clickedColor);
            
                   //change the h1 to our goal coor
                   h1.style.background = clickedColor;
                } else {
                  this.style.background = "#232323";
                  messageDisplay.textContent = "Try Again";
                }
                });
         }

reset();

}



function reset() {

   //generate all new colors.new array
  colors = generateRandomColors(numSquares);
  
  //pick a new random color from array
  pickedColor = pickColor();
  
  //change colorDisplay to match picked Color
  colorDisplay.textContent = pickedColor;
  
  //change play again to new colors
    resetButton.textContent = "New Colors";
  
    //remove the correct or try again message after button is pressed
  messageDisplay.textContent = "";
  //change colors of squares
  for(var i = 0; i < squares.length; i++) {
    if(colors[i]){
      squares[i].style.display = "block";
      squares[i].style.background = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }

  //change the h1 back to steelblue color after reset
  h1.style.background = "steelblue";
}

resetButton.addEventListener("click", function() {
  reset();
});

colorDisplay.textContent = pickedColor;



function changeColors(color) {
  //loop through all squares
  for(var i = 0; i < squares.length; i++) {
    //change each color to match given color
    squares[i].style.background = color;
  }
}

function pickColor() {
  //Math.random() is used to generate random nos.use capital M for math
    //eg-to generate random nos till 6 do Math.random()*6
    //to generate random nos bet 1 and 6 do Math.random()*6+1
    //to get a whole no use Math.floor(Math.random()*6+1). Math.floor chops off the decimal
    
    //length of colors.length=6 or 3.we randomly select any color bet 1 and 6/1 and 3 and store it in random.
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

//this function creates an array of 6 random colors and gives it back to colors
//it uses randomColor() to generate the random rgb 
function generateRandomColors(num) {
  //make an array
  var arr = [];
  //add num random colors to arr
  for(var i = 0; i < num; i++) {
    //get random color and push into arr
    arr.push(randomColor());
  }
  //return that array
  return arr;
}

function randomColor() {
  //pick a "red" from 0 - 255
  var r = Math.floor(Math.random() * 256);
  //pick a "green" from 0 - 255
  var g = Math.floor(Math.random() * 256);
  //pick a "blue" from 0 - 255
  var b = Math.floor(Math.random() * 256);
  //return colors using rgb format by concatenation
     //give space after commas ", "
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
