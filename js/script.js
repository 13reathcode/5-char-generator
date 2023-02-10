'strict';

// ELEMENTS
const modal = document.querySelector('.modal-box');
const overlay = document.querySelector('.modal__overlay');

const btnCloseModal = document.querySelector('.modal--close');
const btnOpenModal = document.querySelector('.modal--show');

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

btnOpenModal.addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (button) {
    if (button.key === 'Escape' && !modal.classList.contains('hidden')) closeModal();
});

// MAIN PROGRAME LOGIC

const label = document.getElementById('output');

const changeColor = (value, str) => (label.innerHTML = str.fontcolor(value));

const changeText = (str) => (label.textContent = str);

const labelLogic = function () {
    let string = Math.random().toString(36).slice(2, 7);

    if (!string.includes(0)) {
        changeText(string);

        if (/^\d+$/.test(string)) return changeColor('blue', string);

        if (string.slice(0, 2) === string.slice(-2).split('').reverse().join('')) changeColor('red', string);
    } else changeText('There was zero');
};

setInterval(labelLogic, interval);
