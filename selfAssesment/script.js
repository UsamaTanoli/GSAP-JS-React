gsap.registerPlugin(ScrollTrigger);

// Animation for points 1-3
gsap.from(".chooseUsElem .point-col-1", {
    scale: 0,
    opacity: 0,
    duration: 0.5,
    scrollTrigger: {
        trigger: '.chooseUsElem .point-col-1',
        start: "top 75%", // Start animation when the top of the section is at 75% of the viewport height
        end: "top 25%",   // End animation when the top of the section is at 25% of the viewport height
        scrub: 1,
        markers: true // Enable this to debug
    }
});

// Animation for central image
gsap.from(".chooseUsElem .center-img", {
    scale: 0,
    opacity: 0,
    duration: 1,
    delay:0.5,
    scrollTrigger: {
        trigger: '.chooseUsElem .center-img',
        start: "top 75%", // Start animation when the top of the central image is at 75% of the viewport height
        end: "top 25%",   // End animation when the top of the central image is at 25% of the viewport height
        scrub: 1,
        markers: true // Enable this to debug
    }
});

// Animation for points 4-6
gsap.from(".chooseUsElem .point-col-2", {
    scale: 0,
    opacity: 0,
    duration: 0.5,
    delay:1,
    scrollTrigger: {
        trigger: '.chooseUsElem .point-col-2',
        start: "top 75%", // Start animation when the top of the section is at 75% of the viewport height
        end: "top 25%",   // End animation when the top of the section is at 25% of the viewport height
        scrub: 1,
        markers: true // Enable this to debug
    }
});
