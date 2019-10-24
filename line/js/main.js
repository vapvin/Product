//변수

//Classes

const SHOWING_CLASS = "showing";
const DOTS_CLASS = "bging";
const MODAL_CLASS = "modal_open";
const FIXED_CLASS = "fix";
const GALLERY_CLASS = "show_gallery";
const TAB_CLASS = "select_tab";

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

// Gellery Slides Selector

const firstGalleryItems = document.querySelector(
  ".gallery_box_items:first-child"
);
const lastGalleryItems = document.querySelector(
  ".gallery_box_items:last-child"
);
const galleryItems = document.querySelectorAll(".gallery_box_items");
const galleryNext = document.querySelector(".gallery_next");
const galleryPrev = document.querySelector(".gallery_prev");

const firstTabItems = document.querySelector(".tab_items:first-child");
const lastTabItems = document.querySelector(".tab_items:last-child");
const tabNext = document.querySelector(".gallery_tab_next");
const tabPrev = document.querySelector(".gallery_tab_prev");
const currentTab = document.querySelector(`.${TAB_CLASS}`);
const tabs = document.querySelectorAll(".tab_items");
const tabImg = document.querySelector(".tab_img");

// Pagenations

// const pageImgBox = document.querySelectorAll(".page_img > img");
// const pageContent = document.querySelectorAll(".page_content");
// const pageImgs = [
//   { img: "img/pages1.jpg" },
//   { img: "img/pages2.jpg" },
//   { img: "img/pages3.jpg" },
//   { img: "img/pages4.jpg" },
//   { img: "img/pages5.jpg" },
//   { img: "img/pages6.jpg" },
//   { img: "img/pages7.jpg" },
//   { img: "img/pages8.jpg" },
//   { img: "img/pages9.jpg" },
//   { img: "img/pages10.jpg" },
//   { img: "img/pages11.jpg" },
//   { img: "img/pages12.jpg" },
//   { img: "img/pages13.jpg" },
//   { img: "img/pages14.jpg" },
//   { img: "img/pages15.jpg" }
// ];

// const links = document.querySelectorAll(".links_a");

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

// Gallery Slides

const boxSlideNext = () => {
  const currentGallery = document.querySelector(`.${GALLERY_CLASS}`);
  const currentTab = document.querySelector(`.${TAB_CLASS}`);
  if (currentGallery) {
    currentGallery.classList.remove(GALLERY_CLASS);
    currentTab.classList.remove(TAB_CLASS);
    const nextGallery = currentGallery.nextElementSibling;
    const nextTab = currentTab.nextElementSibling;

    if (nextGallery) {
      nextGallery.classList.add(GALLERY_CLASS);
      nextTab.classList.add(TAB_CLASS);
    } else {
      firstGalleryItems.classList.add(GALLERY_CLASS);
      firstTabItems.classList.add(TAB_CLASS);
    }
  } else {
    firstGalleryItems.classList.add(GALLERY_CLASS);
    firstTabItems.classList.add(TAB_CLASS);
  }

  if (tabs[0].classList.contains(TAB_CLASS)) {
    tabImg.style.left = "0px";
  }

  if (currentTab == tabs[4]) {
    tabImg.style.left = "-100%";
  }
};

const boxSlidePrev = () => {
  const currentGallery = document.querySelector(`.${GALLERY_CLASS}`);
  const currentTab = document.querySelector(`.${TAB_CLASS}`);

  if (currentGallery) {
    currentGallery.classList.remove(GALLERY_CLASS);
    currentTab.classList.remove(TAB_CLASS);

    const prevGallery = currentGallery.previousElementSibling;
    const prevTab = currentTab.previousElementSibling;

    if (prevGallery) {
      prevGallery.classList.add(GALLERY_CLASS);
      prevTab.classList.add(TAB_CLASS);
    } else {
      lastGalleryItems.classList.add(GALLERY_CLASS);
      lastTabItems.classList.add(TAB_CLASS);
    }
  } else {
    lastGalleryItems.classList.add(GALLERY_CLASS);
    lastTabItems.classList.add(TAB_CLASS);
  }

  if (tabs[9].classList.contains(TAB_CLASS)) {
    tabImg.style.left = "-100%";
  }

  if (currentTab == tabs[5]) {
    tabImg.style.left = "0";
  }
};

const thisGallery = o => {
  const currentGallery = document.querySelector(`.${GALLERY_CLASS}`);
  const currentTab = document.querySelector(`.${TAB_CLASS}`);

  if (currentGallery) {
    currentGallery.classList.remove(GALLERY_CLASS);
    currentTab.classList.remove(TAB_CLASS);
  }

  galleryItems[o].classList.add(GALLERY_CLASS);
  tabs[o].classList.add(TAB_CLASS);
};

const tabBtn = () => {
  const currentGallery = document.querySelector(`.${GALLERY_CLASS}`);
  const currentTab = document.querySelector(`.${TAB_CLASS}`);

  if (
    currentTab == tabs[0] ||
    currentTab == tabs[1] ||
    currentTab == tabs[2] ||
    currentTab == tabs[3] ||
    currentTab == tabs[4]
  ) {
    tabs[5].classList.add(TAB_CLASS);
    galleryItems[5].classList.add(GALLERY_CLASS);
  }

  currentGallery.classList.remove(GALLERY_CLASS);
  currentTab.classList.remove(TAB_CLASS);

  if (
    currentTab == tabs[5] ||
    currentTab == tabs[6] ||
    currentTab == tabs[7] ||
    currentTab == tabs[8] ||
    currentTab == tabs[9]
  ) {
    tabs[0].classList.add(TAB_CLASS);
    galleryItems[0].classList.add(GALLERY_CLASS);
  }

  if (tabs[0].classList.contains(TAB_CLASS)) {
    tabImg.style.left = "0px";
  }

  if (tabs[5].classList.contains(TAB_CLASS)) {
    tabImg.style.left = "-100%";
  }
};

// 함수실행

nextSlides();
boxSlideNext();

next.addEventListener("click", nextSlides);
prev.addEventListener("click", prevSlides);

openBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);

window.addEventListener("scroll", fixed);

window.document.addEventListener("scroll", onScroll);

galleryNext.addEventListener("click", boxSlideNext);
galleryPrev.addEventListener("click", boxSlidePrev);

tabNext.addEventListener("click", tabBtn);
tabPrev.addEventListener("click", tabBtn);
