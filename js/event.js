// option 2
function makeRed() {
    document.body.style.backgroundColor = 'red';
}


// option 3
const makeBlueButton = document.getElementById('make-blue');
makeBlueButton.onclick = makeBlue;
function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}


// option 3.0
const makePurpleButton = document.getElementById('make-purple');
makePurpleButton.onclick = function () {
    document.body.style.backgroundColor = 'purple';
}


// option 4
const pinkButton = document.getElementById('make-pink');
pinkButton.addEventListener('click', makePink);
function makePink() {
    document.body.style.backgroundColor = 'pink'
}

// option 4.2
const makeGreen = document.getElementById('make-green');
makeGreen.addEventListener('click', function () {
    document.body.style.backgroundColor = 'green';
})