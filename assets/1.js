const frames = ["assets/img/page-1/gorodovoi1.png",
    "assets/img/page-1/gorodovoi2.png",
    "assets/img/page-1/gorodovoi3.png"];
let i = 0;

setInterval(() => {
  i = (i + 1) % frames.length;
  document.getElementById("gorodovoi").src = frames[i];
}, 100);


const bg = document.querySelector(".bg");

document.addEventListener("mousemove", (e) => {
  const x = (e.clientX / window.innerWidth - 0.5) * 80;
  bg.style.transform = `translateX(${x}px)`;
});


const img = document.getElementById("gorodovoi");

const particlesImages = [
  "assets/img/page-1/p1.png",
  "assets/img/page-1/p2.png",
  "assets/img/page-1/p3.png"
];

img.addEventListener("click", () => {
  const rect = img.getBoundingClientRect();

  for (let i = 0; i < 20; i++) {
    const particle = document.createElement("img");

    // случайная картинка
    const randomImg = particlesImages[
      Math.floor(Math.random() * particlesImages.length)
    ];

    particle.src = randomImg;
    particle.className = "particle";

    // старт из центра
    particle.style.left = rect.left + rect.width / 2 + "px";
    particle.style.top = rect.top + rect.height / 2 + "px";

    // случайное направление
    const x = (Math.random() - 0.5) * 400 + "px";
    const y = (Math.random() - 0.5) * 400 + "px";

    particle.style.setProperty("--x", x);
    particle.style.setProperty("--y", y);

    document.body.appendChild(particle);

    setTimeout(() => particle.remove(), 800);
  }
});
