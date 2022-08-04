const headernav = document.querySelector("header");
const main = document.querySelector("main");

let options = {
    root: null,
    rootMargin: '0px',
    threshold: 0
};

const obsCallback = (entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (!entry.isIntersecting) {
            headernav.classList.add("scrolled");
        }
        else {
            headernav.classList?.remove("scrolled");
        };
    });
}

headerObserver = new IntersectionObserver(obsCallback, options);
headerObserver.observe(document.querySelector('#header-trigger'));

//The target must be a descendant of the root element - for some reason the header doesn't seem to count as the descendant of body
//You can use a placeholder element at the top of the page to detect when you're at the top or not.