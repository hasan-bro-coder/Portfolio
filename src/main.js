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

// let split = SplitText.create("main .name", {
//   type: "chars",
// });

document.querySelector(
  ".footer-text"
).innerHTML = `&copy; Made by: Hasanur Rahman ${new Date().getFullYear()}`;

function animateText(element) {
  const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
  let revealIndex = 0;
  const originalText = element.dataset.text.split("");
  // const lines = originalText.split("<br>");

  const intervalId = setInterval(() => {
    element.innerHTML = originalText
      // lines
      // .map((line, lineIdx) =>
      // Array.from(line)
      .map((char, charIdx) => {
        // Exception: keep 🇧🇩 (Bangladesh flag emoji) intact
        if (char === "🇧🇩") return "🇧🇩";
        if (char === " ") return " ";
        if (char === ":") return ":";
        if (charIdx < revealIndex) return originalText[charIdx];
        return charset[Math.floor(Math.random() * charset.length)];
      })
      .join("");
    // )
    // Scale increases at start, peaks at middle, then decreases to normal at end
    // .join("<br>");
    if (revealIndex > originalText.length) {
      clearInterval(intervalId);
    }
    revealIndex += 1 / 2;
  }, 30);
}

function assignAnimation(selector) {
  document.querySelectorAll(selector).forEach((element) => {
    if (!element.dataset.text) {
      element.dataset.text = element.innerHTML;
    }
    element.onmouseover = () => animateText(element);

    // Animate when element scrolls into view
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateText(element);
            obs.unobserve(element);
          }
        });
      },
      { threshold: 0.5 }
    );
    observer.observe(element);
  });
}

assignAnimation("main ul li");
assignAnimation(".about ul li");
assignAnimation(".about h2 span");
assignAnimation(".contact a");

function addScrollSkew(el, options = {}) {
  let lastScrollY = window.scrollY;
  let ticking = false;
  let resetTimeout;

  const maxSkew = options.maxSkew || 15; // maximum tilt angle
  const speedFactor = options.speedFactor || 0.4; // sensitivity
  const resetDelay = options.resetDelay || 150; // ms to reset

  function updateSkew() {
    const currentScrollY = window.scrollY;
    const scrollSpeed = currentScrollY - lastScrollY;

    // clamp skew value
    const skewValue = Math.max(
      -maxSkew,
      Math.min(maxSkew, scrollSpeed * speedFactor)
    );

    el.style.transform = `skewY(${skewValue}deg)`;

    lastScrollY = currentScrollY;
    ticking = false;

    clearTimeout(resetTimeout);
    resetTimeout = setTimeout(() => {
      el.style.transform = `skewY(0deg)`;
    }, resetDelay);
  }

  lenis.on("scroll", () => {
    if (!ticking) {
      window.requestAnimationFrame(updateSkew);
      ticking = true;
    }
  });
}

addScrollSkew(document.querySelector(".pfp"), {
  maxSkew: 10,
  speedFactor: 0.1,
  resetDelay: 300,
});

let links = gsap.utils.toArray(".links a");

document.querySelector(".up").onclick = () => {
  gsap.to(window, { duration: 7, scrollTo: 0 });
};
document.querySelector(".contact-link").onclick = () => {
  gsap.to(window, { duration: 2, scrollTo: ".contact" });
};
// gsap.set(links,{y:100})
// gsap.to(links,{
//   scrollTrigger:".about",
//   stagger: 0.5,
//   duration:1,
//   y: 0
// })

gsap.to(".titles", {
  scrollTrigger: {
    trigger: ".con",
    pin: true,
    start: "top top",

    // markers: true,
    // scrub: true,
    // end: () => "bottom+=" + window.innerHeight * 3,
    onUpdate: ({ progress }) => {
      // const progress = ScrollTrigger.getById(".con").progress;
      const titles = document.querySelectorAll(".titles .title");
      titles.forEach((title, i) => {
        let start = i * 0.25;
        let end = (i + 1) * 0.25;
        let scale = 1;
        let opacity = 0.05;
        if (progress + 0.15 >= start && progress + 0.15 < end) {
          const localProgress = (progress + 0.15 - start) / (end - start);
          scale = 400 + 400 * Math.sin(localProgress * Math.PI); // 400 to 650 to 400
          opacity = 1 * Math.sin(localProgress * Math.PI); // 400 to 650 to 400
        } else {
          scale = 400;
        }
        title.style.fontWeight = scale;
        title.style.opacity = opacity;

        // transform = `scale(${scale})`;
      });
    },
  },
  // x: () => -window.innerWidth * 3,
});

gsap.to(".images", {
  scrollTrigger: {
    trigger: ".con",
    // pin: true,
    markers: true,
    scrub: true,
    start: "top top",
    snap: {
      snapTo: (value) => {
        // Snap to start (0), end (1), or every window.innerHeight increment
        const images = document.querySelector(".images");
        const scrollHeight = images.scrollHeight;
        const increments = [0, 1];
        if (scrollHeight > 0) {
          const numSteps = Math.floor(scrollHeight / window.innerHeight);
          for (let i = 1; i <= numSteps; i++) {
            increments.push((i * window.innerHeight) / scrollHeight);
          }
        }
        // Find the closest increment
        return increments.reduce((prev, curr) =>
          Math.abs(curr - value) < Math.abs(prev - value) ? curr : prev
        );
      },
      duration: 0.3,
      delay: 0.05,
      ease: "power1.inOut",
    },
    // end: () => "bottom+=" + window.innerHeight * 3,
  },
  y: () => -window.innerHeight * 3,
});

const VITE_URL = import.meta.env.VITE_URL;
document.getElementById("contactForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const form = e.target;
  const data = {
    name: form.name.value,
    email: form.email.value,
    service: form.service.value,
    message: form.message.value,
  };
  const payload = {
    content: `New contact form submission:\nName: ${data.name}\nEmail: ${data.email}\nService: ${data.service}\nMessage: ${data.message}`,
  };
  try {
    await fetch(VITE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    form.reset();
    alert("Message is sent! we will responce back soon");
  } catch {
    alert("Failed to send message.");
  }
});

// document.querySelectorAll(".images img").forEach((el)=>{
//   gsap.to(el,{
//     scrollTrigger:{
//       trigger:el,
//       markers: true,
//       snap:true
//     }
//   })

// })
// gsap.to(".images", {
//   scrollTrigger: {
//     trigger: ".con",
//     // pin: true,
//     markers: true,
//     scrub: true,
//     start:"top top",
//     // end: () => "bottom+=" + window.innerHeight * 3,

//   },
//   y: () => -window.innerHeight * 3,
// });

// addScrollSkew(document.querySelector(".pfp"));

// document.querySelectorAll(".con div").forEach((element) => {
//   addScrollSkew(element,{
//     maxSkew:5,
//     resetDelay: 100,
//     speedFactor: 0.3
//   });
// });

// addScrollSkew(document.querySelector(".tilt"), {
// speedFactor: 0.8,
// maxSkew: 15,
// });
// let pfp = document.querySelector(".pfp")
// window.onscroll = ()=>{
//   pfp.style.skew = "10deg"
// }

// textAnimation("main ul li",()=>{})
// document.querySelectorAll("main ul li").forEach((el) => {
//   el.onmouseover = () => textAnimation(el);
// });

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

// gsap.to(".con", {
//   scrollTrigger: {
//     trigger: ".project-con",
//     pin: true,
//     markers: true,
//     scrub: true,
//     end: () => "bottom+=" + window.innerHeight * 3,
//   },
//   x: () => -window.innerWidth * 3,
// });
