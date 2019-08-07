const hero = document.querySelector('.hero');
const slider = document.querySelector('.slider');
const logo = document.querySelector('#logo');
const hamburger = document.querySelector('.hamburger');
const headline = document.querySelector('.headline');

// const aboutimg = document.querySelector('.aboutimg');
// const aboutp = document.querySelector('.about-p');
// const abouth2 = document.querySelector('.abouth2');
// const sola = document.querySelector('.second-section');



var tl = new TimelineMax({});

tl.fromTo(hero, 1 , {height: "0%"}, {height: "80%", ease: Power2.easeInOut})
.fromTo(hero, 1.2, {width: "100%"}, {width: "80%", ease: Power2.easeInOut})
.fromTo(slider, 1.2, {x: "-100%"}, {x: "0%", ease: Power2.easeInOut}, "-=1.2")
.fromTo(logo, 0.5, {opacity: 0, x: 30}, {opacity: 1, x: 0}, "-=0.5")
.fromTo(hamburger, 0.5, {opacity:0, x: 30}, {opacity:1, x: 0}, "-=0.5" )

// .fromTo(sola, 0.5, {opacity:0}, {opacity:1}, "-=1.2" )
// .fromTo(aboutimg, 0.5, {opacity:0, x: 30}, {opacity:1, x: 0}, "-=0.5" )
// .fromTo(aboutp, 0.5, {opacity:0, x: 30}, {opacity:1, x: 0}, "-=0.5" )
// .fromTo(abouth2, 0.5, {opacity:0, x: 30}, {opacity:1, x: 0}, "-=0.5" )




