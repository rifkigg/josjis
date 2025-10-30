const kontak = document.getElementById("kontak");
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

AOS.init({
  duration: 900,
  delay: 100,
  once: true,
  easing: 'ease-in-out'
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
