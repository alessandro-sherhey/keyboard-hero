const widthWarning = document.getElementById("lowWidthWarning");
const dismissWarningButton = document.getElementById("takeToGame");

dismissWarningButton.addEventListener("click", () => {
    widthWarning.style.display = "none";
})