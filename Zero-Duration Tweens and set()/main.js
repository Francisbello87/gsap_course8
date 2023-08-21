

const bar = document.querySelector('.bar')
const tl = gsap.timeline({defaults:{duration:1}})

gsap.set(bar, {scaleX:0, transformOrigin: 'left top'})
tl.to(bar, {scaleX:'+=0.2'})
.to('.circle1', {duration:0, scale:2, backgroundColor: '#f60'})
.to(bar, {scaleX: '+=0.2'})
.to('.circle2', {duration:0, scale:2, backgroundColor: '#f60'})
.to(bar, {scaleX: '+=0.2'})
.to('.circle3', {duration:0, scale:2, backgroundColor: '#f60'})
.to(bar, {scaleX:'+=0.2'})
.to('.circle4', {duration:0, scale:2, backgroundColor: '#f60'})
.to(bar, {scaleX: '+=0.2'})
.to('.circle5', {duration:0, scale:2, backgroundColor: '#f60'})

next.addEventListener("click", ()=> tl.play())
prev.addEventListener("click", ()=> tl.reverse())