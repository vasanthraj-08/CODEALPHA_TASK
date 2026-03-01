const images = document.querySelectorAll('.gallery-img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.querySelector('.lightbox-img');
const closeBtn = document.querySelector('.close');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

let currentIndex = 0;

// Open Lightbox
images.forEach((img, index) => {
    img.addEventListener('click', () => {
        lightbox.style.display = "flex";
        lightboxImg.src = img.src;
        currentIndex = index;
    });
});

// Close Lightbox
closeBtn.addEventListener('click', () => {
    lightbox.style.display = "none";
});

// Next Image
nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    lightboxImg.src = images[currentIndex].src;
});

// Previous Image
prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    lightboxImg.src = images[currentIndex].src;
});

// Filter Function
function filterImages(category) {
    images.forEach(img => {
        if (category === "all" || img.classList.contains(category)) {
            img.style.display = "block";
        } else {
            img.style.display = "none";
        }
    });
}