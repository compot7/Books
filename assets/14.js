const dog = document.getElementById('dog');
const mumu = document.getElementById('mumu');

const dogFrames = [
    'assets/img/page-14/dog.png',
    'assets/img/page-14/dog1.png',
    'assets/img/page-14/dog.png',
    'assets/img/page-14/dog1.png',
    'assets/img/page-14/dog.png',
    'assets/img/page-14/dog.png',
    'assets/img/page-14/dog1.png',
    'assets/img/page-14/dog.png',
    'assets/img/page-14/dog1.png',
    'assets/img/page-14/dog.png'
];

const mumuFrames = [
    'assets/img/page-14/mumu1.png',
    'assets/img/page-14/mumu.png',
    'assets/img/page-14/mumu1.png',
    'assets/img/page-14/mumu.png',
    'assets/img/page-14/mumu1.png',
    'assets/img/page-14/mumu1.png',
    'assets/img/page-14/mumu.png',
    'assets/img/page-14/mumu1.png',
    'assets/img/page-14/mumu.png',
    'assets/img/page-14/mumu.png'
];

let animating = false;

function barkAnimation() {

    if (animating) return;

    animating = true;

    let frame = 0;

    const interval = setInterval(() => {

        dog.src = dogFrames[frame];
        mumu.src = mumuFrames[frame];

        frame++;

        if (frame >= dogFrames.length) {
            clearInterval(interval);
            animating = false;
        }

    }, 150);
}

dog.addEventListener('click', barkAnimation);
mumu.addEventListener('click', barkAnimation);