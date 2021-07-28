// Create a random number from 1 to 6
var randomNumber1 = Math.floor(Math.random() * 6)+  1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

//Change the <img> to a Random Dice
document.querySelector(".img1").setAttribute("src","images/dice"+randomNumber1+".png");
document.querySelector(".img2").setAttribute("src","images/dice"+randomNumber2+".png");

//Title to display a Winner

var winner;
if(randomNumber1 > randomNumber2){
    document.querySelector(".container h1").innerHTML = "Player 1 Wins!";
}
else if(randomNumber1 < randomNumber2){
    document.querySelector(".container h1").innerHTML = "Player 2 Wins!";
}
else{
    document.querySelector(".container h1").innerHTML = "Draw!"
}

