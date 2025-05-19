// animation.js

gsap.from("#nav", {
    y: -100,
    duration: 3,
    ease: "elastic.out(1, 0.3)"
  });
  
  gsap.from(".left .links li", {
    opacity: 0,
    x: -50,
    duration: 2,
    stagger: 0.4
  });

  gsap.from(".right .links li", {
    opacity: 0,
    x: -50,
    duration: 2,
    stagger: 0.4
  });

  gsap.from(".right .icons i", {
    opacity:0,
    duration: 0.5,
    stagger: 0.2
  });
  
  