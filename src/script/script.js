'use strict';

const header = document.querySelector('header');
const article = document.querySelector('article');
const section= document.querySelector('section');
const contactMe = document.getElementById('contact-image-container');
const heroBanner = document.getElementById('hero-banner');
const buttonCallToAction = document.querySelector('button');
const buttonContact = document.getElementById('btn-contact');
const h1 = document.querySelector('h1');
const footer = document.querySelector('footer');

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const animationList = [
  header,
  h1,
  article,
  section,
  contactMe,
  heroBanner,
  buttonCallToAction,
  buttonContact,
  footer
];

animationList.forEach(element => {
  observer.observe(element);
});

/* observer.observe(header);
observer.observe(h1);
observer.observe(article);
observer.observe(section);
observer.observe(contactMe);
observer.observe(heroBanner);
observer.observe(buttonCallToAction);
observer.observe(buttonContact);
observer.observe(footer); */
