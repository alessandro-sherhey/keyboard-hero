const keyboard = document.getElementById("keyboard");

const scaleKeyboard = () => {
    let width = window.innerWidth;
    if (width < 601) {
        let scale = (width / 600) * 1;
        keyboard.style.scale = scale;
    } else {
        keyboard.style.scale = '1';
    }
}
scaleKeyboard();

window.addEventListener("resize", scaleKeyboard);