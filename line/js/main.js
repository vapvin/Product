//변수

//Classes

const SHOWING_CLASS = "showing";
const DOTS_CLASS = "bging";
const MODAL_CLASS = "modal_open";
const FIXED_CLASS = "fix";

//Slide

const firstSlide = document.querySelector(".slide_itmes:first-child");
const lastSlide = document.querySelector(".slide_itmes:last-child");
const firstDots = document.querySelector(".dot:first-child");
const lastDots = document.querySelector(".dot:last-child");

const slides = document.getElementsByClassName("slide_itmes");
const dots = document.getElementsByClassName("dot");

const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

//Modal

const modal = document.querySelector(".modal_overlay");
const openBtn = document.querySelector(".openModal");
const closeBtn = document.querySelector(".modal_close");

//Fixed Nav

const nav = document.querySelector("nav");

//Function

//slides

const nextSlides = () => {
  const currentSlide = document.querySelector(`.${SHOWING_CLASS}`);
  const currentDots = document.querySelector(`.${DOTS_CLASS}`);
  if (currentSlide) {
    currentSlide.classList.remove(SHOWING_CLASS);
    currentDots.classList.remove(DOTS_CLASS);
    const nextSlide = currentSlide.nextElementSibling;
    const nextDots = currentDots.nextElementSibling;
    if (nextSlide) {
      nextSlide.classList.add(SHOWING_CLASS);
      nextDots.classList.add(DOTS_CLASS);
    } else {
      firstSlide.classList.add(SHOWING_CLASS);
      firstDots.classList.add(DOTS_CLASS);
    }
  } else {
    firstSlide.classList.add(SHOWING_CLASS);
    firstDots.classList.add(DOTS_CLASS);
  }
};

const prevSlides = () => {
  const currentSlide = document.querySelector(`.${SHOWING_CLASS}`);
  const currentDots = document.querySelector(`.${DOTS_CLASS}`);
  if (currentSlide) {
    currentSlide.classList.remove(SHOWING_CLASS);
    currentDots.classList.remove(DOTS_CLASS);
    const prevSlide = currentSlide.previousElementSibling;
    const prevDots = currentDots.previousElementSibling;
    if (prevSlide) {
      prevSlide.classList.add(SHOWING_CLASS);
      prevDots.classList.add(DOTS_CLASS);
    } else {
      lastSlide.classList.add(SHOWING_CLASS);
      lastDots.classList.add(DOTS_CLASS);
    }
  } else {
    lastSlide.classList.add(SHOWING_CLASS);
    lastDots.classList.add(DOTS_CLASS);
  }
};

const thisSlide = n => {
  const currentSlide = document.querySelector(`.${SHOWING_CLASS}`);
  const currentDots = document.querySelector(`.${DOTS_CLASS}`);

  if (currentSlide) {
    currentSlide.classList.remove(SHOWING_CLASS);
    currentDots.classList.remove(DOTS_CLASS);
  }

  slides[n].classList.add(SHOWING_CLASS);
  dots[n].classList.add(DOTS_CLASS);
};

// This Modal

const openModal = () => {
  modal.classList.add(MODAL_CLASS);
};

const closeModal = () => {
  modal.classList.remove(MODAL_CLASS);
};

//Fixed Nav

const fixed = () => {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add(FIXED_CLASS);
  } else {
    nav.classList.remove(FIXED_CLASS);
  }
};

// Scroll Moves

const onScroll = event => {
  const sections = document.querySelectorAll(".after_effec");
  const scrollPos =
    window.pageYOffset ||
    document.documentElement.scrollTop ||
    document.body.scrollTop;

  for (var i = 0; i < sections.length; i++) {
    const currLink = sections[i];
    const val = currLink.getAttribute("href");
    const refElement = document.querySelector(val);
    if (
      refElement.offsetTop <= scrollPos &&
      refElement.offsetTop + refElement.offsetHeight > scrollPos
    ) {
      document.querySelector(".after_effec").classList.remove("after_block");
      currLink.classList.add("after_block");
    } else if (!document.querySelector(".after_block")) {
      sections[0].classList.add("after_block");
      currLink.classList.remove("after_block");
    } else {
      currLink.classList.remove("after_block");
    }
  }
};

// 함수실행

nextSlides();

next.addEventListener("click", nextSlides);
prev.addEventListener("click", prevSlides);

openBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);

window.addEventListener("scroll", fixed);

window.document.addEventListener("scroll", onScroll);
