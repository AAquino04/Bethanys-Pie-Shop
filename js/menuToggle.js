function toggleMenu() {
    document.getElementById("primary-nav").classList.toggle("open");
}
const hamburgerBtn = document.getElementById("hamburger-btn");
hamburgerBtn.onclick = toggleMenu;