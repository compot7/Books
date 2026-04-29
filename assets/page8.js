const flowerbed = document.getElementById("flowerbed");

flowerbed.addEventListener("click", () => {
  flowerbed.src = "assets/img/page-8/flowerbed1.png";
});


const bazar = document.getElementById("bazar_square");
const country = document.getElementById("wonderful_country");

// 🔙 назад
bazar.addEventListener("click", () => {
  window.history.back();
});

// 🔜 вперёд (на 9 страницу)
country.addEventListener("click", () => {
  window.location.href = "9.html";
});