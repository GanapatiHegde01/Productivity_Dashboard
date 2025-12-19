const allCards = document.querySelectorAll(".elem");
const page = document.querySelectorAll(".page");
const closeBtn = document.querySelectorAll(".close-btn");

allCards.forEach((elem) => {
  elem.addEventListener("click", () => {
    page[elem.id].style.display = "block";
  });
});

closeBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    page[btn.id].style.display = "none";
  });
});
