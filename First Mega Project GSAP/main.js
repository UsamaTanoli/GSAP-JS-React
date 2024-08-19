import './style.css';

// Mobile menu timeline function
function mobileMenuAnimations() {

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
}
// mobileMenuAnimations()
function navBarAnimations() {
    const tl = gsap.timeline()
    tl.from("nav div i", { y: -40, opacity: 0, duration: 0.5 })
    tl.from(".up", { y: -40, opacity: 0, stagger: 0.2, duration: 0.5, delay: 0.2 })
    tl.from(".down", { y: 40, opacity: 0, stagger: 0.2, duration: 0.5, delay: 0.2 })
    tl.from("header nav ul li", { y: -20, opacity: 0, duration: 0.5, stagger: 0.2 })
    tl.from(".menu-icon", { y: -20, opacity: 0, duration: 0.5, }, "-=1")
}
// navBarAnimations()

// Page load animations timeline
function heroSectionAnimation() {
    const tl = gsap.timeline()

    tl.from('.hero div h1', { opacity: 0, x: -200, duration: 0.5 });
    tl.from('.hero div p', { opacity: 0, x: -100, duration: 0.5 });
    tl.from('.hero div button', { opacity: 0, duration: 0.5 });
    tl.from('.hero img', { opacity: 0, x: 100, duration: 0.5 }, '-=0.7');
}
// heroSectionAnimation()
function imageSectionAnimation() {
    const tl = gsap.timeline();

    tl.from('.image-section div img', {
        scrollTrigger: {
            trigger: '.image-section', // Trigger the entire section
            scroller: 'body',
            scrub: 2, // Smooth scrolling effect
            start: 'top 80%', // Start animation when the section is near the viewport
            end: 'top 50%', // End animation before the section completely leaves the viewport
            once: true
        },
        opacity: 0,
        stagger: 0.2,
        duration: 0.8, // Slightly longer duration for a smoother fade-in
    });
}

imageSectionAnimation();

function servicesAnimation() {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.services-section h1',
            scroller: 'body',
            scrub: 2,
            markers: true,
            start: 'top 50%',
            end: 'top 50%'
        }
    })
    tl.from('.services-para-div', {
        y: 30,
        opacity: 0,
        duration: 0.5
    })
}
servicesAnimation()



