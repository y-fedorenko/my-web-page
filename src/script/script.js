'use strict';

function select(selector, parent = document) {
  return parent.querySelector(selector);
}

const header = document.querySelector('header');
const article = document.querySelector('article');
const section= document.querySelector('section');
const contactMe = document.getElementById('contact-image-container');
const heroBanner = document.getElementById('hero-banner');


const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

observer.observe(header);
observer.observe(article);
observer.observe(section);
observer.observe(contactMe);
observer.observe(heroBanner);