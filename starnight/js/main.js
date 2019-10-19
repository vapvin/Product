const video = document.getElementById("myVideo");

const btn = document.getElementById("play");

const start = document.getElementById("angle");
const mute = document.getElementById("mute");

const myFunction = () => {
  if (video.paused) {
    video.play();
    mute.style.display = "block";
    start.style.display = "none";
  } else {
    video.pause();
    mute.style.display = "none";
    start.style.display = "block";
  }
};
myFunction();
btn.addEventListener("click", myFunction);
