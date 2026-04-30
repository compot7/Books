const doroti = document.getElementById("Doroti_and_dog");

let isSwinging = false;

doroti.addEventListener("click", () => {
  doroti.classList.add("swing");

  setTimeout(() => {
    doroti.classList.remove("swing");
  }, 2400);
});



const dog = document.getElementById("dog_appears");
let dogTimeout = null;
let hideTimeout = null;
let isDogVisible = false;
const scene = document.getElementById("scene");

function spawnDog() {
  if (isDogVisible) return;

  isDogVisible = true;

  // убираем старые таймеры
  if (hideTimeout) clearTimeout(hideTimeout);

  // чистим классы
  dog.classList.remove("left", "right", "show");

  const side = Math.random() > 0.5 ? "left" : "right";
  const scene = document.getElementById("scene");
  const rect = scene.getBoundingClientRect();

  // рандом по высоте (с отступами)
  const minY = 50;
  const maxY = rect.height - 150; // чтобы не вылезала вниз

  const randomY = minY + Math.random() * (maxY - minY);

  dog.style.top = randomY + "px";
  dog.classList.add(side);

  requestAnimationFrame(() => {
    dog.classList.add("show");
  });

  hideTimeout = setTimeout(() => {
    dog.classList.remove("show");
    isDogVisible = false;
  }, 4000);
}

// запуск раз в случайное время
function randomDogLoop() {
  const delay = 3000 + Math.random() * 5000;

  dogTimeout = setTimeout(() => {
    spawnDog();
    randomDogLoop();
  }, delay);
}

randomDogLoop();


dog.addEventListener("click", (e) => {
  e.stopPropagation();
  spawnHearts();
});



function spawnHearts() {
  const rect = scene.getBoundingClientRect();

  for (let i = 0; i < 6; i++) {
    const img = document.createElement("img");

    const num = Math.ceil(Math.random() * 3);
    img.src = `assets/img/page-10/heart${num}.png`;

    img.style.position = "absolute";
    img.style.left = Math.random() * rect.width + "px";
    img.style.top = Math.random() * rect.height + "px";
    img.style.width = "100px";
    img.style.zIndex = "3";

    img.className = "heart";

    scene.appendChild(img);

    setTimeout(() => img.remove(), 1500);
  }
}