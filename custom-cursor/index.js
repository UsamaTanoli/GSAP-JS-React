const cursor = document.querySelector('.custom-cursor')
const main = document.querySelector('.main')
const imageDiv = document.querySelector('.imageDiv')

main.addEventListener('mousemove', (e) => {
    gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.5,
    })
})

imageDiv.addEventListener('mousemove', () => {
    cursor.innerHTML = 'View More'
    gsap.to(cursor, {
        scale: 3,
        rotate: 360,
        duration: 0.8,
        backgroundColor: '#ffffff90',
    })
})

imageDiv.addEventListener('mouseleave', () => {
    cursor.innerHTML = ''
    gsap.to(cursor, {
        scale: 1,
        rotate: 0,
        duration: 0.5,
        backgroundColor: 'white',
      
    })
})
