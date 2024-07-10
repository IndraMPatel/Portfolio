/*=============== TOGGLE ICON NAVBAR ===============*/

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};


let readMoreLink = document.querySelector('#read-more');
let content = document.querySelector('.content');

readMoreLink.onclick = (event) => {
  event.preventDefault(); // Prevent the default link behavior
  content.classList.toggle('show-full');
  readMoreLink.textContent = content.classList.contains('show-full') ? 'Read Less' : 'Read More';
};


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach((link) => {
        link.classList.remove('active');
      });
      document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
    }
  });

  /*=============== STICKY NAVBAR ===============*/
  let header = document.querySelector('header');

  header.classList.toggle('sticky', window.scrollY > 100);
};

/*=============== REMOVE TOGGLE ICON AND NAVBAR WHEN CLICK NAVBAR LINK  ===============*/
navLinks.forEach((link) => {
  link.onclick = () => {
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
  };
});

ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', {origin: 'top'});
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .content form', {origin: 'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img', {origin: 'left'});
ScrollReveal().reveal('.home-content p, .about-content', {origin: 'right'});

/*=============== Typed js ===============*/

const typed =new Typed('.multiple-text',{
    strings: ['Frontend Web Developer!', 'Cloud Computing Enthusiast!', 'Software Engineer!', 'Sales-Marketing Person!'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop:true

});

