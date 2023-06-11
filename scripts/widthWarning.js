const widthWarning = document.getElementById("lowWidthWarning");
const dismissWarningButton = document.getElementById("takeToGame");

dismissWarningButton.addEventListener("click", () => {
    widthWarning.classList.add('close');
    window.setTimeout(() => {
        widthWarning.classList.remove('close');
        widthWarning.style.display = 'none';
    }, 250);
})