const bar = document.querySelector(".bar");
const tl = gsap.timeline({ defaults: { duration: 1 } });

gsap.set(bar, { scaleX: 0, transformOrigin: "left top" });
tl.to(bar, { scaleX: "+=0.2" })
  .addPause("+=0", animateCircle, [1])
  .to(bar, { scaleX: "+=0.2" })
  .addPause("+=0", animateCircle, [2])
  .to(bar, { scaleX: "+=0.2" })
  .addPause("+=0", animateCircle, [3])
  .to(bar, { scaleX: "+=0.2" })
  .addPause("+=0", animateCircle, [4])
  .to(bar, { scaleX: "+=0.2" })
  .addPause("+=0", animateCircle, [5]);

  function animateCircle(index){
    // console.log(index);
    gsap.to(`.circle:nth-child(${index+1}) div`, {backgroundColor: '#f60', scale:1.5, repeat:1, yoyo:true, duration:0.3 } )
  }
next.addEventListener("click", () => tl.play());
prev.addEventListener("click", () => tl.reverse());
