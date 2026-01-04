import loadHome from "./home";
import loadMenu from "./menu";
import loadContact from "./contact";
import "./style.css";

function clearContent() {
  const content = document.querySelector("#content");
  content.innerHTML = "";
}

function setEvents() {
  document.querySelector("#homeBtn").addEventListener("click", () => {
    clearContent();
    loadHome();
  });

  document.querySelector("#menuBtn").addEventListener("click", () => {
    clearContent();
    loadMenu();
  });

  document.querySelector("#contactBtn").addEventListener("click", () => {
    clearContent();
    loadContact();
  });
}

window.addEventListener("DOMContentLoaded", () => {
  loadHome();   // default tab
  setEvents();  // set up button listeners
});

