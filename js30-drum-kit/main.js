const soundBlocks = document.querySelectorAll(".letter-wrapper");
const letters = document.querySelector(".letters");
const container = document.querySelector(".container");
const switcher = document.querySelector(".switch");

let checked = false;

const playSound = (block) => {
  let audio = document.getElementById(block.dataset.code);

  block.classList.add("active");

  let musicIcon = document.createElement("div");
  musicIcon.classList.add("music-icon");
  block.appendChild(musicIcon);

  audio.play();
  audio.currentTime = 0;

  block.addEventListener("transitionend", () => {
    block.classList.remove("active");
  });

  setTimeout(() => {
    block.removeChild(musicIcon);
  }, 300);
};

const playSoundKeys = (e) => {
  soundBlocks.forEach((block) => {
    if (e.keyCode === +block.dataset.code) {
      playSound(block);
    }
  });
};

const playSoundClick = (e) => {
  if (!e.target.classList.contains("letters")) {
    let targetCode = e.target.closest(".letter-wrapper").dataset.code;
    soundBlocks.forEach((block) => {
      if (targetCode === block.dataset.code) {
        playSound(block);
      }
    });
  }
};

const changeTheme = (checked) => {
  if (!switcher.querySelector("input").checked) {
    container.style.backgroundImage = "url('./img/background.jpg')";
    soundBlocks.forEach((block) => {
      block.style.border = "3px solid #000";
      block.style.background = "rgba(0, 0, 0, 0.4)";
    });
  } else {
    container.style.backgroundImage = "url('./img/background-dark.png')";
    soundBlocks.forEach((block) => {
      block.style.border = "2px solid #fff";
      block.style.background = "rgba(255, 255, 255, 0.05)";
    });
  }
};

document.addEventListener("keydown", playSoundKeys);
letters.addEventListener("click", playSoundClick);

switcher.addEventListener("click", () => {
  changeTheme(checked);
});

console.log(`Score: 30/30
Разобраться в коде чужого проекта, понять его, воспроизвести исходное приложение. Правки и изменения допускаются и приветствуются, если они не ухудшают внешний вид и функционал исходного проекта. За недостатки, которые присутствуют в исходном проекте, баллы не снимаются (10)
Для каждого проекта указан обязательный дополнительный функционал, который необходимо реализовать. В каждом задании обязательный дополнительный функционал свой, он указан в описании задания (10)
Дополнительный функционал
В качестве дополнительного функционала была реализована темная тема и анимация в виде всплывающих нот (10)`);
