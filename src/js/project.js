import {gsap} from "gsap";


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
  const image = item.querySelector('.project-hover');

  item.addEventListener('mousemove', (e) => {
    // getBoundingClientRect gets the element's position relative to the viewport
    const rect = item.getBoundingClientRect();
    
    // Calculate position relative to the project-item container
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Apply the transform
    // Added a slight offset (20px) so it doesn't sit directly under the cursor
    image.style.transform = `translate(${x + 20}px, ${y + 20}px)`;
    image.style.opacity = '1';
  });

  item.addEventListener('mouseleave', () => {
    image.style.opacity = '0';
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