// Classes

const SHOWING_CLASS = "showing";
const CIRCLE_CLASS = "circles";

//Elements

const firstSlide = document.querySelector(".slide_items:first-child");
const lastSlide = document.querySelector(".slide_items:last-child");
const firstCircle = document.querySelector(".circle:first-child");
const lastCircle = document.querySelector(".circle:last-child");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

// Functions

function nextSlides() {
  const currentSlide = document.querySelector(`.${SHOWING_CLASS}`);
  const currentCircle = document.querySelector(`.${CIRCLE_CLASS}`);

  if (currentSlide) {
    currentSlide.classList.remove(SHOWING_CLASS);
    currentCircle.classList.remove(CIRCLE_CLASS);

    const nextSlide = currentSlide.nextElementSibling;
    const nextCircle = currentCircle.nextElementSibling;

    if (nextSlide) {
      nextSlide.classList.add(SHOWING_CLASS);
      nextCircle.classList.add(CIRCLE_CLASS);

    } else {
      firstSlide.classList.add(SHOWING_CLASS);
      firstCircle.classList.add(CIRCLE_CLASS);

    }
  } else {
    firstSlide.classList.add(SHOWING_CLASS);
    firstCircle.classList.add(CIRCLE_CLASS);
  }
}

function prevSlides() {
  const currentSlide = document.querySelector(`.${SHOWING_CLASS}`);
  const currentCircle = document.querySelector(`.${CIRCLE_CLASS}`);


  if (currentSlide) {
    currentSlide.classList.remove(SHOWING_CLASS);
    currentCircle.classList.remove(CIRCLE_CLASS);
    const prevSlide = currentSlide.previousElementSibling;
    const prevCircle = currentCircle.previousElementSibling;

    if (prevSlide) {
      prevSlide.classList.add(SHOWING_CLASS);
      prevCircle.classList.add(CIRCLE_CLASS);
    } else {
      lastSlide.classList.add(SHOWING_CLASS);
      lastCircle.classList.add(CIRCLE_CLASS);
    }
  } else {
    lastSlide.classList.add(SHOWING_CLASS);
    lastCircle.classList.add(CIRCLE_CLASS);
  }
}

// Play the Functions

nextSlides();
nextBtn.addEventListener("click", nextSlides);
prevBtn.addEventListener("click", prevSlides);

const nav = document.querySelector("nav");

const fixFunction = () => {
  if (document.documentElement.scrollTop > 20) {
    nav.style.background = "rgba(0,0,0,0.7)";
  } else {
    nav.style.background = "none";
  }
}

window.onscroll = function () {
  fixFunction();
}