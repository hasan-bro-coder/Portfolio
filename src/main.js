import "./style.css";
import Lenis from "lenis";
import AOS from "aos";
import "aos/dist/aos.css";
import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, SplitText);
const lenis = new Lenis();
lenis.on("scroll", ScrollTrigger.update);
gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});
gsap.ticker.lagSmoothing(0);
AOS.init();

for (let i = 1; i < 4; i++) {
  console.log(i);

  // gsap.set(gsap.utils.toArray(".skill-con"), { y: -35 });
  gsap.to(".g" + i, {
    scrollTrigger: {
      trigger: ".g" + i,
      pin: true,
      // markers: true,
      // scrub: 1,
      // end: ".skills"
      // () =>
      // "bottom-=" + dcument.querySelector(".g" + i + " .skill").clientHeight + "- 10%",

      // window.innerHeight * 0.35
    },
  });
  // gsap.to(".g" + i + " .skill", {
  //   scrollTrigger: {
  //     trigger: ".g" + i,
  //     markers: true,
  //     start: "top center",
  //     scrub: 1,
  //   },
  //   rotateX: 0,
  // });
}

// gsap.to(".project-con", {
//   scrollTrigger: {
//     trigger: ".project-con",
//     pin: true,
//     markers: true,
//   },
// });

gsap.to(".con", {
  scrollTrigger: {
    trigger: ".project-con",
    pin: true,
    markers: true,
    scrub: true,
    end: ()=> "bottom+="+window.innerHeight * 2
  },
  x: () => -window.innerWidth * 2,
});
