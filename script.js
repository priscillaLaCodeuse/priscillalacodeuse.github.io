// Menu responsive

document.addEventListener("DOMContentLoaded", () => {
  const openIcon = document.getElementById("openIcon");
  const closeIcon = document.getElementById("closeIcon");
  const nav = document.querySelector("nav");

  if (window.innerWidth <= 630) {
    nav.style.display = "none";
  }

  openIcon.addEventListener("click", () => {
    closeIcon.style.display = "block";
    openIcon.style.display = "none";
    nav.style.display = "flex";
  });

  closeIcon.addEventListener("click", () => {
    openIcon.style.display = "block";
    closeIcon.style.display = "none";
    nav.style.display = "none";
  });
});
