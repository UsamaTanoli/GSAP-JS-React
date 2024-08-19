let initialPath = 'M 10 100 Q 500 100 990 100';
let finalPath = 'M 10 100 Q 500 100 990 100';

const string = document.querySelector('.string');
string.addEventListener('mousemove', (dets) => {
    initialPath = `M 10 100 Q ${dets.clientX} ${dets.clientY} 990 100`;
    gsap.to("svg path", {
        attr: { d: initialPath },
        duration: 0.5, // Smooth transition
        ease: "power3.out"
    });
});

string.addEventListener('mouseleave', () => {
    gsap.to("svg path", {
        attr: { d: finalPath },
        duration: 2,
        ease: 'elastic.out(1, 0.2)' // Bouncing effect
    });
});
