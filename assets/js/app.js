const navMenu = document.getElementById('nav-menu'),
navToggle = document.getElementById('nav-toggle'),
navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', ()=>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove("show-menu")
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 100 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 100) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

// Follow popup
var numLikes = 0;

function likes() {
	numLikes = numLikes;
	document.getElementById("likes").innerHTML = numLikes;
}
function myFunction(x){
    x.classList.toggle("bxs-heart");
}

// loader
onload = () =>{
    const load = document.getElementById('load')
    setTimeout(() =>{
        load.style.display = "none";
    }, 2500)
}

// service modal
const modalViews = document.querySelectorAll('.service__modal'),
    modalBtns = document.querySelectorAll('.service__button'),
    modalClose = document.querySelectorAll('.service__modal-close')

let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((mb, i) =>{
    mb.addEventListener('click', () =>{
        modal(i)
    })
})
modalClose.forEach((mc, i) =>{
    mc.addEventListener('click', () =>{
        modalViews.forEach((mv) =>{
            mv.classList.remove('active-modal')
        })
    })
})

// SCROLL RELEVE
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    delay: 400,
    duration: 2500,
})
ScrollReveal().reveal('.home__data');
ScrollReveal().reveal('.home-img', {delay: 700, origin: 'bottom'});
ScrollReveal().reveal('.about-img', {origin: 'left'});
ScrollReveal().reveal('.contact__left', {origin: 'left'});
ScrollReveal().reveal('.service__box', {origin: 'right'});
ScrollReveal().reveal('.contact__right', {origin: 'right'});
                
        