import Lenis from "lenis";
import AOS from "aos";
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

let split = SplitText.create("main .name", {
  type: "chars",
});

document.querySelector(".footer-text").innerHTML = `&copy; ${new Date().getFullYear()} Hasanur Rahman. Site Made using Vanilla js and css.`;

function hackerAnimation(el, onend) {
  let ll = "ABDEFGHIJKLMNOPQRSTUVWXYUZ1234567890"
  let ee = 0;
  document.querySelectorAll(el).forEach(async (element) => {
    let i = "HASAN";
    let ii = setInterval(() => {
      element.innerHTML = i
        .split("")
        .map((le, ind) => {
          if (le == " ") {
            return ""
          }
          if (ind < ee) {
            return i[ind];
          }
          return ll[Math.floor(Math.random() * ll.length)];
        })
        .join("");
      if (ee >= i.length + 1) {
        onend()
        clearInterval(ii);
        ee = 0;
      }
      ee += 1 / 12;
     
    }, 30);
  })
}
// for (let i = 1; i < 4; i++) {
//   console.log(i);

//   // gsap.set(gsap.utils.toArray(".skill-con"), { y: -35 });
//   gsap.to(".g" + i, {
//     scrollTrigger: {
//       trigger: ".g" + i,
//       pin: true,
//       // markers: true,
//       // scrub: 1,
//       // end: ".skills"
//       // () =>
//       // "bottom-=" + dcument.querySelector(".g" + i + " .skill").clientHeight + "- 10%",

//       // window.innerHeight * 0.35
//     },
//   });
//   // gsap.to(".g" + i + " .skill", {
//   //   scrollTrigger: {
//   //     trigger: ".g" + i,
//   //     markers: true,
//   //     start: "top center",
//   //     scrub: 1,
//   //   },
//   //   rotateX: 0,
//   // });
// }

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
    end: () => "bottom+=" + window.innerHeight * 3,
  },
  x: () => -window.innerWidth * 3,
});
