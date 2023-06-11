const keys = document.getElementsByTagName("li");
const keypressCount = document.getElementById("count");

const stringsToChange = document.getElementsByClassName("change");

let targetedKey = '';
let count = 0;

const resetTargetedKey = () => {
    for (const key of keys) {
        key.classList.remove("targeted");
    }
}

const targetRandomKey = () => {
    let keyIndex = 0;
    
    while (
        (keyIndex == 0) || (keyIndex == 11) || (keyIndex == 12) || (keyIndex == 1) ||
        (keyIndex == 23) || (keyIndex == 24) || (keyIndex == 34) || (keyIndex == 35) ||
        (keyIndex == 36) || (keyIndex == 44) || (keyIndex == 45) || (keyIndex == 46)
    ) {
        let totalKeys = keys.length - 1;
        keyIndex = Math.floor(Math.random() * totalKeys);
    }

    keys[keyIndex].classList.add("targeted");
    targetedKey = keys[keyIndex].innerText.toLowerCase();
}
targetRandomKey();

const animateKeypressCount = () => {
    keypressCount.classList.add('animate');
    window.setTimeout(() => {
        keypressCount.classList.remove('animate');
    }, 400)
}

const animateKey = (key) => {
    key.classList.add("pressed");
    window.setTimeout(() => {
        key.classList.remove('pressed');
    }, 200);
}

const updateStringsToChange = () => {
    if (count === 1) {
        stringsToChange[0].innerText = 'key';
    } else {
        stringsToChange[0].innerText = 'keys';
    }
}

const updateKeypressCount = () => {
    count++;
    keypressCount.innerText = count;
    updateStringsToChange();
}

document.addEventListener("keypress", (e) => {
    if (e.key === targetedKey) {
        resetTargetedKey();
        updateKeypressCount();
        animateKeypressCount();
        targetRandomKey();
    } else {
        for (const key of keys) {
            if (key.innerText == e.key.toUpperCase()) {
                animateKey(key);
            }
        }
    }
})