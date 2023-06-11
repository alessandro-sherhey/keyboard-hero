const instructions = document.getElementById("howToPlay");
const dismissButton = document.getElementById("dismissInstructions");
const openButton = document.getElementById("showHowToPlay");

openButton.addEventListener("click", () => {
    instructions.style.display = 'flex';
    instructions.classList.add('open');
    window.setTimeout(() => {
        instructions.classList.remove('open');
    }, 250);
})

dismissButton.addEventListener("click", () => {
    instructions.classList.add('close');
    window.setTimeout(() => {
        instructions.classList.remove('close');
        instructions.style.display = 'none';
    }, 250);
})