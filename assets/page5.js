const hands = document.getElementById("hands");

let toggle = false;

setInterval(() => {
  toggle = !toggle;

  hands.src = toggle
    ? "assets/img/page-5/hands2.png"
    : "assets/img/page-5/hands.png";

}, 700); // скорость "сжатия"



const scene = document.getElementById("scene");
const heartsContainer = document.getElementById("hearts");

scene.addEventListener("click", () => {
  const heart = document.createElement("img");

  const num = Math.ceil(Math.random() * 3);
  heart.src = `assets/img/page-5/heart${num}.png`;

  heart.classList.add("heart");

  // 👇 получаем РЕАЛЬНЫЙ размер картинки
  const rect = hands.getBoundingClientRect();

  const heartSize = 40;

  const x = Math.random() * (rect.width - heartSize);
  const y = Math.random() * (rect.height - heartSize);

  heart.style.left = x + "px";
  heart.style.top = y + "px";

  heartsContainer.appendChild(heart);
});