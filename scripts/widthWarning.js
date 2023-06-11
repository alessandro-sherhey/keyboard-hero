const widthWarning = document.getElementById("lowWidthWarning");
const closeWarningButton = document.getElementById("closeWarningButton");

closeWarningButton.addEventListener("click", () => {
    widthWarning.classList.add('close');
    window.setTimeout(() => {
        widthWarning.classList.remove('close');
        widthWarning.style.display = 'none';
    }, 250);
})