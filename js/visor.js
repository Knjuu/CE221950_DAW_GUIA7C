const images = [
    {
        src: 'img/imagen1.jpg',
    },
    {
        src: 'img/imagen2.jpg',
    },
    {
        src: 'img/imagen3.jpg',
    },
    {
        src: 'img/imagen4.jpg',
    },
    {
        src: 'img/imagen5.jpg',
    },
    {
        src: 'img/imagen6.jpg',
    },
    {
        src: 'img/imagen7.jpg',
    },
    {
        src: 'img/imagen8.jpg',
    },
    {
        src: 'img/imagen9.jpg',
    },
    {
        src: 'img/imagen10.jpg',
    },
];

const imageContainer = document.getElementById('image-container');
const image = document.getElementById('image');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');
const imageNumber = document.getElementById('image-number');

let currentIndex = 0;

function updateImage() {
    const currentImage = images[currentIndex];
    image.src = currentImage.src;
    imageNumber.textContent = `Imagen ${currentIndex + 1} de ${images.length}`;
}

function nextImage() {
    currentIndex++;
    if (currentIndex >= images.length) {
        currentIndex = 0; 
    }
    updateImage();
}

function prevImage() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = images.length - 1; 
    }
    updateImage();
}

nextButton.addEventListener('click', nextImage);
prevButton.addEventListener('click', prevImage);

document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowRight') {
        nextImage();
    } else if (event.key === 'ArrowLeft') {
        prevImage();
    }
});

updateImage();
