const tl = gsap.timeline({defaults:{duration:2}})
.to('h2', {clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'})
.from("h2 div", {yPercent:100}, 0)