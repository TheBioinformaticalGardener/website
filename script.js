const openNavButton = document.getElementById("open-nav-button");
const navbar = document.getElementById("navbar");

const media = window.matchMedia("(width < 700px)");

media.addEventListener("change", (e) => updateNav(e));

function updateNav(e) {
  const isMobile = e.matches;
  if (isMobile) {
    navbar.setAttribute("inert", "");
  } else {
    navbar.removeAttribute("inert");
  }
}

function openNav() {
  navbar.classList.add("show");
  openNavButton.setAttribute("aria-expanded", "true");
  navbar.removeAttribute("inert");
}

function closeNav() {
  navbar.classList.remove("show");
  openNavButton.setAttribute("aria-expanded", "false");
  navbar.setAttribute("inert", "");
}

updateNav(media);
