console.log("behavior.js is running");
const title = document.querySelector(".page-title");
const button = document.querySelector(".button-orange");

function changeTitre() {
  title.textContent = "Coeur Comédien";
}

button.addEventListener("click", changeTitre);
