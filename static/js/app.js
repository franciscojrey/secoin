/*===== MENU SHOW Y HIDDEN =====*/ 
const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function() {
    links.classList.toggle('show-links')
});

/*===== MENU HIDE ON CLICK =====*/ 

const navLink = document.querySelectorAll('.nav-link')

function linkAction(){
    links.classList.remove('show-links')
  }
navLink.forEach(n => n.addEventListener('click', linkAction));