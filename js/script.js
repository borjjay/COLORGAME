


document.querySelector("#Blue").addEventListener('click', pickBlue);

let blue = 0

function pickBlue(){
 

let playerPick = document.getElementById("playerPick");
const $playBtn = document.getElementById("play");
//const colorsAvailable = ["blue", "red", "pink", "green", "yellow", "white"];



// Handle Player color selection, assign the selectedColor to the player choose

  playerPick.innerText = "Blue";
  $playBtn.style.display = 'block';




// OnClick Play Button
$playBtn.addEventListener('click', function(){
  let firstColor= Math.floor(Math.random() * 6);
  let secondColor = Math.floor(Math.random() * 6);
  let thirdColor = Math.floor(Math.random() * 6);
 

  let firstContent = document.querySelector("#displayWinner1");
  let secondContent = document.querySelector("#displayWinner2");
  let thirdContent = document.querySelector("#displayWinner3");
  firstContent.textContent = ""
  secondContent.textContent = ""
  thirdContent.textContent = ""
  

if(firstColor === blue && secondColor === blue && thirdColor === blue){
  alert("Triple Win")
}
else if(secondColor === firstColor && blue === firstColor){
  alert("double Win")
}
else if(firstColor === thirdColor  && blue === thirdColor ){
  alert("double Win")
}
else if(  secondColor === thirdColor  && blue === thirdColor ){
  alert("double Win")
}
else if(firstColor === blue){
  alert("Win")
}
else if(secondColor === blue){
  alert("Win")
}
else if(thirdColor === blue){
  alert("Win")
}
console.log(firstColor);

if(firstColor == 0  ){
  firstContent.textContent ="Blue"
  if (secondColor == 0){
 
    secondContent.textContent ="Blue"
  }
  else if(thirdColor == 0){
   thirdContent.textContent ="Blue"
  }
}


if(secondColor == 0  ){
secondContent.textContent ="Blue"
if(firstColor == 0  ){
firstContent.textContent ="Blue"
  }
 else if(thirdColor == 0  ){
    thirdContent.textContent ="Blue"
    }
};
if(thirdColor == 0  ){
thirdContent.textContent ="Blue"
if(firstColor == 0  ){
firstContent.textContent ="Blue"
  }
 else if(secondColor == 0  ){
secondColor.textContent ="Blue"
    }
};

/*Color Green*/
if(firstColor == 1  ){
  firstContent.textContent ="Green"
  if (secondColor == 1){
 
    secondContent.textContent ="Green"
  }
  else if(secondColor == 1){
   thirdContent.textContent ="Green"
  }
}
if(secondColor == 1  ){
secondContent.textContent ="Green"
if(firstColor == 1  ){
firstContent.textContent ="Green"
  }
 else if(thirdColor == 1  ){
    thirdContent.textContent ="Green"
    }
};
if(thirdColor == 1  ){
thirdContent.textContent ="Green"
if(firstColor == 1  ){
firstContent.textContent ="Green"
  }
 else if(secondColor == 1  ){
secondColor.textContent ="Green"
    }
};
//color red
if(firstColor == 2  ){
  firstContent.textContent ="Red"
  if (secondColor == 2){
 
    secondContent.textContent ="Red"
  }
  else if(secondColor == 2){
   thirdContent.textContent ="Red"
  }
}
if(secondColor == 2  ){
secondContent.textContent ="Red"
if(firstColor == 2  ){
firstContent.textContent ="Red"
  }
 else if(thirdColor == 2  ){
    thirdContent.textContent ="Red"
    }
};
if(thirdColor == 2  ){
thirdContent.textContent ="Red"
if(firstColor == 2 ){
firstContent.textContent ="Red"
  }
 else if(secondColor == 2  ){
secondColor.textContent ="Red"
    }
};

//yellow
if(firstColor == 3  ){
  firstContent.textContent ="Yellow"
  if (secondColor == 3){
 
    secondContent.textContent ="Yellow"
  }
  else if(secondColor == 3){
   thirdContent.textContent ="Yellow"
  }
}
if(secondColor == 3  ){
secondContent.textContent ="Yellow"
if(firstColor == 3  ){
firstContent.textContent ="Yellow"
  }
 else if(thirdColor == 3  ){
    thirdContent.textContent ="Yellow"
    }
};
if(thirdColor == 3  ){
thirdContent.textContent ="Yellow"
if(firstColor == 3 ){
firstContent.textContent ="Yellow"
  }
 else if(secondColor == 3  ){
secondColor.textContent ="Yellow"
    }
};
//pink
if(firstColor == 4  ){
  firstContent.textContent ="Pink"
  if (secondColor == 4){
 
    secondContent.textContent ="Pink"
  }
  else if(secondColor == 4){
   thirdContent.textContent ="Pink"
  }
}
if(secondColor == 4  ){
secondContent.textContent ="Pink"
if(firstColor == 4  ){
firstContent.textContent ="Pink"
  }
 else if(thirdColor == 4  ){
    thirdContent.textContent ="Pink"
    }
};
if(thirdColor == 4  ){
thirdContent.textContent ="Pink"
if(firstColor == 4 ){
firstContent.textContent ="Pink"
  }
 else if(secondColor == 4  ){
secondColor.textContent ="Pink"
    }
};
//white

if(firstColor == 5  ){
  firstContent.textContent ="White"
  if (secondColor == 5){
 
    secondContent.textContent ="White"
  }
  else if(secondColor == 5){
   thirdContent.textContent ="White"
  }
}
if(secondColor == 5  ){
secondContent.textContent ="White"
if(firstColor == 5  ){
firstContent.textContent ="White"
  }
 else if(thirdColor == 5  ){
    thirdContent.textContent ="White"
    }
};
if(thirdColor == 5  ){
thirdContent.textContent ="White"
if(firstColor == 5 ){
firstContent.textContent ="White"
  }
 else if(secondColor == 5  ){
secondColor.textContent ="White"
    }
};

 
})

 

 
}


// Green Color ----------------------------------------------------------------------------


document.querySelector("#Green").addEventListener('click', pickGreen);

let Green = 1

function pickGreen(){
 

let playerPick = document.getElementById("playerPick");
const $playBtn = document.getElementById("play");
//const colorsAvailable = ["blue", "red", "pink", "green", "yellow", "white"];



// Handle Player color selection, assign the selectedColor to the player choose

  playerPick.innerText = "Green";
  $playBtn.style.display = 'block';




// OnClick Play Button
$playBtn.addEventListener('click', function(){
  let firstColor= Math.floor(Math.random() * 6);
  let secondColor = Math.floor(Math.random() * 6);
  let thirdColor = Math.floor(Math.random() * 6);
 

  let firstContent = document.querySelector("#displayWinner1");
  let secondContent = document.querySelector("#displayWinner2");
  let thirdContent = document.querySelector("#displayWinner3");
  firstContent.textContent = ""
  secondContent.textContent = ""
  thirdContent.textContent = ""
  

if(firstColor === Green && secondColor === Green && thirdColor === Green){
  alert("Triple Win")
}
else if(secondColor === firstColor && Green === firstColor){
  alert("double Win")
}
else if(firstColor === thirdColor  && Green === thirdColor ){
  alert("double Win")
}
else if(  secondColor === thirdColor  && Green === thirdColor ){
  alert("double Win")
}
else if(firstColor === Green){
  alert("Win")
}
else if(secondColor === Green){
  alert("Win")
}
else if(thirdColor === Green){
  alert("Win")
}
console.log(firstColor);

if(firstColor == 0  ){
  firstContent.textContent ="Blue"
  if (secondColor == 0){
 
    secondContent.textContent ="Blue"
  }
  else if(thirdColor == 0){
   thirdContent.textContent ="Blue"
  }
}


if(secondColor == 0  ){
secondContent.textContent ="Blue"
if(firstColor == 0  ){
firstContent.textContent ="Blue"
  }
 else if(thirdColor == 0  ){
    thirdContent.textContent ="Blue"
    }
};
if(thirdColor == 0  ){
thirdContent.textContent ="Blue"
if(firstColor == 0  ){
firstContent.textContent ="Blue"
  }
 else if(secondColor == 0  ){
secondColor.textContent ="Blue"
    }
};

/*Color Green*/
if(firstColor == 1  ){
  firstContent.textContent ="Green"
  if (secondColor == 1){
 
    secondContent.textContent ="Green"
  }
  else if(secondColor == 1){
   thirdContent.textContent ="Green"
  }
}
if(secondColor == 1  ){
secondContent.textContent ="Green"
if(firstColor == 1  ){
firstContent.textContent ="Green"
  }
 else if(thirdColor == 1  ){
    thirdContent.textContent ="Green"
    }
};
if(thirdColor == 1  ){
thirdContent.textContent ="Green"
if(firstColor == 1  ){
firstContent.textContent ="Green"
  }
 else if(secondColor == 1  ){
secondColor.textContent ="Green"
    }
};
//color red
if(firstColor == 2  ){
  firstContent.textContent ="Red"
  if (secondColor == 2){
 
    secondContent.textContent ="Red"
  }
  else if(secondColor == 2){
   thirdContent.textContent ="Red"
  }
}
if(secondColor == 2  ){
secondContent.textContent ="Red"
if(firstColor == 2  ){
firstContent.textContent ="Red"
  }
 else if(thirdColor == 2  ){
    thirdContent.textContent ="Red"
    }
};
if(thirdColor == 2  ){
thirdContent.textContent ="Red"
if(firstColor == 2 ){
firstContent.textContent ="Red"
  }
 else if(secondColor == 2  ){
secondColor.textContent ="Red"
    }
};

//yellow
if(firstColor == 3  ){
  firstContent.textContent ="Yellow"
  if (secondColor == 3){
 
    secondContent.textContent ="Yellow"
  }
  else if(secondColor == 3){
   thirdContent.textContent ="Yellow"
  }
}
if(secondColor == 3  ){
secondContent.textContent ="Yellow"
if(firstColor == 3  ){
firstContent.textContent ="Yellow"
  }
 else if(thirdColor == 3  ){
    thirdContent.textContent ="Yellow"
    }
};
if(thirdColor == 3  ){
thirdContent.textContent ="Yellow"
if(firstColor == 3 ){
firstContent.textContent ="Yellow"
  }
 else if(secondColor == 3  ){
secondColor.textContent ="Yellow"
    }
};
//pink
if(firstColor == 4  ){
  firstContent.textContent ="Pink"
  if (secondColor == 4){
 
    secondContent.textContent ="Pink"
  }
  else if(secondColor == 4){
   thirdContent.textContent ="Pink"
  }
}
if(secondColor == 4  ){
secondContent.textContent ="Pink"
if(firstColor == 4  ){
firstContent.textContent ="Pink"
  }
 else if(thirdColor == 4  ){
    thirdContent.textContent ="Pink"
    }
};
if(thirdColor == 4  ){
thirdContent.textContent ="Pink"
if(firstColor == 4 ){
firstContent.textContent ="Pink"
  }
 else if(secondColor == 4  ){
secondColor.textContent ="Pink"
    }
};
//white

if(firstColor == 5  ){
  firstContent.textContent ="White"
  if (secondColor == 5){
 
    secondContent.textContent ="White"
  }
  else if(secondColor == 5){
   thirdContent.textContent ="White"
  }
}
if(secondColor == 5  ){
secondContent.textContent ="White"
if(firstColor == 5  ){
firstContent.textContent ="White"
  }
 else if(thirdColor == 5  ){
    thirdContent.textContent ="White"
    }
};
if(thirdColor == 5  ){
thirdContent.textContent ="White"
if(firstColor == 5 ){
firstContent.textContent ="White"
  }
 else if(secondColor == 5  ){
secondColor.textContent ="White"
    }
};
 
})
 
}




// Red Color ----------------------------------------------------------------------------


document.querySelector("#Red").addEventListener('click', pickRed);

let Red = 2

function pickRed(){
 

let playerPick = document.getElementById("playerPick");
const $playBtn = document.getElementById("play");
//const colorsAvailable = ["blue", "red", "pink", "green", "yellow", "white"];



// Handle Player color selection, assign the selectedColor to the player choose

  playerPick.innerText = "Red";
  $playBtn.style.display = 'block';




// OnClick Play Button
$playBtn.addEventListener('click', function(){
  let firstColor= Math.floor(Math.random() * 6);
  let secondColor = Math.floor(Math.random() * 6);
  let thirdColor = Math.floor(Math.random() * 6);
 

  let firstContent = document.querySelector("#displayWinner1");
  let secondContent = document.querySelector("#displayWinner2");
  let thirdContent = document.querySelector("#displayWinner3");
  firstContent.textContent = ""
  secondContent.textContent = ""
  thirdContent.textContent = ""
  

if(firstColor === Red && secondColor === Red && thirdColor === Red){
  alert("Triple Win")
}
else if(secondColor === firstColor && Red === firstColor){
  alert("double Win")
}
else if(firstColor === thirdColor  && Red === thirdColor ){
  alert("double Win")
}
else if(  secondColor === thirdColor  && Red === thirdColor ){
  alert("double Win")
}
else if(firstColor === Red){
  alert("Win")
}
else if(secondColor === Red){
  alert("Win")
}
else if(thirdColor === Red){
  alert("Win")
}
console.log(firstColor);

if(firstColor == 0  ){
  firstContent.textContent ="Blue"
  if (secondColor == 0){
 
    secondContent.textContent ="Blue"
  }
  else if(thirdColor == 0){
   thirdContent.textContent ="Blue"
  }
}


if(secondColor == 0  ){
secondContent.textContent ="Blue"
if(firstColor == 0  ){
firstContent.textContent ="Blue"
  }
 else if(thirdColor == 0  ){
    thirdContent.textContent ="Blue"
    }
};
if(thirdColor == 0  ){
thirdContent.textContent ="Blue"
if(firstColor == 0  ){
firstContent.textContent ="Blue"
  }
 else if(secondColor == 0  ){
secondColor.textContent ="Blue"
    }
};

/*Color Green*/
if(firstColor == 1  ){
  firstContent.textContent ="Green"
  if (secondColor == 1){
 
    secondContent.textContent ="Green"
  }
  else if(secondColor == 1){
   thirdContent.textContent ="Green"
  }
}
if(secondColor == 1  ){
secondContent.textContent ="Green"
if(firstColor == 1  ){
firstContent.textContent ="Green"
  }
 else if(thirdColor == 1  ){
    thirdContent.textContent ="Green"
    }
};
if(thirdColor == 1  ){
thirdContent.textContent ="Green"
if(firstColor == 1  ){
firstContent.textContent ="Green"
  }
 else if(secondColor == 1  ){
secondColor.textContent ="Green"
    }
};
//color red
if(firstColor == 2  ){
  firstContent.textContent ="Red"
  if (secondColor == 2){
 
    secondContent.textContent ="Red"
  }
  else if(secondColor == 2){
   thirdContent.textContent ="Red"
  }
}
if(secondColor == 2  ){
secondContent.textContent ="Red"
if(firstColor == 2  ){
firstContent.textContent ="Red"
  }
 else if(thirdColor == 2  ){
    thirdContent.textContent ="Red"
    }
};
if(thirdColor == 2  ){
thirdContent.textContent ="Red"
if(firstColor == 2 ){
firstContent.textContent ="Red"
  }
 else if(secondColor == 2  ){
secondColor.textContent ="Red"
    }
};

//yellow
if(firstColor == 3  ){
  firstContent.textContent ="Yellow"
  if (secondColor == 3){
 
    secondContent.textContent ="Yellow"
  }
  else if(secondColor == 3){
   thirdContent.textContent ="Yellow"
  }
}
if(secondColor == 3  ){
secondContent.textContent ="Yellow"
if(firstColor == 3  ){
firstContent.textContent ="Yellow"
  }
 else if(thirdColor == 3  ){
    thirdContent.textContent ="Yellow"
    }
};
if(thirdColor == 3  ){
thirdContent.textContent ="Yellow"
if(firstColor == 3 ){
firstContent.textContent ="Yellow"
  }
 else if(secondColor == 3  ){
secondColor.textContent ="Yellow"
    }
};
//pink
if(firstColor == 4  ){
  firstContent.textContent ="Pink"
  if (secondColor == 4){
 
    secondContent.textContent ="Pink"
  }
  else if(secondColor == 4){
   thirdContent.textContent ="Pink"
  }
}
if(secondColor == 4  ){
secondContent.textContent ="Pink"
if(firstColor == 4  ){
firstContent.textContent ="Pink"
  }
 else if(thirdColor == 4  ){
    thirdContent.textContent ="Pink"
    }
};
if(thirdColor == 4  ){
thirdContent.textContent ="Pink"
if(firstColor == 4 ){
firstContent.textContent ="Pink"
  }
 else if(secondColor == 4  ){
secondColor.textContent ="Pink"
    }
};
//white

if(firstColor == 5  ){
  firstContent.textContent ="White"
  if (secondColor == 5){
 
    secondContent.textContent ="White"
  }
  else if(secondColor == 5){
   thirdContent.textContent ="White"
  }
}
if(secondColor == 5  ){
secondContent.textContent ="White"
if(firstColor == 5  ){
firstContent.textContent ="White"
  }
 else if(thirdColor == 5  ){
    thirdContent.textContent ="White"
    }
};
if(thirdColor == 5  ){
thirdContent.textContent ="White"
if(firstColor == 5 ){
firstContent.textContent ="White"
  }
 else if(secondColor == 5  ){
secondColor.textContent ="White"
    }
};
 
})
 
}


//Yellow------------------------------------------------------------

document.querySelector("#Yellow").addEventListener('click', pickYellow);

let Yellow = 3

function pickYellow(){
 

let playerPick = document.getElementById("playerPick");
const $playBtn = document.getElementById("play");
//const colorsAvailable = ["blue", "red", "pink", "green", "yellow", "white"];



// Handle Player color selection, assign the selectedColor to the player choose

  playerPick.innerText = "Yellow";
  $playBtn.style.display = 'block';




// OnClick Play Button
$playBtn.addEventListener('click', function(){
  let firstColor= Math.floor(Math.random() * 6);
  let secondColor = Math.floor(Math.random() * 6);
  let thirdColor = Math.floor(Math.random() * 6);
 

  let firstContent = document.querySelector("#displayWinner1");
  let secondContent = document.querySelector("#displayWinner2");
  let thirdContent = document.querySelector("#displayWinner3");
  firstContent.textContent = ""
  secondContent.textContent = ""
  thirdContent.textContent = ""
  

if(firstColor === Yellow && secondColor === Yellow && thirdColor === Yellow){
  alert("Triple Win")
}
else if(secondColor === firstColor && Yellow === firstColor){
  alert("double Win")
}
else if(firstColor === thirdColor  && Yellow === thirdColor ){
  alert("double Win")
}
else if(  secondColor === thirdColor  && Yellow === thirdColor ){
  alert("double Win")
}
else if(firstColor === Yellow){
  alert("Win")
}
else if(secondColor === Yellow){
  alert("Win")
}
else if(thirdColor === Yellow){
  alert("Win")
}
console.log(firstColor);

if(firstColor == 0  ){
  firstContent.textContent ="Blue"
  if (secondColor == 0){
 
    secondContent.textContent ="Blue"
  }
  else if(thirdColor == 0){
   thirdContent.textContent ="Blue"
  }
}


if(secondColor == 0  ){
secondContent.textContent ="Blue"
if(firstColor == 0  ){
firstContent.textContent ="Blue"
  }
 else if(thirdColor == 0  ){
    thirdContent.textContent ="Blue"
    }
};
if(thirdColor == 0  ){
thirdContent.textContent ="Blue"
if(firstColor == 0  ){
firstContent.textContent ="Blue"
  }
 else if(secondColor == 0  ){
secondColor.textContent ="Blue"
    }
};

/*Color Green*/
if(firstColor == 1  ){
  firstContent.textContent ="Green"
  if (secondColor == 1){
 
    secondContent.textContent ="Green"
  }
  else if(secondColor == 1){
   thirdContent.textContent ="Green"
  }
}
if(secondColor == 1  ){
secondContent.textContent ="Green"
if(firstColor == 1  ){
firstContent.textContent ="Green"
  }
 else if(thirdColor == 1  ){
    thirdContent.textContent ="Green"
    }
};
if(thirdColor == 1  ){
thirdContent.textContent ="Green"
if(firstColor == 1  ){
firstContent.textContent ="Green"
  }
 else if(secondColor == 1  ){
secondColor.textContent ="Green"
    }
};
//color red
if(firstColor == 2  ){
  firstContent.textContent ="Red"
  if (secondColor == 2){
 
    secondContent.textContent ="Red"
  }
  else if(secondColor == 2){
   thirdContent.textContent ="Red"
  }
}
if(secondColor == 2  ){
secondContent.textContent ="Red"
if(firstColor == 2  ){
firstContent.textContent ="Red"
  }
 else if(thirdColor == 2  ){
    thirdContent.textContent ="Red"
    }
};
if(thirdColor == 2  ){
thirdContent.textContent ="Red"
if(firstColor == 2 ){
firstContent.textContent ="Red"
  }
 else if(secondColor == 2  ){
secondColor.textContent ="Red"
    }
};

//yellow
if(firstColor == 3  ){
  firstContent.textContent ="Yellow"
  if (secondColor == 3){
 
    secondContent.textContent ="Yellow"
  }
  else if(secondColor == 3){
   thirdContent.textContent ="Yellow"
  }
}
if(secondColor == 3  ){
secondContent.textContent ="Yellow"
if(firstColor == 3  ){
firstContent.textContent ="Yellow"
  }
 else if(thirdColor == 3  ){
    thirdContent.textContent ="Yellow"
    }
};
if(thirdColor == 3  ){
thirdContent.textContent ="Yellow"
if(firstColor == 3 ){
firstContent.textContent ="Yellow"
  }
 else if(secondColor == 3  ){
secondColor.textContent ="Yellow"
    }
};
//pink
if(firstColor == 4  ){
  firstContent.textContent ="Pink"
  if (secondColor == 4){
 
    secondContent.textContent ="Pink"
  }
  else if(secondColor == 4){
   thirdContent.textContent ="Pink"
  }
}
if(secondColor == 4  ){
secondContent.textContent ="Pink"
if(firstColor == 4  ){
firstContent.textContent ="Pink"
  }
 else if(thirdColor == 4  ){
    thirdContent.textContent ="Pink"
    }
};
if(thirdColor == 4  ){
thirdContent.textContent ="Pink"
if(firstColor == 4 ){
firstContent.textContent ="Pink"
  }
 else if(secondColor == 4  ){
secondColor.textContent ="Pink"
    }
};
//white

if(firstColor == 5  ){
  firstContent.textContent ="White"
  if (secondColor == 5){
 
    secondContent.textContent ="White"
  }
  else if(secondColor == 5){
   thirdContent.textContent ="White"
  }
}
if(secondColor == 5  ){
secondContent.textContent ="White"
if(firstColor == 5  ){
firstContent.textContent ="White"
  }
 else if(thirdColor == 5  ){
    thirdContent.textContent ="White"
    }
};
if(thirdColor == 5  ){
thirdContent.textContent ="White"
if(firstColor == 5 ){
firstContent.textContent ="White"
  }
 else if(secondColor == 5  ){
secondColor.textContent ="White"
    }
};
 
})
 
}

//Pink----------------------------------------------------------------------------



document.querySelector("#Pink").addEventListener('click', pickPink);

let Pink = 4

function pickPink(){
 

let playerPick = document.getElementById("playerPick");
const $playBtn = document.getElementById("play");
//const colorsAvailable = ["blue", "red", "pink", "green", "yellow", "white"];



// Handle Player color selection, assign the selectedColor to the player choose

  playerPick.innerText = "Pink";
  $playBtn.style.display = 'block';




// OnClick Play Button
$playBtn.addEventListener('click', function(){
  let firstColor= Math.floor(Math.random() * 6);
  let secondColor = Math.floor(Math.random() * 6);
  let thirdColor = Math.floor(Math.random() * 6);
 

  let firstContent = document.querySelector("#displayWinner1");
  let secondContent = document.querySelector("#displayWinner2");
  let thirdContent = document.querySelector("#displayWinner3");
  firstContent.textContent = ""
  secondContent.textContent = ""
  thirdContent.textContent = ""
  

if(firstColor === Pink && secondColor === Pink && thirdColor === Pink){
  alert("Triple Win")
}
else if(secondColor === firstColor && Pink === firstColor){
  alert("double Win")
}
else if(firstColor === thirdColor  && Pink === thirdColor ){
  alert("double Win")
}
else if(  secondColor === thirdColor  && Pink === thirdColor ){
  alert("double Win")
}
else if(firstColor === Pink){
  alert("Win")
}
else if(secondColor === Pink){
  alert("Win")
}
else if(thirdColor === Pink){
  alert("Win")
}
console.log(firstColor);

if(firstColor == 0  ){
  firstContent.textContent ="Blue"
  if (secondColor == 0){
 
    secondContent.textContent ="Blue"
  }
  else if(thirdColor == 0){
   thirdContent.textContent ="Blue"
  }
}


if(secondColor == 0  ){
secondContent.textContent ="Blue"
if(firstColor == 0  ){
firstContent.textContent ="Blue"
  }
 else if(thirdColor == 0  ){
    thirdContent.textContent ="Blue"
    }
};
if(thirdColor == 0  ){
thirdContent.textContent ="Blue"
if(firstColor == 0  ){
firstContent.textContent ="Blue"
  }
 else if(secondColor == 0  ){
secondColor.textContent ="Blue"
    }
};

/*Color Green*/
if(firstColor == 1  ){
  firstContent.textContent ="Green"
  if (secondColor == 1){
 
    secondContent.textContent ="Green"
  }
  else if(secondColor == 1){
   thirdContent.textContent ="Green"
  }
}
if(secondColor == 1  ){
secondContent.textContent ="Green"
if(firstColor == 1  ){
firstContent.textContent ="Green"
  }
 else if(thirdColor == 1  ){
    thirdContent.textContent ="Green"
    }
};
if(thirdColor == 1  ){
thirdContent.textContent ="Green"
if(firstColor == 1  ){
firstContent.textContent ="Green"
  }
 else if(secondColor == 1  ){
secondColor.textContent ="Green"
    }
};
//color red
if(firstColor == 2  ){
  firstContent.textContent ="Red"
  if (secondColor == 2){
 
    secondContent.textContent ="Red"
  }
  else if(secondColor == 2){
   thirdContent.textContent ="Red"
  }
}
if(secondColor == 2  ){
secondContent.textContent ="Red"
if(firstColor == 2  ){
firstContent.textContent ="Red"
  }
 else if(thirdColor == 2  ){
    thirdContent.textContent ="Red"
    }
};
if(thirdColor == 2  ){
thirdContent.textContent ="Red"
if(firstColor == 2 ){
firstContent.textContent ="Red"
  }
 else if(secondColor == 2  ){
secondColor.textContent ="Red"
    }
};

//yellow
if(firstColor == 3  ){
  firstContent.textContent ="Yellow"
  if (secondColor == 3){
 
    secondContent.textContent ="Yellow"
  }
  else if(secondColor == 3){
   thirdContent.textContent ="Yellow"
  }
}
if(secondColor == 3  ){
secondContent.textContent ="Yellow"
if(firstColor == 3  ){
firstContent.textContent ="Yellow"
  }
 else if(thirdColor == 3  ){
    thirdContent.textContent ="Yellow"
    }
};
if(thirdColor == 3  ){
thirdContent.textContent ="Yellow"
if(firstColor == 3 ){
firstContent.textContent ="Yellow"
  }
 else if(secondColor == 3  ){
secondColor.textContent ="Yellow"
    }
};
//pink
if(firstColor == 4  ){
  firstContent.textContent ="Pink"
  if (secondColor == 4){
 
    secondContent.textContent ="Pink"
  }
  else if(secondColor == 4){
   thirdContent.textContent ="Pink"
  }
}
if(secondColor == 4  ){
secondContent.textContent ="Pink"
if(firstColor == 4  ){
firstContent.textContent ="Pink"
  }
 else if(thirdColor == 4  ){
    thirdContent.textContent ="Pink"
    }
};
if(thirdColor == 4  ){
thirdContent.textContent ="Pink"
if(firstColor == 4 ){
firstContent.textContent ="Pink"
  }
 else if(secondColor == 4  ){
secondColor.textContent ="Pink"
    }
};
//white

if(firstColor == 5  ){
  firstContent.textContent ="White"
  if (secondColor == 5){
 
    secondContent.textContent ="White"
  }
  else if(secondColor == 5){
   thirdContent.textContent ="White"
  }
}
if(secondColor == 5  ){
secondContent.textContent ="White"
if(firstColor == 5  ){
firstContent.textContent ="White"
  }
 else if(thirdColor == 5  ){
    thirdContent.textContent ="White"
    }
};
if(thirdColor == 5  ){
thirdContent.textContent ="White"
if(firstColor == 5 ){
firstContent.textContent ="White"
  }
 else if(secondColor == 5  ){
secondColor.textContent ="White"
    }
};
 
})
 
}


////WHITE-----------------------------------------------------------------------


document.querySelector("#White").addEventListener('click', pickWhite);

let White = 5

function pickWhite(){
 

let playerPick = document.getElementById("playerPick");
const $playBtn = document.getElementById("play");
//const colorsAvailable = ["blue", "red", "pink", "green", "yellow", "white"];



// Handle Player color selection, assign the selectedColor to the player choose

  playerPick.innerText = "White";
  $playBtn.style.display = 'block';




// OnClick Play Button
$playBtn.addEventListener('click', function(){
  let firstColor= Math.floor(Math.random() * 6);
  let secondColor = Math.floor(Math.random() * 6);
  let thirdColor = Math.floor(Math.random() * 6);
 

  let firstContent = document.querySelector("#displayWinner1");
  let secondContent = document.querySelector("#displayWinner2");
  let thirdContent = document.querySelector("#displayWinner3");
  firstContent.textContent = ""
  secondContent.textContent = ""
  thirdContent.textContent = ""
  

if(firstColor === White && secondColor === White && thirdColor === White){
  alert("Triple Win")
}
else if(secondColor === firstColor && White === firstColor){
  alert("double Win")
}
else if(firstColor === thirdColor  && White === thirdColor ){
  alert("double Win")
}
else if(  secondColor === thirdColor  && White === thirdColor ){
  alert("double Win")
}
else if(firstColor === White){
  alert("Win")
}
else if(secondColor === White){
  alert("Win")
}
else if(thirdColor === White){
  alert("Win")
}
console.log(firstColor);

if(firstColor == 0  ){
  firstContent.textContent ="Blue"
  if (secondColor == 0){
 
    secondContent.textContent ="Blue"
  }
  else if(thirdColor == 0){
   thirdContent.textContent ="Blue"
  }
}


if(secondColor == 0  ){
secondContent.textContent ="Blue"
if(firstColor == 0  ){
firstContent.textContent ="Blue"
  }
 else if(thirdColor == 0  ){
    thirdContent.textContent ="Blue"
    }
};
if(thirdColor == 0  ){
thirdContent.textContent ="Blue"
if(firstColor == 0  ){
firstContent.textContent ="Blue"
  }
 else if(secondColor == 0  ){
secondColor.textContent ="Blue"
    }
};

/*Color Green*/
if(firstColor == 1  ){
  firstContent.textContent ="Green"
  if (secondColor == 1){
 
    secondContent.textContent ="Green"
  }
  else if(secondColor == 1){
   thirdContent.textContent ="Green"
  }
}
if(secondColor == 1  ){
secondContent.textContent ="Green"
if(firstColor == 1  ){
firstContent.textContent ="Green"
  }
 else if(thirdColor == 1  ){
    thirdContent.textContent ="Green"
    }
};
if(thirdColor == 1  ){
thirdContent.textContent ="Green"
if(firstColor == 1  ){
firstContent.textContent ="Green"
  }
 else if(secondColor == 1  ){
secondColor.textContent ="Green"
    }
};
//color red
if(firstColor == 2  ){
  firstContent.textContent ="Red"
  if (secondColor == 2){
 
    secondContent.textContent ="Red"
  }
  else if(secondColor == 2){
   thirdContent.textContent ="Red"
  }
}
if(secondColor == 2  ){
secondContent.textContent ="Red"
if(firstColor == 2  ){
firstContent.textContent ="Red"
  }
 else if(thirdColor == 2  ){
    thirdContent.textContent ="Red"
    }
};
if(thirdColor == 2  ){
thirdContent.textContent ="Red"
if(firstColor == 2 ){
firstContent.textContent ="Red"
  }
 else if(secondColor == 2  ){
secondColor.textContent ="Red"
    }
};

//yellow
if(firstColor == 3  ){
  firstContent.textContent ="Yellow"
  if (secondColor == 3){
 
    secondContent.textContent ="Yellow"
  }
  else if(secondColor == 3){
   thirdContent.textContent ="Yellow"
  }
}
if(secondColor == 3  ){
secondContent.textContent ="Yellow"
if(firstColor == 3  ){
firstContent.textContent ="Yellow"
  }
 else if(thirdColor == 3  ){
    thirdContent.textContent ="Yellow"
    }
};
if(thirdColor == 3  ){
thirdContent.textContent ="Yellow"
if(firstColor == 3 ){
firstContent.textContent ="Yellow"
  }
 else if(secondColor == 3  ){
secondColor.textContent ="Yellow"
    }
};
//pink
if(firstColor == 4  ){
  firstContent.textContent ="Pink"
  if (secondColor == 4){
 
    secondContent.textContent ="Pink"
  }
  else if(secondColor == 4){
   thirdContent.textContent ="Pink"
  }
}
if(secondColor == 4  ){
secondContent.textContent ="Pink"
if(firstColor == 4  ){
firstContent.textContent ="Pink"
  }
 else if(thirdColor == 4  ){
    thirdContent.textContent ="Pink"
    }
};
if(thirdColor == 4  ){
thirdContent.textContent ="Pink"
if(firstColor == 4 ){
firstContent.textContent ="Pink"
  }
 else if(secondColor == 4  ){
secondColor.textContent ="Pink"
    }
};
//white

if(firstColor == 5  ){
  firstContent.textContent ="White"
  if (secondColor == 5){
 
    secondContent.textContent ="White"
  }
  else if(secondColor == 5){
   thirdContent.textContent ="White"
  }
}
if(secondColor == 5  ){
secondContent.textContent ="White"
if(firstColor == 5  ){
firstContent.textContent ="White"
  }
 else if(thirdColor == 5  ){
    thirdContent.textContent ="White"
    }
};
if(thirdColor == 5  ){
thirdContent.textContent ="White"
if(firstColor == 5 ){
firstContent.textContent ="White"
  }
 else if(secondColor == 5  ){
secondColor.textContent ="White"
    }
};
 
})
 
}
