const soundBlocks = document.querySelectorAll(".letter-wrapper");
const container = document.querySelector(".container");

const playSound = (block) => {
  let audio = document.getElementById(block.dataset.code);

  block.classList.add("active");

  let musicIcon = document.createElement("div");
  musicIcon.classList.add("music-icon");
  block.append(musicIcon);

  audio.play();
  audio.currentTime = 0;

  block.addEventListener("transitionend", () => {
    block.classList.remove("active");
    block.removeChild(musicIcon);
  });
};

const playSoundKeys = (e) => {
  soundBlocks.forEach((block) => {
    if (e.keyCode === +block.dataset.code) {
      playSound(block);
    }
  });
};

const playSoundClick = (e) => {
  if (!e.target.classList.contains("container")) {
    let targetCode = e.target.closest(".letter-wrapper").dataset.code;
    soundBlocks.forEach((block) => {
      if (targetCode === block.dataset.code) {
        playSound(block);
      }
    });
  }
};

document.addEventListener("keydown", playSoundKeys);
container.addEventListener("click", playSoundClick);
