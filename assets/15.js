const images = document.querySelectorAll('.fade-img');

/* КАРТИНКА В ЦЕНТРЕ */
const centerImage = document.createElement('img');

centerImage.classList.add('center-image');

document.querySelector('.scene').append(centerImage);

/* КАКАЯ КАРТИНКА СЕЙЧАС АКТИВНА */
let activeCloud = null;

images.forEach(img => {

  let secondSrc = '';

  if (img.id === 'cloud-1') {
    secondSrc = 'assets/img/page-15/pick1.png';
  }

  if (img.id === 'cloud-2') {
    secondSrc = 'assets/img/page-15/pick3.png';
  }

  if (img.id === 'cloud-3') {
    secondSrc = 'assets/img/page-15/pick2.png';
  }

  img.addEventListener('click', () => {

    /* ЕСЛИ НАЖАЛИ НА ТУ ЖЕ КАРТИНКУ */
    if (activeCloud === img) {

      centerImage.style.opacity = '0';

      setTimeout(() => {
        centerImage.src = '';
      }, 400);

      activeCloud = null;

      return;
    }

    /* ПОКАЗЫВАЕМ НОВУЮ КАРТИНКУ */
    centerImage.style.opacity = '0';

    setTimeout(() => {

      centerImage.src = secondSrc;

      centerImage.style.opacity = '1';

    }, 400);

    activeCloud = img;

  });

});

const dog = document.getElementById('dog');

const firstSrc = dog.src;
const secondSrc = dog.dataset.second;

let sleeping = false;

setInterval(() => {

  if (!sleeping) {
    dog.src = secondSrc;
  } else {
    dog.src = firstSrc;
  }

  sleeping = !sleeping;

}, 1300);