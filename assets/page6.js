const och = document.getElementById("Ochumelov_leaves");

let toggle = false;
let scale = 1;

setInterval(() => {
  toggle = !toggle;

  och.src = toggle
    ? "assets/img/page-6/Ochumelov leaves 2.png"
    : "assets/img/page-6/Ochumelov leaves.png";

  scale -= 0.01;
  if (scale < 0.5) scale = 0.5;

  och.style.transform = `scale(${scale}) translateY(-${(1 - scale) * 200}px)`;
}, 200);


// 🔥 ОГОНЬКИ
function spawnFire() {
  const och = document.getElementById("Ochumelov_leaves");
  const scene = och.parentElement;
  const rect = scene.getBoundingClientRect();

  for (let i = 0; i < 6; i++) {
    const img = document.createElement("img");

    const num = Math.ceil(Math.random() * 3);
    img.src = `assets/img/page-6/fire${num}.png`;

    img.className = "particle";

    img.style.position = "absolute";

    // 👇 теперь РАНДОМ ПО ВСЕЙ СЦЕНЕ
    img.style.left = Math.random() * (rect.width - 80) + "px";
    img.style.top = Math.random() * (rect.height - 80) + "px";

    scene.appendChild(img);

    setTimeout(() => img.remove(), 1500);
  }
}


och.addEventListener("click", (e) => {

  e.stopPropagation();
  spawnFire();
});


const hryukin = document.getElementById("Hrukin");

function spawnTears() {
  const scene = document.getElementById("scene");
  const hryukin = document.getElementById("Hrukin");

  const rect = hryukin.getBoundingClientRect();
  const parentRect = scene.getBoundingClientRect();

  const eyes = [
    { x: rect.left - parentRect.left + rect.width * 0.38, y: rect.top - parentRect.top + rect.height * 0.3 },
    { x: rect.left - parentRect.left + rect.width * 0.50, y: rect.top - parentRect.top + rect.height * 0.3 }
  ];

  eyes.forEach((eye) => {
    const img = document.createElement("img");

    const num = Math.ceil(Math.random() * 3);
    img.src = `assets/img/page-6/tear${num}.png`;

    img.style.position = "absolute";
    img.style.left = eye.x + "px";
    img.style.top = eye.y + "px";
    img.style.width = "40px";
    img.style.zIndex = "9999";

    img.className = "tear";

    scene.appendChild(img);

    setTimeout(() => img.remove(), 1500);
  });
}

// 👉 клик
hryukin.addEventListener("click", (e) => {
  e.stopPropagation();
  spawnTears();
});


function spawnStars() {
  const scene = document.getElementById("scene");
  const rect = scene.getBoundingClientRect();

  for (let i = 0; i < 8; i++) {
    const img = document.createElement("img");

    const num = Math.ceil(Math.random() * 3);
    img.src = `assets/img/page-6/happy${num}.png`;

    img.className = "star";

    img.style.position = "absolute";
    img.style.left = Math.random() * (rect.width - 80) + "px";
    img.style.top = "-20px";

    // 👇 разная скорость
    img.style.animationDuration = (2 + Math.random() * 2) + "s";

    scene.appendChild(img);

    setTimeout(() => img.remove(), 4000);
  }
}
const prohor = document.getElementById("Prohor");
const dog = document.getElementById("dog");

prohor.addEventListener("click", (e) => {
  e.stopPropagation();
  spawnStars();
});

dog.addEventListener("click", (e) => {
  e.stopPropagation();
  spawnStars();
});