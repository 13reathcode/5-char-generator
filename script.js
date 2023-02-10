'strict';

// ELEMENTS
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelector('.show-modal');

let interval = 1000;

////////////////////////////////////////
// Functions

// FAQ / MODAL WINDOW

const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

const openModal = function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

// ---------- Open modal ----------

// On click
btnOpenModal.addEventListener('click', openModal);

// ---------- Closing modal ----------

// By pressing on X
btnCloseModal.addEventListener('click', closeModal);

// By pressing on overlay
overlay.addEventListener('click', closeModal);

// By pressing ESCAPE button
document.addEventListener('keydown', function (button) {
    if (button.key === 'Escape' && !modal.classList.contains('hidden')) closeModal();
});

// MAIN PROGRAME LOGIC

const label = document.getElementById('output');

const changeColor = (value, str) => (label.innerHTML = str.fontcolor(value));

const changeText = (str) => (label.textContent = str);

const labelLogic = function () {
    // Generating a random number
    let string = Math.random().toString(36).slice(2, 7);

    // If not #3 then continue
    if (!string.includes(0)) {
        changeText(string);
        // Now check #2 and #1
        // Checking if string consists of all digits
        if (/^\d+$/.test(string)) return changeColor('blue', string);
        // Checking if it is palindome
        if (string.slice(0, 2) === string.slice(-2).split('').reverse().join('')) changeColor('red', string);
    } else changeText('There was zero');
};

setInterval(labelLogic, interval);
