document.addEventListener("DOMContentLoaded", () => {
  const logoLinkEls = document.querySelector(".logo-link");
  const txtEls = document.querySelector(".txt");
  const mainTitleEls = document.querySelector(".main__title");
  const txtSmEls = document.querySelector(".txt--sm");
  splitTextToLetter(logoLinkEls, "logo__letter");
  splitTextToLetter(txtEls, "txt__letter");
  splitTextToLetter(txtSmEls, "txt__letter");
  splitTextToLetter(mainTitleEls, "logo__letter");
  anime({
    targets: ".logo__letter",
    scale: [0, 1],
    filter: {
      value: ["blur(15px)", "blur(0px)"],
      duration: 2300,
    },
    duration: 2000,
    elasticity: 600,
    easing: "easeOutExpo",
    delay: (el, i) => 100 * (i + 8),
  });

  anime({
    targets: ".txt__letter",
    translateY: [100, 0],
    opacity: [0, 1],
    filter: {
      value: ["blur(15px)", "blur(0px)"],
      duration: 1300,
    },
    duration: 1000,
    elasticity: 600,
    easing: "easeOutExpo",
    delay: (el, i) => 10 * (i + 8),
  });

  anime({
    targets: ".link, .img-link",
    translateY: [100, 0],
    opacity: [0, 1],
    filter: {
      value: ["blur(15px)", "blur(0px)"],
      duration: 2300,
    },
    duration: 2000,
    elasticity: 600,
    easing: "easeOutExpo",
    delay: (el, i) => 100 * (i + 8),
  });
});

function splitTextToLetter(el, className) {
  el.innerHTML = el.textContent.replace(
    /\S/g,
    `<span class="${className}">$&</span>`
  );
}
