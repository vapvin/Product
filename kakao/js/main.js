// 변수지정
const navColor = document.querySelector("nav");

const SHOWING_CLASS = "showing";
const firstSlide = document.querySelector(".slider_item:first-child");
const lastSlide = document.querySelector(".slider_item:last-child");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");
const btn4 = document.querySelector("#btn4");
const mega = document.getElementsByClassName("drop");

const slideNum = document.querySelector(".slide_number");
const slideItems = document.getElementsByClassName("slider_item");

let count = 1;
//함수 선언

const nextSlides = () => {
  const currentSlide = document.querySelector(`.${SHOWING_CLASS}`);
  if (currentSlide) {
    currentSlide.classList.remove(SHOWING_CLASS);
    const nextSlide = currentSlide.nextElementSibling;
    if (nextSlide) {
      nextSlide.classList.add(SHOWING_CLASS);
      count++;
    } else {
      firstSlide.classList.add(SHOWING_CLASS);
      count = 1;
    }
  } else {
    firstSlide.classList.add(SHOWING_CLASS);
    count = 1;
  }

  slideNum.innerHTML = `${count}/${slideItems.length}`;
};

const prevSlides = () => {
  const currentSlide = document.querySelector(`.${SHOWING_CLASS}`);
  if (currentSlide) {
    currentSlide.classList.remove(SHOWING_CLASS);
    const prevSlide = currentSlide.previousElementSibling;
    if (prevSlide) {
      prevSlide.classList.add(SHOWING_CLASS);
      count--;
    } else {
      lastSlide.classList.add(SHOWING_CLASS);
      count = 4;
    }
  } else {
    lastSlide.classList.add(SHOWING_CLASS);
    count = 4;
  }
  slideNum.innerHTML = `${count}/${slideItems.length}`;
};

nextSlides();

nextBtn.addEventListener("click", nextSlides);
prevBtn.addEventListener("click", prevSlides);
setInterval(nextSlides, 5000);

btn1.addEventListener("mouseover", () => {
  mega[0].style.display = "block";
});

btn1.addEventListener("mouseout", () => {
  mega[0].style.display = "none";
});

btn2.addEventListener("mouseover", () => {
  mega[1].style.display = "flex";
});

btn2.addEventListener("mouseout", () => {
  mega[1].style.display = "none";
});

btn3.addEventListener("mouseover", () => {
  mega[2].style.display = "flex";
});

btn3.addEventListener("mouseout", () => {
  mega[2].style.display = "none";
});

btn4.addEventListener("mouseover", () => {
  mega[3].style.display = "flex";
});

btn4.addEventListener("mouseout", () => {
  mega[3].style.display = "none";
});

navColor.addEventListener("mouseover", () => {
  navColor.style.background = "white";
});

navColor.addEventListener("mouseout", () => {
  navColor.style.background = "none";
});

const scrolls = () => {
  if (document.documentElement.scrollTop > 30) {
    navColor.style.background = "white";
  } else {
    navColor.style.background = "none";
  }
};

window.onscroll = function() {
  scrolls();
};
