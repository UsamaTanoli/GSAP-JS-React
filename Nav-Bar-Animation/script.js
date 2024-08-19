let tl = gsap.timeline()

tl.to('.full', {
    right: "0",
    duration: 0.4
})
tl.from(".full h4", {
    duration: 0.6,
    stagger: 0.2,
    opacity: 0
})

tl.from(".full i", {
    rotate: 90,
    duration: 0.2,
    display: 'none',
    opacity: 0
})
tl.pause()
const menu = document.querySelector('.menu')
const cross = document.querySelector('.cross')
menu.addEventListener('click', () => {
    menu.style.display = 'none'
    tl.play()
})
cross.addEventListener('click', () => {
    menu.style.display = 'block'
    tl.reverse()
})