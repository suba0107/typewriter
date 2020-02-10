"use strict";

document.addEventListener("DOMContentLoaded", show);

// declare all global variables
const fullText = document.querySelector(".typewritten").textContent.trim();
let write;
let add;
let writing = -1;
let text = "";

// function start() {
//   document.querySelector(".typewritten").textContent = text;
//   tjek();
// }
function show() {
  // Vis én karakter
  add = `${fullText.charAt(writing)}`;
  text = `${text}${add}`;
  document.querySelector(".typewritten").textContent = text;
  tjek();
}

function tjek() {
  // Tjek om alle karakterne er skrevet ellers gå til næste bogstav
  if (writing < fullText.length) {
    addChart();
  }
}

function addChart() {
  //Add 1 to writing
  writing++;
  setTimeout(show, 200);
}
