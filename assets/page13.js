const buckets = document.getElementById("buckets");
const dog = document.getElementById("dog");
const man = document.getElementById("man");

// buckets
if (buckets) {
  buckets.addEventListener("click", () => {
    buckets.src = "assets/img/page-13/buckets1.png";
    buckets.style.pointerEvents = "none";
    buckets.style.transform = "scale(1.7)";
  });
}

// dog
if (dog) {
  dog.addEventListener("click", () => {
    dog.src = "assets/img/page-13/dog1.png";
    dog.style.pointerEvents = "none";

  });
}

// man
if (man) {
  man.addEventListener("click", () => {
    man.src = "assets/img/page-13/man2.png";
    man.style.pointerEvents = "none";
    man.style.transform = "scale(1.29)";
    man.style.left = "43.6%"
    man.style.top = "30.5%"
    man.style.zIndex = "10"
  });
}
