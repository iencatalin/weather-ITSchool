diplayCurrentWeather("București");

const scrollBtn = document.querySelector(".scroll-to-top");

const halfViewHeight = window.innerHeight / 2;

document.addEventListener("scroll", () => {
  if (window.scrollY > halfViewHeight) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
