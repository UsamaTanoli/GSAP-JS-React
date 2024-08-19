// gsap.from(".box1" , {
//     x:900,
//     rotate:360,
//     duration:2,
//     backgroundColor:'blue',
//     borderRadius: "50%",
//     scale:0,
//     delay:1
// })
// gsap.from(".box2" , {
//     x:900,
//     duration:2,
//     delay:3
// })

// gsap.from("h1" ,{
//     opacity: 0,
//     duration: 1,
//     y:50,
//     delay : 1,
//     stagger: .3,
// })
gsap.to(".box1",{
    x:1020,
    // rotate: 360,
    duration:1,
    delay:1,
    repeat:2,
    yoyo:true
})