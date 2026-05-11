document.addEventListener("DOMContentLoaded", () => {

  // =========================
  // СОБАКА
  // =========================

  const dog = document.getElementById("dog");

  // =========================
  // КАДРЫ АНИМАЦИИ
  // =========================

  const frames = [
    "assets/img/page-11/dog1.png",
    "assets/img/page-11/dog2.png",
    "assets/img/page-11/dog3.png",
    "assets/img/page-11/dog4.png"
  ];

  // =========================
  // СТАРТОВАЯ ПОЗИЦИЯ
  // =========================

  let x = 0;
  let y = window.innerHeight * 0.785;

  // =========================
  // НАСТРОЙКИ
  // =========================

  const speed = 3;

  let currentDirection = null;
  let isMoving = false;

  // =========================
  // АНИМАЦИЯ
  // =========================

  let frameIndex = 0;
  let lastFrameChange = 0;

  // =========================
  // КНОПКИ
  // =========================

  const leftBtn = document.getElementById("arrow-2");
  const rightBtn = document.getElementById("arrow-1");
  const upBtn = document.getElementById("arrow-4");
  const downBtn = document.getElementById("arrow-3");

  // =========================
  // LEFT
  // =========================

  leftBtn.addEventListener("mousedown", () => {
    currentDirection = "left";
    isMoving = true;
  });

  // =========================
  // RIGHT
  // =========================

  rightBtn.addEventListener("mousedown", () => {
    currentDirection = "right";
    isMoving = true;
  });

  // =========================
  // UP
  // =========================

  upBtn.addEventListener("mousedown", () => {
    currentDirection = "up";
    isMoving = true;
  });

  // =========================
  // DOWN
  // =========================

  downBtn.addEventListener("mousedown", () => {
    currentDirection = "down";
    isMoving = true;
  });

  // =========================
  // ОТПУСТИЛ КНОПКУ
  // =========================

  document.addEventListener("mouseup", stopMove);

  function stopMove() {

    isMoving = false;

    frameIndex = 0;

    dog.src = frames[0];
  }

  // =========================
  // ГЛАВНЫЙ ЦИКЛ
  // =========================

  function gameLoop(timestamp) {

    if (isMoving) {

      // НОВЫЕ КООРДИНАТЫ

      let newX = x;
      let newY = y;

      // =========================
      // ДВИЖЕНИЕ
      // =========================

      if (currentDirection === "left") {
        newX -= speed;
      }

      if (currentDirection === "right") {
        newX += speed;
      }

      if (currentDirection === "up") {
        newY -= speed;
      }

      if (currentDirection === "down") {
        newY += speed;
      }

      // =========================
      // ПРОВЕРКА СТЕН
      // =========================

      if (!checkCollision(newX, newY)) {

        x = newX;
        y = newY;
      }

      // =========================
      // ПЕРЕМЕЩЕНИЕ СОБАКИ
      // =========================

      dog.style.left = x + "px";
      dog.style.top = y + "px";

      // =========================
      // АНИМАЦИЯ
      // =========================

      if (timestamp - lastFrameChange > 120) {

        frameIndex++;

        if (frameIndex >= frames.length) {
          frameIndex = 0;
        }

        dog.src = frames[frameIndex];

        lastFrameChange = timestamp;
      }
    }

    requestAnimationFrame(gameLoop);
  }

  requestAnimationFrame(gameLoop);

  // =========================
  // СТОЛКНОВЕНИЯ СО СТЕНАМИ
  // =========================

  function checkCollision(newX, newY) {

    const walls = document.querySelectorAll(".wall");

    // СОБАКА

    const dogBox = {

      left: newX,
      top: newY,

      right: newX + dog.offsetWidth,
      bottom: newY + dog.offsetHeight
    };

    // ПРОВЕРКА ВСЕХ СТЕН

    for (let wall of walls) {

      const wallRect = wall.getBoundingClientRect();

      const sceneRect =
        dog.parentElement.getBoundingClientRect();

      const wallLeft =
        wallRect.left - sceneRect.left;

      const wallTop =
        wallRect.top - sceneRect.top;

      const wallBox = {

        left: wallLeft,
        top: wallTop,

        right: wallLeft + wall.offsetWidth,
        bottom: wallTop + wall.offsetHeight
      };

      // СТОЛКНОВЕНИЕ

      if (

        dogBox.left < wallBox.right &&
        dogBox.right > wallBox.left &&
        dogBox.top < wallBox.bottom &&
        dogBox.bottom > wallBox.top

      ) {
        return true;
      }
    }

    return false;
  }

});