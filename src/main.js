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

for (let i = 1; i < 3; i++) {
  console.log(i);
  
  gsap.to(".g" + i + " .skill-con", {
    scrollTrigger: {
      trigger: ".g" + i,
      pin: true,
      markers: true,
      scrub: 1,
      end: ".skills"
      // () =>
        // "bottom-=" + dcument.querySelector(".g" + i + " .skill").clientHeight + "- 10%",

      // window.innerHeight * 0.35
    },
  });
}
// gsap.to(".g2 .skill-con", {
//   scrollTrigger: {
//     trigger: ".g2",
//     pin: true,
//     markers: true,
//     scrub: 1,
//     end: "65%",
//   },
// });
// gsap.to(".g3 .skill-con", {
//   scrollTrigger: {
//     trigger: ".g3",
//     pin: true,
//     markers: true,
//     scrub: 1,
//     end: "65%",
//   },
// });
