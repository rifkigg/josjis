const kontak = document.getElementById("kontak");
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

window.addEventListener("load", () => {
  AOS.init({
    duration: 900,
    once: true,
  });
});


kontak.addEventListener("click", function () {
  window.location.href = "#footer";
});

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Tutup menu saat klik link
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

document.querySelectorAll("img[loading='lazy']").forEach(img => {
  img.addEventListener("load", () => {
    img.style.filter = "none";
  });
});
