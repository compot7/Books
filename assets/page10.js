const doroti = document.getElementById("Doroti_and_dog");

let isSwinging = false;

doroti.addEventListener("click", () => {
  doroti.classList.add("swing");

  setTimeout(() => {
    doroti.classList.remove("swing");
  }, 2400);
});