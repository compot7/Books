// --- элементы ---
const cat = document.getElementById("cat");
const balcon = document.getElementById("balcon-pokos");

// --- смена балкона ---
function changeBalcony() {
  if (!balcon) return;
  balcon.src = "assets/img/page-12/balcony.png";
}

if (balcon) {
  balcon.addEventListener("click", (e) => {
    e.stopPropagation();
    changeBalcony();
  });
}

if (cat) {
  cat.addEventListener("click", (e) => {
    e.stopPropagation();
    changeBalcony();
  });
}

// --- анимация кота ---
const frames = [
  "assets/img/page-12/cat1.png",
  "assets/img/page-12/cat2.png",
  "assets/img/page-12/cat3.png",
  "assets/img/page-12/cat4.png"
];

let isRunning = false;
let frameIndex = 0;
let animationInterval = null;
let stopTimeout = null;

function startRun() {
  if (isRunning || !cat) return;

  isRunning = true;

  animationInterval = setInterval(() => {
    cat.src = frames[frameIndex];
    frameIndex = (frameIndex + 1) % frames.length;
  }, 120);
}

function stopRun() {
  if (!isRunning) return;

  clearTimeout(stopTimeout);

  stopTimeout = setTimeout(() => {
    isRunning = false;

    clearInterval(animationInterval);
    animationInterval = null;

    if (cat) {
      cat.src = "assets/img/page-12/cat.png";
    }
  }, 200); // сглаживание
}

// --- микрофон ---
async function initMic() {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });

    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const mic = audioContext.createMediaStreamSource(stream);
    const analyser = audioContext.createAnalyser();

    mic.connect(analyser);

    const data = new Uint8Array(analyser.fftSize);

    let lastSoundTime = 0;
    let isSpeaking = false;

    function checkVolume() {
      analyser.getByteTimeDomainData(data);

      let sum = 0;
      for (let i = 0; i < data.length; i++) {
        let val = (data[i] - 128) / 128;
        sum += val * val;
      }

      let volume = Math.sqrt(sum / data.length);

      // порог
      if (volume > 0.1) {
        lastSoundTime = Date.now();

        if (!isSpeaking) {
          isSpeaking = true;
          startRun();
        }
      }

      // если тишина
      if (Date.now() - lastSoundTime > 800) {
        if (isSpeaking) {
          isSpeaking = false;
          stopRun();
        }
      }

      requestAnimationFrame(checkVolume);
    }

    // 👇 ЗАПУСК ПРОВЕРКИ
    checkVolume();

  } catch (err) {
    console.log("MIC ERROR:", err);
  }
}

// 👇 ВЫЗЫВАЕМ ЗДЕСЬ, а не внутри функции
initMic();