// Initializes the localStorage API
if (!localStorage.getItem("palette")) {
    localStorage.setItem("palette", 1);
}
if (!localStorage.getItem("bot")) {
    localStorage.setItem("bot", false);
}
if (!localStorage.getItem("botFrequency")) {
    localStorage.setItem("botFrequency", 200);
}
if (!localStorage.getItem("showCount")) {
    localStorage.setItem("showCount", true);
}
if(!localStorage.getItem("showKPS")) {
    localStorage.setItem("showKPS", true);
}
if (!localStorage.getItem("footer")) {
    localStorage.setItem("footer", 1);
}

// Manages the "Clear Settings" button
const clearSettingsButton = document.getElementById("clearSettings");
let isClicked = false;

const clearSettings = () => {
    if (!isClicked) {
        isClicked = true;
        clearSettingsButton.innerText = 'Cleared! Refresh the page.';
        localStorage.clear();
        setTimeout(clearSettings, 2500);
    } else {
        isClicked = false;
        clearSettingsButton.innerHTML = 'Clear your settings...';
    }
}
clearSettingsButton.addEventListener("click", clearSettings);

// Manages opening and closing of the window
const settings = document.getElementById("settings");
const closeSettingsButton = document.getElementById("closeSettingsButton");
const openSettingsButton = document.getElementById("showSettingsButton");
const openSettingsButtonTwo = document.getElementById("showSettingsButtonTwo");

openSettingsButton.addEventListener("click", () => {
    settings.style.display = 'flex';
    settings.classList.add('open');
    window.setTimeout(() => {
        settings.classList.remove('open');
    }, 250);
})

openSettingsButtonTwo.addEventListener("click", () => {
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
let palette = localStorage.getItem("palette");

const changePaletteButtonsAppearance = () => {
    if (palette == 1) {
        originalPaletteButton.classList.add("selected");
        vibrantPaletteButton.classList.remove("selected");
    } else if (palette == 2) {
        originalPaletteButton.classList.remove("selected");
        vibrantPaletteButton.classList.add("selected");
    }
}
changePaletteButtonsAppearance();

originalPaletteButton.addEventListener("click", () => {
    originalPaletteButton.classList.add("selected");
    vibrantPaletteButton.classList.remove("selected");
    palette = 1;
    localStorage.setItem("palette", 1);
    changeColorPalette();
})

vibrantPaletteButton.addEventListener("click", () => {
    originalPaletteButton.classList.remove("selected");
    vibrantPaletteButton.classList.add("selected");
    palette = 2;
    localStorage.setItem("palette", 2);
    changeColorPalette();
})

const changeColorPalette = () => {
    if (palette == 1) {
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
    } else if (palette == 2) {
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
changeColorPalette();


// >> Bot Frequency settings
const botFrequencyContainer = document.getElementById("botFrequency");
const frequency100msButton = document.getElementById("100ms");
const frequency200msButton = document.getElementById("200ms");
const frequency500msButton = document.getElementById("500ms");
const frequencyWarningTooltip = document.getElementById("highFrequencyWarning");
let frequency = localStorage.getItem("botFrequency");

frequency100msButton.addEventListener("click", () => {
    frequency100msButton.classList.add("selected");
    frequency200msButton.classList.remove("selected");
    frequency500msButton.classList.remove("selected");

    frequency = 100;
    localStorage.setItem("botFrequency", 100);
})

frequency200msButton.addEventListener("click", () => {
    frequency100msButton.classList.remove("selected");
    frequency200msButton.classList.add("selected");
    frequency500msButton.classList.remove("selected");

    frequency = 200;
    localStorage.setItem("botFrequency", 200);
})

frequency500msButton.addEventListener("click", () => {
    frequency100msButton.classList.remove("selected");
    frequency200msButton.classList.remove("selected");
    frequency500msButton.classList.add("selected");

    frequency = 500;
    localStorage.setItem("botFrequency", 500);
})

const changeBotFrequencyButtonsAppearance = () => {
    if (frequency == "100") {
        frequency100msButton.classList.add("selected");
        frequency200msButton.classList.remove("selected");
        frequency500msButton.classList.remove("selected");
    } else if (frequency == "200") {
        frequency100msButton.classList.remove("selected");
        frequency200msButton.classList.add("selected");
        frequency500msButton.classList.remove("selected");
    } else if (frequency == "500") {
        frequency100msButton.classList.remove("selected");
        frequency200msButton.classList.remove("selected");
        frequency500msButton.classList.add("selected");
    }
}
changeBotFrequencyButtonsAppearance();

frequency100msButton.addEventListener("mousemove", (e) => {
    frequencyWarningTooltip.style.display = 'flex';
    frequencyWarningTooltip.style.top = `${e.pageY - 30}px`;
    frequencyWarningTooltip.style.left = `${e.pageX}px`;
})

frequency100msButton.addEventListener("mouseleave", () => {
    frequencyWarningTooltip.style.display = 'none';
})

// >> Bot settings
const enableBotButton = document.getElementById("enableBot");
const disableBotButton = document.getElementById("disableBot");
let botIsEnabled = localStorage.getItem("bot");

enableBotButton.addEventListener("click", () => {
    enableBotButton.classList.add("selected");
    disableBotButton.classList.remove("selected");

    botFrequencyContainer.style.opacity = '1';
    botFrequencyContainer.style.pointerEvents = 'all';

    botIsEnabled = true;
    localStorage.setItem("bot", true);
    pressTargetedKey();
})

disableBotButton.addEventListener("click", () => {
    enableBotButton.classList.remove("selected");
    disableBotButton.classList.add("selected");

    botFrequencyContainer.style.opacity = '0.5';
    botFrequencyContainer.style.pointerEvents = 'none';

    botIsEnabled = false;
    localStorage.setItem("bot", false);
})

const pressTargetedKey = () => {
    if (botIsEnabled) {
        window.setTimeout(pressTargetedKey, frequency);
        document.dispatchEvent(new KeyboardEvent('keypress', {'key': targetedKey}));
    }
}

const changeBotButtonsAppearance = () => {
    if (botIsEnabled == 'false') {
        enableBotButton.classList.remove("selected");
        disableBotButton.classList.add("selected");

        botFrequencyContainer.style.opacity = '0.5';
        botFrequencyContainer.style.pointerEvents = 'none';
    } else {
        enableBotButton.classList.add("selected");
        disableBotButton.classList.remove("selected");

        botFrequencyContainer.style.opacity = '1';
        botFrequencyContainer.style.pointerEvents = 'all';

        pressTargetedKey();
    }
}
changeBotButtonsAppearance();


// >> Customize Interface settings
const keyCountButton = document.getElementById("showKeyCount");
const kpsButton = document.getElementById("showKPS");

const clickedKeysCounter = document.getElementById("counter");
const keysPerSecondCounter = document.getElementById("keysPerSecond");

let showKeyCount = localStorage.getItem("showCount");
let showKPS = localStorage.getItem("showKPS");

keyCountButton.addEventListener("click", () => {
    if (showKeyCount === true) {
        showKeyCount = false;
        localStorage.setItem("showCount", false);

        keyCountButton.classList.remove("selected");
        clickedKeysCounter.style.display = 'none';
    } else {
        showKeyCount = true;
        localStorage.setItem("showCount", true);
        keyCountButton.classList.add("selected");
        clickedKeysCounter.style.display = 'flex';
    }
})

kpsButton.addEventListener("click", () => {
    if (showKPS === true) {
        showKPS = false;
        localStorage.setItem("showKPS", false);

        kpsButton.classList.remove("selected");
        keysPerSecondCounter.style.display = 'none';
    } else {
        showKPS = true;
        localStorage.setItem("showKPS", true);

        kpsButton.classList.add("selected");
        keysPerSecondCounter.style.display = 'flex';
    }
})

changeCustomizeInterfaceButtonsAppearance = () => {
    if (showKeyCount == 'true') {
        showKeyCount = true;
        keyCountButton.classList.add("selected");
        clickedKeysCounter.style.display = 'flex';
    } else {
        showKeyCount = false;
        keyCountButton.classList.remove("selected");
        clickedKeysCounter.style.display = 'none';
    }

    if (showKPS == 'true') {
        showKPS = true;
        kpsButton.classList.add("selected");
        keysPerSecondCounter.style.display = 'flex';
    } else {
        showKPS = false;
        kpsButton.classList.remove("selected");
        keysPerSecondCounter.style.display = 'none';
    }
}
changeCustomizeInterfaceButtonsAppearance();

// >> Footer Selection settings
const standardFooterButton = document.getElementById("showStandardFooter");
const minimalFooterButton = document.getElementById("showMinimalFooter");

const footerContainer = document.querySelector("footer");
const standardFooter = document.getElementById("standardFooter");
const minimalFooter = document.getElementById("minimalFooter");

let footer = localStorage.getItem("footer"); // 1: standard, 2: minimal
let oldFooter = localStorage.getItem("footer");

standardFooterButton.addEventListener("click", () => {
    footer = 1;
    localStorage.setItem("footer", 1);

    standardFooterButton.classList.add("selected");
    minimalFooterButton.classList.remove("selected");

    footerContainer.style.width = '100vw';
    footerContainer.style.justifyContent = 'auto';
    footerContainer.style.borderTopRightRadius = '0';

    standardFooter.style.display = 'flex';
    minimalFooter.style.display = 'none';
})

minimalFooterButton.addEventListener("click", () => {
    footer = 2;
    localStorage.setItem("footer", 2);

    standardFooterButton.classList.remove("selected");
    minimalFooterButton.classList.add("selected");

    footerContainer.style.width = '120px';
    footerContainer.style.justifyContent = 'space-around';
    footerContainer.style.borderTopRightRadius = '15px';
    standardFooter.style.display = 'none';
    minimalFooter.style.display = 'flex';
})

const changeFooterButtonAppearance = () => {
    if (footer == 1) {
        standardFooterButton.classList.add("selected");
        minimalFooterButton.classList.remove("selected");

        footerContainer.style.width = '100vw';
        footerContainer.style.justifyContent = 'auto';
        footerContainer.style.borderTopRightRadius = '0';

        standardFooter.style.display = 'flex';
        minimalFooter.style.display = 'none';
    } else {
        standardFooterButton.classList.remove("selected");
        minimalFooterButton.classList.add("selected");

        footerContainer.style.width = '120px';
        footerContainer.style.justifyContent = 'space-around';
        footerContainer.style.borderTopRightRadius = '15px';
        standardFooter.style.display = 'none';
        minimalFooter.style.display = 'flex';
    }
}
changeFooterButtonAppearance();

const forceMinimalFooterOnLowWidth = () => {
    if (window.innerWidth < 680) {
        minimalFooterButton.click();
    }
}
forceMinimalFooterOnLowWidth();

window.addEventListener("resize", forceMinimalFooterOnLowWidth);