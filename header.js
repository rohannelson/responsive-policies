const headernav = document.querySelector("header");
const main = document.querySelector("main");
window.addEventListener("scroll", () => responsiveHeader(), { passive: true });
function responsiveHeader() {
    if (document.documentElement.scrollTop > 10) {
        headernav.classList.add("scrolled");
        main.classList.add("scrolled");
    }
    else {
        headernav.classList?.remove("scrolled");
        main.classList?.remove("scrolled");
    }
}