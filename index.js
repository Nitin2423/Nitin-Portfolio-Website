burger = document.querySelector(".hamburger")
navitem = document.querySelector(".navitem")
topnav = document.querySelector(".topnav")
burger.addEventListener("click", ()=>{
   navitem.classList.toggle('v-class');
   topnav.classList.toggle('h-class');

})