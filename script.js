function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

document.addEventListener("DOMContentLoaded", function () {
  var universityIcon = document.getElementById("universityIcon");
  universityIcon.addEventListener("click", function () {
    window.open("https://www.canterbury.ac.nz", "_blank");
  });
});
