const och = document.getElementById("Ochumelov_leaves");

let toggle = false;
let scale = 1;

setInterval(() => {
  toggle = !toggle;

  och.src = toggle
    ? "assets/img/page-6/Ochumelov leaves 2.png"
    : "assets/img/page-6/Ochumelov leaves.png";

  // 👇 эффект "уходит вдаль"
  scale -= 0.01;
  if (scale < 0.5) scale = 0.5;

  och.style.transform = `scale(${scale}) translateY(-${(1 - scale) * 200}px)`;
}, 200);

const scene = document.getElementById("scene");

function spawnParticles(prefix) {
  const rect = scene.getBoundingClientRect();

  for (let i = 0; i < 10; i++) {
    const img = document.createElement("img");

    const num = Math.ceil(Math.random() * 3);

    img.src = `assets/img/page-6/${prefix}${num}.png`; // 👈 ВАЖНО

    img.className = "particle";

    img.style.left = Math.random() * rect.width + "px";
    img.style.top = Math.random() * rect.height + "px";

    scene.appendChild(img);

    setTimeout(() => img.remove(), 1000);
  }
}



const hryukin = document.getElementById("Hrukin");
const dog = document.getElementById("dog");
const prohor = document.getElementById("Prohor");
const ochumelov = document.getElementById("Ochumelov_leaves");

// 😢 Хрюкин — слёзы
hryukin.addEventListener("click", (e) => {
  e.stopPropagation();
  spawnParticles(scene, "tear");
});

// ⭐ Собака и Прохор — радость
dog.addEventListener("click", (e) => {
  e.stopPropagation();
  spawnParticles(scene, "happy");
});

prohor.addEventListener("click", (e) => {
  e.stopPropagation();
  spawnParticles(scene, "happy");
});

// 🔥 Очумелов — огонь
ochumelov.addEventListener("click", (e) => {
  e.stopPropagation();
  spawnParticles(scene, "fire");
});