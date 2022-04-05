// CAN ALSO BE USED AS THE:

//search for EVENT LISTENER MSD ON GOOGLE

// var numberofdrumbuttons = document.querySelectorAll(".drum").length;
//
// and in place of "i" we should have used the "numberofdrumbuttons" so that if in case we have increased the buttons the would not cause any proble


//!!!!!!USED WHEN WE DO THE CLICKS!!!!!!!!////



for (i=0; i<=6;  i++){ //we have used here 6 because there are total 6 drums that we know but if we don't know about it then we have USED
  //i<document.querySelectorAll(".drum").length;


  //!!! Detecting Clicks !!//

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    //"click" f'n here is used to detect any click to the function.

    //alert("I Got Clicked!");

    //this.style.color = "white";

    //"this" is basically used to show what exactly done with the code

    // var audio = new Audio("sounds/tom-2.mp3");
    // audio.play();

    // //if this includes only tom-2.mp3 then it should be included in the single quotes

    //*!!!!!!!USING SWITCH CASE!!!*//

    var buttonInnerHTML = this.innerHTML;
    //"this.innerHTML" actually holds the value which is going to happen.
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);


  });
// HERE IN PLACE OF ".DRUM" I.E.. "BUTTON" WE CAN ALSO USE THE BUTTON HERE SO TO GET THE OUTPUT
}

//!!! Detecting Keyboardpress !!//

document.addEventListener("keydown", function(event) {
  makeSound(event.key);
  buttonAnimation(event.key);

});

function makeSound(key) {
  switch (key) {
    case "w":
     var tom1 = new Audio("sounds/tom-1.mp3");
     tom1.play();
     break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
     var tom3 = new Audio("sounds/tom-3.mp3");
     tom3.play();
     break;

    case "d":
     var tom4 = new Audio("sounds/tom-4.mp3");
     tom4.play();
     break;

    case "j":
     var crash = new Audio("sounds/crash.mp3");
     crash.play();
     break;

    case "k":
     var snare = new Audio("sounds/snare.mp3");
     snare.play();
     break;

    case "l":
     var kickbass = new Audio("sounds/kick-bass.mp3");
     kickbass.play();
     break;

    default: console.log(buttonInnerHTML);

  }
}

function buttonAnimation(currentkey) {
  var activeButton = document.querySelector("." + currentkey);
  activeButton.classList.add("pressed");

  //here the class "pressed" will be added in the parameter currentkey

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
  }
