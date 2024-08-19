import './style.css';

// Mobile menu timeline
const tl = gsap.timeline({ paused: true })
tl.to(".mobile-menu", { right: '0%', duration: 0.5 })
tl.from(".mobile-menu ul li", { x: 100, opacity: 0, stagger: 0.2 })
tl.from('.brand h1', { opacity: 0, duration: 0.2 })
tl.from('.brand i', { opacity: 0, rotate: 180, duration: 0.2 })
tl.from('.close-menu', { opacity: 0, duration: 0.2 });

document.querySelector('.menu-icon').addEventListener('click', () => {
    tl.play();
});
document.querySelector('.close-menu').addEventListener('click', () => {
    tl.reverse();
});

// Page load animations timeline
const tl2 = gsap.timeline()
tl2.from("nav div i", { y: -40, opacity: 0, duration: 0.5 })
tl2.from(".up", { y: -40, opacity: 0, stagger: 0.2, duration: 0.5, delay: 0.2 })
tl2.from(".down", { y: 40, opacity: 0, stagger: 0.2, duration: 0.5, delay: 0.2 })
tl2.from("header nav ul li", { y: -20, opacity: 0, duration: 0.5, stagger: 0.2 })
tl2.from(".menu-icon", { y: -20, opacity: 0, duration: 0.5, }, "-=1")
tl2.from('.hero', { opacity: 0, x: 100, duration: 0.5, stagger: 0.2 });
