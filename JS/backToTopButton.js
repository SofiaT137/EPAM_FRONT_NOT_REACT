window.addEventListener("scroll", () => {
    const scrollTop = document.querySelector(".scrollTop");
    if(window.scrollY > 500){
        scrollTop.classList.add("active");
    } else {
        scrollTop.classList.remove("active")
    }
})

// const scrollTopButton = document.querySelector('.scrollTop');

// console.log(scrollTopButton)
// scrollTopButton.addEventListener('click', () => {console.log('asdasd')})
// scrollTopButton.addEventListener("click", (event) => {
//     console.log("click!")
// });


function scrollUp() {
    window.scrollTo(0,0);
  }
