import gsap from "gsap";
const boxes = document.querySelectorAll(".cursor .circle");

let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;

// Animate boxes toward the stored coordinates
function moveBoxes() {
  boxes.forEach((box, index) => {
    gsap.to(box, {
      duration: 0.05,
      left: mouseX + "px",
      top: mouseY + "px",
      delay: index / 750,
    });
  });
}

// Update mouse position on mousemove
function handleMouseMove(e) {
  mouseX = e.pageX;
  mouseY = e.pageY;
  moveBoxes();
}

// Update position on scroll/wheel
function handleScroll() {
  // Keep the same clientX/Y but add scroll offset
  // (this assumes you want to maintain the last mouse position relative to the document)
  mouseY = mouseY + (window.scrollY - (mouseY - window.scrollY));
  moveBoxes();
}

window.addEventListener("mousemove", handleMouseMove);
// window.addEventListener("scroll", handleScroll, { passive: true });
window.addEventListener("wheel", handleMouseMove);

// Initial visibility
boxes.forEach((box) => {
  gsap.set(box, { autoAlpha: 1 });
});

// Make the 30th .text visible
const thirtiethText = document.querySelector(".text:nth-child(30)");
if (thirtiethText) {
  gsap.set(thirtiethText, { autoAlpha: 1 });
}
