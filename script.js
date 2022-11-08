const ddBtn = document.querySelectorAll(".dropdown-btn");
const ddMenu = document.querySelectorAll(".dropdown-menu");
 const navBtn=document.querySelector(".nav-btn");
 const navMenu=document.querySelector(".nav-menu");

ddBtn.forEach(e=> {
      e.addEventListener("click", () => {
  
   ddMenu.forEach(el=>{
         el.classList.remove("dd-display");
         navBtn.style.top="40%";
        ddBtn.forEach(e=>{
      e.querySelector(".dropdown-btn img").setAttribute("src", "./images/icon-arrow-down.svg");
       e.classList.remove("dd-height");
    })
  });
  
     if (e.classList.contains("active")){
   
     e.nextElementSibling.classList.remove("dd-display");
   e.classList.remove("dd-height");
      }else{
       e.querySelector(".dropdown-btn img").setAttribute("src", "./images/icon-arrow-up.svg");
     e.nextElementSibling.classList.add("dd-display");
     if (window.matchMedia("(max-width: 600px)").matches){
         e.classList.add("dd-height");
       navBtn.style.top="50%"
     }
      }
    })
})

document.addEventListener("click", (e) => {

        
		if (!e.target.closest(".nav-menu a")) {
		 ddMenu.forEach(el=>{
         el.classList.remove("dd-display");
             navBtn.style.top="40%";
        ddBtn.forEach(e=>{
      e.querySelector(".dropdown-btn img").setAttribute("src", "./images/icon-arrow-down.svg");
       e.classList.remove("dd-height");
    })
    });
  }
})


const hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click",() => {
if (hamburger.classList.contains("change-icon")){
     hamburger.classList.remove("change-icon");
       navMenu.style.display="none";
   navBtn.style.display="none";
     /*   document.querySelector(".nav-menu").style.right = "-60%";
        document.querySelector(".nav-btn").style.right = "-110%";*/
}else{
       hamburger.classList.add("change-icon");
   navMenu.style.display="flex";
   navBtn.style.display="flex";
}
});