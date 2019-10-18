const back = document.querySelector(".back");
const navul = document.querySelector(".first_ul");

navul.addEventListener("mouseover", () => {
  back.style.height = "300px";
});

navul.addEventListener("mouseout", () => {
  back.style.height = "0px";
});
