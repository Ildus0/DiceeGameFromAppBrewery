"use strict";

const btn = document.getElementById("btn");
btn.addEventListener("click", click);
var img1 = document.getElementsByClassName("img1")[0];
var img2 = document.getElementsByClassName("img2")[0];
var h1 = document.getElementsByTagName("h1")[0];
var firstDice = 0;
var secondDice = 0;

 function  click(){
   console.log("Click");
firstDice = Math.floor(Math.random() * 6 + 1);
console.log(firstDice);

switch (firstDice) {
    case 1:
        img1.setAttribute("src", "dice1.png");
        break;
    case 2:
        img1.setAttribute("src", "dice2.png");
        break;
    case 3:
        img1.setAttribute("src", "dice3.png");
        break;
    case 4:
        img1.setAttribute("src", "dice4.png");
        break;
    case 5:
        img1.setAttribute("src", "dice5.png");
        break;
    case 6:
        img1.setAttribute("src", "dice6.png");
        break;
}
click2();

if (firstDice>secondDice){
h1.innerText = "First Player WIN!";
}
else if (firstDice<secondDice){
    h1.innerText ="Second Player WIN!";
}
else {h1.innerText ="Draw!";}
// return firstDice, secondDice;
}

function click2(){
    secondDice = Math.floor(Math.random() * 6 + 1);
console.log(secondDice);
    switch (secondDice) {
        case 1:
            img2.setAttribute("src", "dice1.png");
            break;
        case 2:
            img2.setAttribute("src", "dice2.png");
            break;
        case 3:
            img2.setAttribute("src", "dice3.png");
            break;
        case 4:
            img2.setAttribute("src", "dice4.png");
            break;
        case 5:
            img2.setAttribute("src", "dice5.png");
            break;
        case 6:
            img2.setAttribute("src", "dice6.png");
            break;
    }
}