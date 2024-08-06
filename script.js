const images = [
    'img1.jpeg',
    'img2.jpeg',
    'img3.jpeg',
    'img4.jpeg',
    'img5.jpeg',
    'img6.jpeg',
];

let imgIndex = 0;

const imgElement = document.getElementById('img');

function prev() {
    if (imgIndex == 0) {
        imgIndex = images.length - 1;
    } else {
        imgIndex--;
    }
    imgElement.src = images[imgIndex];
}

function next() {
    if (imgIndex == images.length - 1) {
        imgIndex = 0;
    } else {
        imgIndex++;
    }
    imgElement.src = images[imgIndex];
}
