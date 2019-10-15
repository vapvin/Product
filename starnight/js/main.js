const video = document.getElementById("myVideo");

const btn = document.getElementById("play");

const myFunction = () => {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
};

btn.addEventListener("click", myFunction);
