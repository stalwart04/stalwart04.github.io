const tl = gsap.timeline({
  defaults: {
    duration: 2,
    yoyo: true,
    ease: 'power2.inOut'
  }
});

tl.fromTo('.left, .right', {
  svgOrigin: '640 500',
  scaleX: (i) => [0.6, 0.85][i],
  x: -200
}, {
  scaleX: (i) => [0.85, 0.6][i],
  x: 200
}).play(0.5);

const tl2 = gsap.timeline();

document.querySelectorAll('text').forEach((t, i) => {
  tl2.add(
    gsap.fromTo(t, {
      xPercent: -100,
      x: 700
    }, {
      duration: 1,
      xPercent: 0,
      x: 575,
      ease: 'sine.inOut'
    }), i * 0.2
  );
});

window.onpointermove = (e) => {
  tl2.pause();
  gsap.to([tl, tl2], {
    duration: 2,
    ease: 'power4',
    progress: e.x / innerWidth
  });
};
