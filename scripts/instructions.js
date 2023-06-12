const instructions = document.getElementById("instructions");
const closeInstructionsButton = document.getElementById("closeInstructionsButton");
const openInstructionsButton = document.getElementById("showInstructionsButton");
const openInstructionsButtonTwo = document.getElementById("showInstructionsButtonTwo");

openInstructionsButton.addEventListener("click", () => {
    instructions.style.display = 'flex';
    instructions.classList.add('open');
    window.setTimeout(() => {
        instructions.classList.remove('open');
    }, 250);
})

openInstructionsButtonTwo.addEventListener("click", () => {
    instructions.style.display = 'flex';
    instructions.classList.add('open');
    window.setTimeout(() => {
        instructions.classList.remove('open');
    }, 250);
})

closeInstructionsButton.addEventListener("click", () => {
    instructions.classList.add('close');
    window.setTimeout(() => {
        instructions.classList.remove('close');
        instructions.style.display = 'none';
    }, 250);
})