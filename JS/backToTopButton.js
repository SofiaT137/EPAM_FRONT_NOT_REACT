window.addEventListener("scroll", () => {
    const scrollTop = document.querySelector(".scrollTop");
    if(window.scrollY > 500){
        scrollTop.classList.add("active");
    } else {
        scrollTop.classList.remove("active")
    }
})

function scrollUp() {
    window.scrollTo(0,0);
    localStorage.removeItem("data")
    localStorage.removeItem("count")
    localStorage.removeItem("scrollPosition")
    deleteItems();
    start();
}
