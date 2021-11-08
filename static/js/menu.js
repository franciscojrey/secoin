/*===== EXPANDER MENU  =====*/ 
const showMenu = (toggleId, navId)=>{
  const toggle = document.getElementById(toggleId),
  nav = document.getElementById(navId)

  if(toggle && nav){
    toggle.addEventListener('click', ()=>{
      nav.classList.toggle('show')
      toggle.classList.toggle('bx-x')
    })
  }
}
showMenu('header-toggle','nav-menu')

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link');   

/*
function linkAction(){
/*Active link*/
/*
navLink.forEach(n => n.classList.remove('active'));
this.classList.add('active');
}
navLink.forEach(n => n.addEventListener('click', linkAction));
*/

/* DROPDOWN MENU */

const dropdown = document.querySelector('.dropdown');
const dropdownLinks = document.querySelector('.dropdown__menu');
const dropdownIcon = document.querySelector('.dropdown__icon');
const pageWidth = window.matchMedia( "(max-width: 900px)" );

if (pageWidth.matches){
  dropdown.addEventListener("click", function() {
    dropdownLinks.classList.toggle('display-dropdown');
    dropdownIcon.classList.toggle('rotate-icon');    
  });
}

function linkAction(){
  const toggle = document.getElementById('header-toggle'),
  nav = document.getElementById('nav-menu')
  /*Remove menu mobile*/
  nav.classList.toggle('show');
  toggle.classList.toggle('bx-x');
}
navLink.forEach(n => n.addEventListener('click', linkAction));


/*===== MENU SHOW Y HIDDEN =====*/ 
/*const navMenu = document.getElementById('nav-menu'),
      toggleMenu = document.getElementById('nav-toggle'),
      closeMenu = document.getElementById('nav-close')
*/
/*SHOW*/ 
/*toggleMenu.addEventListener('click', ()=>{
    navMenu.classList.toggle('show')
})
*/
/*HIDDEN*/
/*
closeMenu.addEventListener('click', ()=>{
    navMenu.classList.remove('show')
})
*/
/*===== ACTIVE AND REMOVE MENU =====*/

/*const navLink = document.querySelectorAll('.nav__link');   
*/
/*function linkAction(){*/
  /*Remove menu mobile*/
  /*navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));*/
