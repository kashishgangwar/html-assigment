
let photos = [
    "img1.jpg",
    "img2.jpg",
    "img3.jpg",
    "img4.jpg",
    "img5.jpg"
];

let index = 0;

let slide = document.getElementById("slide");

document.getElementById("next").addEventListener("click", nextPhoto);
document.getElementById("prev").addEventListener("click", prevPhoto);


function nextPhoto() {
    index++;
    if (index >= photos.length) index = 0;
    slide.src = photos[index];
}

function prevPhoto() {
    index--;
    if (index < 0) index = photos.length - 1;
    slide.src = photos[index];
}

let autoPlay = setInterval(nextPhoto, 3000);

slide.addEventListener("mouseover", function () {
    clearInterval(autoPlay);      
});

slide.addEventListener("mouseout", function () {
    autoPlay = setInterval(nextPhoto, 3000); 
});