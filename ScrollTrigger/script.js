gsap.from(".page2 .box", {
    scale: 0,
    opacity: 0,
    rotate:720,
    duration: 1,
    scrollTrigger: {
        trigger: '.page2 .box',
        scroller: 'body',
        markers: true,
        start: "top 50%",
        end:"top 10%",
        scrub:2,
        pin:true

    }

})

// gsap.from(".page2 h1", {
//     opacity: 0,
//     x: '500',
//     duration: 3,
//     scrollTrigger: {
//         trigger: ".page2 h1",
//         scroller: 'body',
//         markers:true,
//         start: "top 50%"
//     }
// })

// gsap.from(".page2 h2", {
//     opacity: 0,
//     x: '-500',
//     duration: 3,
//     scrollTrigger: {
//         trigger: ".page2 h2",
//         scroller: 'body',
//         markers:true,
//         start: "top 50%"
//     }
// })