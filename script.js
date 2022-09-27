const toggleButton = document.getElementById('toggleButton');
const naviList = document.getElementById('navi-list');

toggleButton.addEventListener('click', () => {
    naviList.classList.toggle('active');
})






let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function () {
    nextImage();
}, 3000)


function nextImage() {
    count++;
    if (count > 5) {
        count = 1;
    }

    document.getElementById("radio" + count).checked = true;

}

/* outro carrossel */

let countOne = 6;
document.getElementById("radio6").checked = true;

setInterval(function () {
    nextImg();
}, 3000)


function nextImg() {
    countOne++;
    if (countOne > 10) {
        countOne = 1;
    }

    document.getElementById("radio" + countOne).checked = true;

}

/* outro carrossel */

let countTwo = 11;
document.getElementById("radio11").checked = true;

setInterval(function () {
    nextImag();
}, 3000)


function nextImag() {
    countTwo++;
    if (countTwo > 15) {
        countTwo = 1;
    }

    document.getElementById(`radio${countTwo}`).checked = true;

}