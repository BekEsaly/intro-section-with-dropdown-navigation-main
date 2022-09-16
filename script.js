const ddBtn = document.querySelectorAll(".menu-items");
ddBtn.forEach(e => {
    e.addEventListener("mouseover", () => {
        const ddMenu = e.querySelector(".menu-dropdown");
        ddMenu.style.opacity = "1";
        e.querySelector(".dropdown-btn img").setAttribute("src", "./images/icon-arrow-up.svg");
        document.querySelector(".nav-btn").style.top="60%";
    })
});
ddBtn.forEach(e => {
    e.addEventListener("mouseout", () => {
        const ddMenu = e.querySelector(".menu-dropdown");
        ddMenu.style.opacity = "0";
        e.querySelector(".dropdown-btn img").setAttribute("src", "./images/icon-arrow-down.svg");
document.querySelector(".nav-btn").style.top="35%";
    })
});


const hamburger = document.querySelector(".hamburger");
const openMenu = document.querySelector(".open-menu");
const closeMenu = document.querySelector(".close-menu");
hamburger.addEventListener("click", () => {

    openMenu.classList.add("hide");
    closeMenu.classList.add("active");
    document.querySelector(".nav-menu").style.right = "0";
    document.querySelector(".nav-btn").style.right = "20%";


    hamburger.addEventListener("click", (e) => {

        openMenu.classList.remove("hide");
        closeMenu.classList.remove("active");
        document.querySelector(".nav-menu").style.right = "-60%";
        document.querySelector(".nav-btn").style.right = "-110%";
       
    })
 

});
closeMenu.addEventListener("click",()=>{
    document.location.reload();
})
 