for (let x = 0; x < document.querySelectorAll(".drum").length; x++) {
  document.querySelectorAll(".drum")[x].addEventListener("click", function () {
    var buttonClicked = this.innerHTML;
    sounds(buttonClicked);
    buttonAnimation(buttonClicked);
  });
}

document.addEventListener("keydown", function (event) {
  var buttonPressed = event.key;
  sounds(buttonPressed);
  buttonAnimation(buttonPressed);
});

function sounds(key) {
  switch (key) {
    case "w":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
  }
}

function buttonAnimation(currentKey) {
  document.querySelector("." + currentKey).classList.add("pressed");
  function removePressed() {
    document.querySelector("." + currentKey).classList.remove("pressed");
  }
  setTimeout(removePressed, 200);
}
