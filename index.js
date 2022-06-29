

$( ".play" ).click(function() {
  var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

  var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

  var randomImageSource = "image/" + randomDiceImage; //images/dice1.png - images/dice6.png

  var image1 = document.getElementsByClassName("pic")[0];

  image1.setAttribute("src", randomImageSource);


  var randomNumber2 = Math.floor(Math.random() * 6) + 1;

  var randomImageSource2 = "image/dice" + randomNumber2 + ".png";

  document.getElementsByClassName("pic")[1].setAttribute("src", randomImageSource2);


  //If player 1 wins
  if (randomNumber1 > randomNumber2) {
    document.querySelector("h2").innerHTML = "🚩 Play 1 Wins!";
  }
  else if (randomNumber2 > randomNumber1) {
    document.querySelector("h2").innerHTML = "Player 2 Wins! 🚩";
  }
  else {
    document.querySelector("h2").innerHTML = "Draw!";
  }


});
