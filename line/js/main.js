//변수

const SHOWING_CLASS = "showing";
const firstSlide = document.querySelector(".slide_itmes:first-child");
const lastSlide = document.querySelector(".slide_itmes:last-child");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

const nextSlides = () => {
  const currentSlide = document.querySelector(`.${SHOWING_CLASS}`);
  if (currentSlide) {
    currentSlide.classList.remove(SHOWING_CLASS);
    const nextSlide = currentSlide.nextElementSibling;
    if (nextSlide) {
      nextSlide.classList.add(SHOWING_CLASS);
    } else {
      firstSlide.classList.add(SHOWING_CLASS);
    }
  } else {
    firstSlide.classList.add(SHOWING_CLASS);
  }
};

const prevSlides = () => {
  const currentSlide = document.querySelector(`.${SHOWING_CLASS}`);
  if (currentSlide) {
    currentSlide.classList.remove(SHOWING_CLASS);
    const prevSlide = currentSlide.previousElementSibling;
    if (prevSlide) {
      prevSlide.classList.add(SHOWING_CLASS);
    } else {
      lastSlide.classList.add(SHOWING_CLASS);
    }
  } else {
    lastSlide.classList.add(SHOWING_CLASS);
  }
};

nextSlides();

next.addEventListener("click", nextSlides);
prev.addEventListener("click", prevSlides);
