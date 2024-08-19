import './style.css'
const tl = gsap.timeline()
tl.to(".mobile-menu", {
    right: '0%',
    duration: 0.5
})

tl.from(".mobile-menu ul li", {
    x: 100,
    opacity: 0,
    stagger: 0.4
})
tl.from('.mobile-menu .brand', {
    opacity: 0,
    duration: 0.5
})
tl.from('.mobile-menu i', {
    opacity: 0,
    duration: 0.5
})
tl.pause()

document.querySelector('.menu-icon').addEventListener('click', () => {
    tl.play()
})


const cross = document.querySelector('.close-menu')
cross.addEventListener('click', () => {
    tl.reverse()


})