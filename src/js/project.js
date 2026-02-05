import gsap from "gsap";


// const nodes = [].slice.call(document.querySelectorAll(".project"), 0);
// const directions = { 0: "top", 1: "right", 2: "bottom", 3: "left" };
// const classNames = ["in", "out"]
//   .map((p) => Object.values(directions).map((d) => `${p}-${d}`))
//   .reduce((a, b) => a.concat(b));

// const getDirectionKey = (ev, node) => {
//   const { width, height, top, left } = node.getBoundingClientRect();
//   const l = ev.pageX - (left + window.pageXOffset);
//   const t = ev.pageY - (top + window.pageYOffset);
//   const x = l - (width / 2) * (width > height ? height / width : 1);
//   const y = t - (height / 2) * (height > width ? width / height : 1);
//   return Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4;
// };

// class Item {
//   constructor(element) {
//     this.element = element;
//     this.element.addEventListener(
//       "mouseover",
//       (ev) => this.update(ev, "in"),
//       true
//     );
//     this.element.addEventListener(
//       "mouseout",
//       (ev) => this.update(ev, "out"),
//       true
//     );
//   }

//   update(ev, prefix) {
//     this.element.classList.remove(...classNames);
//     this.element.classList.add(
//       `${prefix}-${directions[getDirectionKey(ev, this.element)]}`
//     );
//   }
// }

// nodes.forEach((node) => new Item(node));

const items = document.querySelectorAll('.project-item');

items.forEach(item => {
  const container = item.querySelector('.project-hover');
  
  // 1. Kill any existing tweens on the container when starting
  // to prevent "stuck" states from previous interactions
  item.addEventListener('mouseenter', () => {
    gsap.killTweensOf(container); 
    gsap.fromTo(container, 
      { scale: 0, opacity: 0 },
      { 
        scale: 1, 
        opacity: 1, 
        duration: 0.4, 
        ease: "back.out(1.7)",
        overwrite: "auto" // Automatically handles conflicting animations
      }
    );
  });

  item.addEventListener('mousemove', (e) => {
    const rect = item.getBoundingClientRect();
    const x = e.clientX - rect.left + 20;
    const y = e.clientY - rect.top + 20;

    // Use gsap.set for movement so it doesn't try to "animate" 
    // to a position that is already outdated by the time it gets there
    gsap.set(container, { x, y });
  });

  item.addEventListener('mouseleave', () => {
    gsap.to(container, {
      scale: 0,
      opacity: 0,
      duration: 0.3,
      ease: "power2.in",
      overwrite: "auto"
    });
  });
});


// Loop through each project item
const projectItems = document.querySelectorAll('.project-item');

projectItems.forEach((item) => {
  const texts = item.querySelectorAll('.project-name, .project-detail');

  gsap.from(texts, {
    scrollTrigger: {
      trigger: item,       
      start: "top 90%",    
    },
    x: -50,               
    opacity: 0,           
    duration: 0.8,
    stagger: 0.2,          
    ease: "power2.out"    
  });
})