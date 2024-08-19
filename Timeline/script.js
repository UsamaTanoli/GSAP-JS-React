// gsap.to(".box1",{
//     x:900,
//     rotateX:360,
//     duration:1.5,
//     delay:1,
//     repeat: 1,
//     yoyo:true
// })
// gsap.to(".box2",{
//     x:900,
//     rotateY:360,
//     scale:0.5,
//     duration:1.5,
//     delay:2.5,
//     repeat: 1,
//     yoyo:true
// })
// gsap.to(".box3",{
//     x:900,
//     rotateX:360,
//     duration:1.5,
//     delay:4,
//     repeat: 1,
//     yoyo:true
// })

let tl = gsap.timeline()
tl.from("h1",{
    y:-90,
    opacity: 0,
    duration:.5,
    delay:0.5
})
tl.from("ul li",{
    x:-90,
    opacity: 0,
    duration:.5,
    stagger:0.5
})
tl.from("div p",{
    y:20,
    opacity: 0,
    scale:0,
    rotateX:360,
    duration:1,
    color: "blue",
    repeat:2,
    yoyo: true
})



// tl.to(".box1",{
//     x:900,
//     rotateX:360,
//     duration:1.5,
//     delay:1,
//     repeat: 1,
//     yoyo:true
// })
// tl.to(".box2",{
//     x:900,
//     rotateY:360,
//     scale:0.5,
//     duration:1.5,
//     delay:1,
//     repeat: 1,
//     yoyo:true
// })
// tl.to(".box3",{
//     x:900,
//     rotateX:360,
//     duration:1.5,
//     delay:1,
//     repeat: 1,
//     yoyo:true
// })