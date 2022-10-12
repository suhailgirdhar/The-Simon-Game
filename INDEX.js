var buttonColours = ["red", "green", "blue", "yellow"];
var gamePattern = [];
var userPattern = [];
var level = 0;

document.addEventListener("keypress", function() {
  if (gamePattern.length === 0) {
    nextSequence();
  }
})

function nextSequence() {

  var newSequenceColour = buttonColours[Math.floor(Math.random() * 4)];
  gamePattern.push(newSequenceColour);
  console.log("Game Pattern: " + gamePattern)

  flashEffect(newSequenceColour);

  playSound(newSequenceColour);

  document.querySelector("h1").innerHTML = "Level " + level;
  level++;
}

for (i = 0; i < document.querySelectorAll(".btn").length; i++) {
  document.querySelectorAll(".btn")[i].addEventListener("click", function() {

    if (gamePattern.length >= 1) {
      flashEffect(this.id);

      playSound(this.id);

      winOrLoose(this.id);
    }

  })
}

function winOrLoose(colour) {
  if (userPattern.length < gamePattern.length) {
    userPattern.push(colour);
    // console.log(userPattern);
  } else if (userPattern.length == gamePattern.length) {
    console.log("User Pattern: " + userPattern);
    if (userPattern.toString() === gamePattern.toString()) {
      nextSequence();
      userPattern = [];
      // alert("good");
    } else {
      playSound("wrong");
      gameLost();
    }
  }
}

function flashEffect(colourName) {
  document.querySelector("#" + colourName).classList.add("flash");
  setTimeout(function() {
    document.querySelector("#" + colourName).classList.remove("flash")
  }, 150);
}

function playSound(colourName) {
  var audio = new Audio("/Users/suhail/Desktop/WEB-DEVELOPMENT/PROJECTS/THE-SIMON-GAME/sounds/" + colourName + ".mp3");
  audio.play();
}

function gameLost() {

  document.querySelector("body").classList.add("red");

  setTimeout(function() {
    document.querySelector("body").classList.remove("red"), 50000;
  })

   alert("You have lost the game. Reload to start over.")

  // setTimeout(function() {
  //   location.reload(), 1000;
  // })
}
