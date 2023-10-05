const header = document.querySelector("#header");
const home = document.querySelector("#home");
const about = document.querySelector("#about");
const navigationList = document.querySelectorAll(".navigation-list li");
const helloMessage = document.querySelector(".hello-message");
const helloSubtitle = document.querySelector(".hello-subtitle");
const helloDownArrow = document.querySelector(".hello-down-arrow");

window.addEventListener("scroll", () => {
  if (window.scrollY <= helloMessage.offsetTop) {
    header.style.boxShadow = "none";
  } else {
    header.style.boxShadow = "0px 0px 5px rgba(0, 0, 0, 0.1)";
  }

  if (window.scrollY >= about.offsetTop) {
    header.classList.add("header-background-2");
    header.classList.remove("header-background-1");
  } else {
    header.classList.add("header-background-1");
    header.classList.remove("header-background-2");
  }
});

let windowHeight = document.documentElement.clientHeight;
home.style.height = windowHeight + "px";
window.addEventListener("resize", () => {
  let newWindowHeight = document.documentElement.clientHeight;
  home.style.height = newWindowHeight + "px";
});

const scrollTo = (element) => {
  document.querySelector(element).scrollIntoView({ behavior: "smooth" });
};

navigationList.forEach((navig) =>
  navig.addEventListener("click", () => scrollTo(navig.getAttribute("href")))
);

const writeMessage = () => {
  const helloMessageArray = helloMessage.innerHTML.split("");
  helloMessageArray.forEach((letter, i) => {
    helloMessage.innerHTML = "";
    setTimeout(() => {
      helloMessage.innerHTML += letter;
    }, 90 * i);
  });
};
writeMessage();

helloDownArrow.addEventListener("click", () => scrollTo("#about"));

const intersectObserver = new IntersectionObserver((elements) => {
  elements.forEach((element) => {
    element.target.classList.toggle("show", element.isIntersecting);
  });
});

const animatedElements = document.querySelectorAll(".animate");

animatedElements.forEach((element) => intersectObserver.observe(element));
