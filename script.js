const burgerbtn = document.getElementById("burgerbtn");
const navmenu = document.getElementById("nav");
burgerbtn.addEventListener("click", () => {
  navmenu.classList.toggle("chaqiruv");
});

const closebtn = document.getElementById("X");
closebtn.addEventListener("click", () => {
  navmenu.classList.remove("chaqiruv");
});
