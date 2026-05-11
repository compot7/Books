const video = document.getElementById("video");
const canvas = document.getElementById("canvas");
const button = document.getElementById("snap");

// включаем камеру
navigator.mediaDevices.getUserMedia({ video: true })
  .then(stream => {
    video.srcObject = stream;
  })
  .catch(err => {
    console.error("Ошибка камеры:", err);
  });

// кнопка "Сделать фото"
button.addEventListener("click", () => {

  // проверяем что видео загрузилось
  if (video.videoWidth === 0) {
    console.log("Видео не готово");
    return;
  }

  const ctx = canvas.getContext("2d");

  // размеры canvas = размеры видео
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;

  // если видео зеркальное — зеркалим и фото
  ctx.translate(canvas.width, 0);
  ctx.scale(-1, 1);

  // рисуем кадр
  ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

  // получаем base64 картинку
  const image = canvas.toDataURL("image/png");

  // сохраняем в localStorage
  localStorage.setItem("userPhoto", image);

  // переход на следующую страницу
  window.location.href = "4_1.html";
});