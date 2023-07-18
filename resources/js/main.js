//objects
const heroSection = document.getElementById("hero");
const meniuMCN = document.getElementById("meniu-mcn");
const meniuMCNAnchors = document.querySelectorAll("#meniu-mcn ul li a");
const meniuLogo = document.querySelector("#meniu-mcn div a img");
const meniuMCNList = document.querySelectorAll("#menu-list li a");

const mobileMenu = document.getElementById("mobile-menu");
const mobileMenuBtn = document.getElementById("mobile-menu-btn");
const mobileMenuBtnIcon = document.querySelector("#mobile-menu-btn a i");

heroSection.style.height = screen.height + "px";

//Header change
const primaryHeader = document.querySelector("#primary-header");
const scrollWatcher = document.createElement("div");

scrollWatcher.setAttribute("data-scroll-watcher", "");
primaryHeader.before(scrollWatcher);

const newObserver = new IntersectionObserver((entries) => {
    if(!entries[0].isIntersecting) {
    meniuMCN.style.backgroundColor = "white";
    primaryHeader.style.boxShadow = "0 2px 4px 0 rgba(0,0,0,.2)";
    meniuMCNAnchors.forEach( anchor => {
        anchor.style.color = "#242449";
    });
    meniuLogo.src = "resources/logo/logo-color.png";
    primaryHeader.style.backgroundColor = "white";  
    } else {
        meniuMCN.style.backgroundColor = "#242449";
        primaryHeader.style.boxShadow = "none";
        meniuMCNAnchors.forEach( anchor => {
            anchor.style.color = "white";
        });
        meniuLogo.src = "resources/logo/logo-backgroundColor.png";
        primaryHeader.style.backgroundColor = "#242449";
    }
}, {rootMargin: screen.height + "px 0px 0px 0px"});

newObserver.observe(scrollWatcher);


mobileMenuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("open");
    const isOpen = mobileMenu.classList.contains("open");

    if(isOpen) mobileMenuBtnIcon.classList = "fa-solid fa-xmark";
    else mobileMenuBtnIcon.classList = "fa-solid fa-bars";
}) 



