import './style.css';

// Mobile Menu Animations (VIP)
function mobileMenuAnimations() {
    const tl = gsap.timeline({ paused: true });

    tl.to(".mobile-menu", { right: '0%', duration: 0.4 })
        .from(".mobile-menu ul li", { x: 100, opacity: 0, stagger: 0.15, duration: 0.4 })
        .from('.brand h1', { opacity: 0, duration: 0.3 })
        .from('.brand i', { opacity: 0, rotate: 180, duration: 0.3 })
        .from('.close-menu', { opacity: 0, duration: 0.3 });

    document.querySelector('.menu-icon').addEventListener('click', () => tl.play());
    document.querySelector('.close-menu').addEventListener('click', () => tl.reverse());
}

// Navbar Animations
function navBarAnimations() {
    const tl = gsap.timeline();

    tl.from("nav div i", { y: -40, opacity: 0, duration: 0.4 })
        .from(".up", { y: -40, opacity: 0, stagger: 0.15, duration: 0.4 }, '-=0.2')
        .from(".down", { y: 40, opacity: 0, stagger: 0.15, duration: 0.4 }, '-=0.2')
        .from("header nav ul li", { y: -20, opacity: 0, duration: 0.4, stagger: 0.15 })
        .from(".menu-icon", { y: -20, opacity: 0, duration: 0.4 }, "-=1");
}

// Hero Section Animation (VIP)
function heroSectionAnimation() {
    const tl = gsap.timeline();

    tl.from('.hero div h1', { opacity: 0, x: '-50vw', duration: 0.6, delay: 0.5 })
        .from('.hero div p', { opacity: 0, x: '-30vw', duration: 0.5, delay: 0.5 })
        .from('.hero div button', { opacity: 0, duration: 0.5, delay: 0.5 })
        .from('.hero img', { opacity: 0, x: '30vw', duration: 0.5 }, '-=0.6');
}

// Image Section Animation
function imageSectionAnimation() {
    gsap.from('.image-section div img', {
        scrollTrigger: {
            trigger: '.image-section',
            start: 'top 50%',
            end: 'top -60%',
            once: true,
        },
        opacity: 0,
        y: 30,
        stagger: 0.2,
        duration: 0.7,
    });
}

// Services Section Animation (VIP)
function servicesAnimation() {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.services-section div',
            scrub: 1.5,
            start: 'top 70%',
            end: 'top 0%',
        },
    });

    tl.from('.services-para-div', { y: 50, opacity: 0, duration: 0.5 })
        .from('.lightcard.left.one', {
            x: -200,
            opacity: 0,
            scale: 0.5,
            duration: 2.8,
            delay: 0.5
        }, 'first')
        .from('.darkcard.right.one', {
            x: 200,
            opacity: 0,
            scale: 0.5,
            duration: 2.8,
            delay: 0.5
        }, 'first')
        .from('.lightcard.right.two', {
            x: 200,
            opacity: 0,
            scale: 0.5,
            duration: 2.8,
            delay: 0.5
        }, 'second')
        .from('.darkcard.left.two', {
            x: -200,
            opacity: 0,
            scale: 0.5,
            duration: 2.8,
            delay: 0.5
        }, 'second');
}

// Things Section Animation (VIP)
function thingsAnimation() {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.things-section',
            scrub: 2,
            start: 'top 100%',
            end: 'top 40%',
        }
    });

    tl.from('.things-section', { opacity: 0, duration: 1 })
        .from('.things-section div .first-col', { x: -100, y: 50, opacity: 0, duration: 1 }, 'things')
        .from('.things-section div .sec-col', { x: 100, y: -50, opacity: 0, duration: 1 }, 'things');
}

// Case Section Animation
function caseSectionAnimation() {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.case-sec',
            scrub: 2,
            start: 'top 75%',
            end: 'top 40%',
        }
    });

    tl.from('.case-sec .title', { opacity: 0, x: -100, stagger: 0.2, duration: 1 })
        .from('.case-sec .case-card', { opacity: 0, x: 300, stagger: 0.2, duration: 1 })
        .from('.case-sec .case-card .first', { opacity: 0, duration: 1 })
        .from('.case-sec .case-card .second', { opacity: 0, duration: 1 })
        .from('.case-sec .case-card .third', { opacity: 0, duration: 1 });
}

// Responsive Animations
function responsiveAnimations() {
    gsap.matchMedia().add("(min-width: 768px)", () => {
        // Desktop and tablet animations
        navBarAnimations();
        heroSectionAnimation();
        imageSectionAnimation();
        servicesAnimation();
        thingsAnimation()
        caseSection()
    });

    gsap.matchMedia().add("(max-width: 767px)", () => {
        // Mobile-specific animations
        mobileMenuAnimations();
        heroSectionAnimation();
        imageSectionAnimation();
        servicesAnimation();
        thingsAnimation()
        caseSection()
    });
}

// Initialize Animations
responsiveAnimations();
