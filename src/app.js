/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  //write your code here
  const suits = ["♦", "♥", "♠", "♣"];
  const mix = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ];

  let suitNumber = Math.floor(Math.random() * suits.length);
  let mixNumber = Math.floor(Math.random() * mix.length);

  document.querySelector(".mix").innerHTML = mix[mixNumber];
  document.querySelector(".suit1").innerHTML = suits[suitNumber];
  document.querySelector(".suit2").innerHTML = suits[suitNumber];

  if (suits[suitNumber] == "♦" || suits[suitNumber] == "♥") {
    document.querySelector(".suit1").style.color = "red";
    document.querySelector(".suit2").style.color = "red";
    document.querySelector(".mix").style.color = "red";
  }
};
