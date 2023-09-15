const images = ["0.jpg", "1.jpg", "2.jpg"];
const chosenImage = images[Math.floor(Math.random() * images.length)];

document.body.style.backgroundImage = `radial-gradient(transparent, rgba(0, 0, 0, 0.7)), url(img/${chosenImage})`;
