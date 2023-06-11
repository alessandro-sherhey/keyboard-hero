// Manages opening and closing of the window
const settings = document.getElementById("settings");
const closeSettingsButton = document.getElementById("closeSettingsButton");
const openSettingsButton = document.getElementById("showSettingsButton");

openSettingsButton.addEventListener("click", () => {
    settings.style.display = 'flex';
    settings.classList.add('open');
    window.setTimeout(() => {
        settings.classList.remove('open');
    }, 250);
})

closeSettingsButton.addEventListener("click", () => {
    settings.classList.add('close');
    window.setTimeout(() => {
        settings.classList.remove('close');
        settings.style.display = 'none';
    }, 250);
})



// Manages the various settings
// >> Color Palettes
let style = getComputedStyle(document.body);

const originalPaletteButton = document.getElementById("originalPalette");
const vibrantPaletteButton = document.getElementById("vibrantPalette");

const listElements = document.querySelectorAll('li');

originalPaletteButton.addEventListener("click", () => {
    originalPaletteButton.classList.add("selected");
    vibrantPaletteButton.classList.remove("selected");
    changeColorPalette(1);
})

vibrantPaletteButton.addEventListener("click", () => {
    originalPaletteButton.classList.remove("selected");
    vibrantPaletteButton.classList.add("selected");
    changeColorPalette(2);
})

const changeColorPalette = (palette) => {
    if (palette === 1) {
        for (const element of listElements) {
            if (element.getAttribute("data-color") === "1") {
                element.style.backgroundColor = style.getPropertyValue('--original-1');
                element.style.borderColor = style.getPropertyValue('--original-1');
            } else if (element.getAttribute("data-color") === "2") {
                element.style.backgroundColor = style.getPropertyValue('--original-2');
                element.style.borderColor = style.getPropertyValue('--original-2');
            } else if (element.getAttribute("data-color") === "3") {
                element.style.backgroundColor = style.getPropertyValue('--original-3');
                element.style.borderColor = style.getPropertyValue('--original-3');
            } else if (element.getAttribute("data-color") === "4") {
                element.style.backgroundColor = style.getPropertyValue('--original-4');
                element.style.borderColor = style.getPropertyValue('--original-4');
            } else if (element.getAttribute("data-color") === "5") {
                element.style.backgroundColor = style.getPropertyValue('--original-5');
                element.style.borderColor = style.getPropertyValue('--original-5');
            }
        }
    } else if (palette === 2) {
        for (const element of listElements) {
            if (element.getAttribute("data-color") === "1") {
                element.style.backgroundColor = style.getPropertyValue('--vibrant-1');
                element.style.borderColor = style.getPropertyValue('--vibrant-1');
            } else if (element.getAttribute("data-color") === "2") {
                element.style.backgroundColor = style.getPropertyValue('--vibrant-2');
                element.style.borderColor = style.getPropertyValue('--vibrant-2');
            } else if (element.getAttribute("data-color") === "3") {
                element.style.backgroundColor = style.getPropertyValue('--vibrant-3');
                element.style.borderColor = style.getPropertyValue('--vibrant-3');
            } else if (element.getAttribute("data-color") === "4") {
                element.style.backgroundColor = style.getPropertyValue('--vibrant-4');
                element.style.borderColor = style.getPropertyValue('--vibrant-4');
            } else if (element.getAttribute("data-color") === "5") {
                element.style.backgroundColor = style.getPropertyValue('--vibrant-5');
                element.style.borderColor = style.getPropertyValue('--vibrant-5');
            }
        }
    }
}


// Bot settings
const enableBotButton = document.getElementById("enableBot");
const disableBotButton = document.getElementById("disableBot");
let botIsEnabled = false;

enableBotButton.addEventListener("click", () => {
    enableBotButton.classList.add("selected");
    disableBotButton.classList.remove("selected");
    botIsEnabled = true;
    pressTargetedKey();
})

disableBotButton.addEventListener("click", () => {
    enableBotButton.classList.remove("selected");
    disableBotButton.classList.add("selected");
    botIsEnabled = false;
})

const pressTargetedKey = () => {
    if (botIsEnabled) {
        window.setTimeout(pressTargetedKey, 200);
        document.dispatchEvent(new KeyboardEvent('keypress', {'key': targetedKey}));
    }
}