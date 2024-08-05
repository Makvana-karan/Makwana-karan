import gsap from "gsap";

export const navlink = () => {
  var tl = gsap.timeline();

  tl.from(".link", {
    y: -100,
    opacity: 0,
    delay: 0.5,
    duration: 0.5,
    stagger: 0.2,
  });

  tl.to(".link", {
    y: 0,
    opacity: 1,
    duration: 0.5,
    stagger: 0.2,
  });
};
