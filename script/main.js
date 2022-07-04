document.addEventListener("DOMContentLoaded", () => {
  const logoEl = document.querySelector(".logo-link");
  const txtEl = document.querySelectorAll(".txt-anim");
  for (let el of txtEl) {
    splitElToLetter(el, "txt-letter");
  }
  splitElToLetter(logoEl, "logo-letter");

  anime({
    targets: ".logo-letter",
    scale: [0, 1],
    filter: {
      value: ["blur(5px)", "blur(0px)"],
      duration: 2300,
    },
    duration: 2000,
    easing: "easeOutExpo",
    delay: anime.stagger(100),
  });

  anime({
    targets: ".txt-letter",
    translateY: [100, 0],
    opacity: [0, 1],
    filter: {
      value: ["blur(5px)", "blur(0px)"],
      duration: 2300,
    },
    duration: 2000,
    easing: "easeOutExpo",
    delay: anime.stagger(30),
  });

  anime({
    targets: ".link, .img-link",
    translateY: [10, 0],
    opacity: [0, 1],
    filter: {
      value: ["blur(5px)", "blur(0px)"],
      duration: 2300,
    },
    duration: 2000,
    easing: "easeOutExpo",
    delay: anime.stagger(100),
  });
});

function splitElToLetter(el, className) {
  el.innerHTML = el.textContent.replace(
    /\S/g,
    `<span class='${className}'>$&</span>`
  );
}
