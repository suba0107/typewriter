"use strict";

document.addEventListener("DOMContentLoaded", start);

// declare all global variables
const fullText = document.querySelector(".typewritten").textContent.trim();
let write;
let add;
let writing;
let text;

function start() {
  writing = -1;
  text = "";
  show();
}

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
  } else {
    start();
  }
}

function addChart() {
  //Add 1 to writing og sæt tid
  writing++;
  setTimeout(show, 200);
}
