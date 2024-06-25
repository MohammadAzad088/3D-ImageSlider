const ImageElement = document.querySelector(".image-container");

const prevEle = document.getElementById("prev");
const nextEle = document.getElementById("next");

let x = 0;
let timer;

function updateGallery(x) {
  ImageElement.style.transform = `perspective(1000px) rotateY(${x}deg)`;

  timer = setTimeout(() => {
    x = x - 45;
    updateGallery(x);
  }, 3000);
}

updateGallery(x);

prevEle.addEventListener("click", () => {
  x = x + 45;
  clearTimeout(timer);
  updateGallery(x);
});

nextEle.addEventListener("click", () => {
  x = x - 45;
  clearTimeout(timer);
  updateGallery(x);
});
