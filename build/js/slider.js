let prev = document.querySelector(".slider__control--prev")
let next = document.querySelector(".slider__control--next")
let slidesFront = document.querySelectorAll(".slider__front-item");
let slidesBack = document.querySelectorAll(".slider__back-item");
let slideIndex = 1;

function showSlides(i, slides) {
  if (i > slides.length) {
    slideIndex = 1
  }

  if (i < 1) {
    slideIndex = slides.length
  }

  for (let slide of slides) {
      slide.style.display = "none";
  }

  slides[slideIndex-1].style.display = "block";
};

showSlides(slideIndex, slidesFront);
showSlides(slideIndex, slidesBack);

function showSlidesBack() {
  showSlides(slideIndex, slidesBack)
}

prev.onclick = function(){
  showSlides(slideIndex -= 1, slidesFront);
  setTimeout(showSlidesBack, 500);
};

next.onclick = function(){
  showSlides(slideIndex += 1, slidesFront);
  setTimeout(showSlidesBack, 500);
};
