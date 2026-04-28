
async function initMic() {
  const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
  const audioContext = new AudioContext();
  const mic = audioContext.createMediaStreamSource(stream);
  const analyser = audioContext.createAnalyser();

  mic.connect(analyser);

  const data = new Uint8Array(analyser.fftSize);

  function checkVolume() {
    analyser.getByteTimeDomainData(data);

    let sum = 0;
    for (let i = 0; i < data.length; i++) {
      let val = (data[i] - 128) / 128;
      sum += val * val;
    }

    let volume = Math.sqrt(sum / data.length);

    // Порог "крика" (подбери под себя)
    if (volume > 0.15) {
      if (!isShouting) {
        isShouting = true;
        onShoutStart();
      }
    } else {
      if (isShouting) {
        isShouting = false;
        onShoutEnd();
      }
    }

    requestAnimationFrame(checkVolume);
  }

  checkVolume();
}

initMic();

const dog = document.getElementById("dog-biting");
const finger = document.getElementById("finger");

let isShouting = false;
let timeout;

// 👉 когда кричишь
function onShoutStart() {
  clearTimeout(timeout);

  dog.src = "/assets/img/page-2/dog-runaway.png"; // смена кадра
  finger.classList.add("pulse");
}

// 👉 когда замолчал
function onShoutEnd() {
  timeout = setTimeout(() => {
    dog.src = "/assets/img/page-2/dog-biting.png"; // обратно
    finger.classList.remove("pulse");
  }, 600); // защита от дергания
}
