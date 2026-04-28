
const hand = document.getElementById("arm");

// 0 = большая собака (arm.png)
// 1 = маленькая (arm2.png)
let state = 0;

function updateFrame() {
  hand.src = state === 0 ? "assets/img/page-3/arm.png" : "assets/img/page-3/arm2.png";
}

// 🖱️ колесо мыши
window.addEventListener("wheel", (e) => {
  if (e.deltaY > 0) {
    state = 1; // вниз → уменьшилась
  } else {
    state = 0; // вверх → увеличилась
  }

  updateFrame();
});

// 📱 свайп пальцем
let startY = 0;

window.addEventListener("touchstart", (e) => {
  startY = e.touches[0].clientY;
});

window.addEventListener("touchend", (e) => {
  let endY = e.changedTouches[0].clientY;
  let diff = startY - endY;

  if (Math.abs(diff) < 30) return; // игнор мелких движений

  if (diff > 0) {
    // свайп вверх → увеличилась
    state = 0;
  } else {
    // свайп вниз → уменьшилась
    state = 1;
  }

  updateFrame();
});