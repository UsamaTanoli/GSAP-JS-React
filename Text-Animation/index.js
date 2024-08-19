function breakText() {
    let h1 = document.querySelector('h1')
    let h1Text = h1.textContent
    let splitedText = h1Text.split("")
    let halfText = Math.floor(splitedText.length / 2)
    let cut = '';
    splitedText.map((each, index) => {
        if (index < halfText) {
            return cut += `<span class="upSide">${each}</span>`
        } else {
           return cut += `<span class="downSide">${each}</span>`
        }
    })

   h1.innerHTML = cut;
}
breakText()
gsap.from('h1 .upSide', {
    y: 100,
    x:-100,
    opacity: 0,
    duration: 0.5,
    delay: 0.5,
    stagger: 0.15
})

gsap.from('h1 .downSide', {
    y: -100,
    x:100,
    opacity: 0,
    duration: 0.5,
    delay: 0.5,
    stagger: -0.15
})