// Classes

var SHOWING_CLASS = "showing";

//Elements

var firstSlide = document.querySelector(".slide_items:first-child");
var lastSlide = document.querySelector(".slide_items:last-child");
var nextBtn = document.querySelector(".next");
var prevBtn = document.querySelector(".prev");

// Functions

function nextSlides() {
  var currentSlide = document.querySelector(`.${SHOWING_CLASS}`);

  if (currentSlide) {
    currentSlide.classList.remove(SHOWING_CLASS);
    var nextSlide = currentSlide.nextElementSibling;

    if (nextSlide) {
      nextSlide.classList.add(SHOWING_CLASS);
    } else {
      firstSlide.classList.add(SHOWING_CLASS);
    }
  } else {
    firstSlide.classList.add(SHOWING_CLASS);
  }
}

function prevSlides() {
  var currentSlide = document.querySelector(`.${SHOWING_CLASS}`);

  if (currentSlide) {
    currentSlide.classList.remove(SHOWING_CLASS);
    var prevSlide = currentSlide.previousElementSibling;

    if (prevSlide) {
      prevSlide.classList.add(SHOWING_CLASS);
    } else {
      lastSlide.classList.add(SHOWING_CLASS);
    }
  } else {
    lastSlide.classList.add(SHOWING_CLASS);
  }
}

// Play the Functions

nextSlides();
nextBtn.addEventListener("click", nextSlides);
prevBtn.addEventListener("click", prevSlides);
