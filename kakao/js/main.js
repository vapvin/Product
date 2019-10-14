// 변수지정

const SHOWING_CLASS = "showing";
const firstSlide = document.querySelector(".slider_item:first-child");
const lastSlide = document.querySelector(".slider_item:last-child");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");
const btn4 = document.querySelector("#btn4");
const mega1 = document.querySelector(".menu1");
const mega2 = document.querySelector(".menu2");
const mega3 = document.querySelector(".menu3");
const mega4 = document.querySelector(".menu4");
//함수 선언

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

nextBtn.addEventListener("click", nextSlides);
prevBtn.addEventListener("click", prevSlides);

btn1.addEventListener("mouseover", () => {
  mega1.style.display = "flex";
});

btn1.addEventListener("mouseout", () => {
  mega1.style.display = "none";
});

btn2.addEventListener("mouseover", () => {
  mega2.style.display = "flex";
});

btn2.addEventListener("mouseout", () => {
  mega2.style.display = "none";
});

btn3.addEventListener("mouseover", () => {
  mega3.style.display = "flex";
});

btn3.addEventListener("mouseout", () => {
  mega3.style.display = "none";
});

btn4.addEventListener("mouseover", () => {
  mega4.style.display = "flex";
});

btn4.addEventListener("mouseout", () => {
  mega4.style.display = "none";
});
