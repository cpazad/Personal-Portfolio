document.getElementById("about-section").addEventListener("mouseenter", startScroll);

function startScroll() {
    document.getElementById("scrolling-text").style.animation = "scroll-up 30s linear infinite";
}

document.getElementById("about-section").addEventListener("mouseleave", stopScroll);

function stopScroll() {
    document.getElementById("scrolling-text").style.animation = "none";
}
