diplayCurrentWeather("București");

const scrollBtn = document.querySelector(".scroll-to-top");

const halfViewHeight = window.innerHeight / 2;

document.addEventListener("scroll", () => {
  if (window.scrollY > halfViewHeight) {
    scrollBtn.style.visibility = "visible";
  } else {
    scrollBtn.style.visibility = "hidden";
  }
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
