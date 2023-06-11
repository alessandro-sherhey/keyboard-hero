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
    let totalKeys = keys.length - 1;
    let keyIndex = Math.floor(Math.random() * totalKeys);

    keys[keyIndex].classList.add("targeted");
    targetedKey = keys[keyIndex].innerText.toLowerCase();
}
targetRandomKey();

const updateStringsToChange = () => {
    if (count === 1) {
        stringsToChange[0].innerText = 'key';
    } else {
        stringsToChange[0].innerText = 'keys';
    }
}

const animateKeypressCount = () => {
    keypressCount.classList.add('animate');
    window.setTimeout(() => {
        keypressCount.classList.remove('animate');
    }, 400)
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
    }
})

const handleKeyClick = () => {
}