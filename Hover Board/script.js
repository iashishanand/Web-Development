const container = document.querySelector('.container');
const SQUARES = 500;
const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71'];
const heading = document.querySelector('h1');

for (let i = 0; i < SQUARES; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    container.append(square);

    square.addEventListener('mouseover', () => {
        setColorToEl(square);
    });

    square.addEventListener('mouseout', () => {
        removeColorFromEl(square);
    });
}

function setColorToEl(element) {
    const color = getRandomColor();
    element.style.backgroundColor = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColorFromEl(element) {
    element.style.backgroundColor = '#1d1d1d';
    element.style.boxShadow = '0 0 2px #000';
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}

function changeHeading() {
    const randColor = getRandomColor();
    heading.style.color = randColor;
}

setInterval(changeHeading, 1000);