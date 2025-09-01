import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useRef } from "react";

function Skils() {
  gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollToPlugin);

  let main = useRef<HTMLDivElement>(null);
  let g1 = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // gsap.to(main.current, {
    //   scrollTrigger: {
    //     trigger: "main",
    //     // pin:true,
    //     markers: true,
    //     // scrub: 1,
    //     // end: "65%"
    //     // window.innerHeight * 0.35
    //   }, // s
    //   y: "+="+window.innerHeight
    // })

    if (!g1.current) {
      return 
    }
    console.log("height",g1.current?.clientHeight);
    
    gsap.to(".g1 .skill-con", {
      scrollTrigger: {
        trigger: ".g1",
        pin:true,
        markers: true,
        scrub: 1,
        end: window.innerHeight - g1.current?.clientHeight
        // window.innerHeight * 0.35
      }, // start the animation when ".box" enters the viewport (once)
    });
    gsap.to(".g2 .skill-con", {
      scrollTrigger: {
        trigger: ".g2",
        pin:true,
        markers: true,
        scrub: 1,
        end: "65%"

      }, // start the animation when ".box" enters the viewport (once)
    });
    gsap.to(".g3 .skill-con", {
      scrollTrigger: {
        trigger: ".g3",
        pin:true,
        markers: true,
        scrub: 1,
        end: "65%"
        
      }, // start the animation when ".box" enters the viewport (once)
    });
  });
  return (
    <div ref={main} className="flex flex-col items-center justify-center h-full">
      <h1 className="text-8xl" data-aos="fade-up">
        Skills
      </h1>
      <div className="flex flex-col w-[80vw] h-full">
        <div className="skills">
          <div className="g1 skill-con" ref={g1}>
            <div className="skill">
              <h1 className="text-6xl">Web Development</h1>
              <div>
                <p className="text-lg">
                  i have been doing backed dev for 2 years
                </p>
                <p className="text-lg">specialize in: Backend</p>
                <p className="text-lg">Stack: react,supabase</p>
              </div>
              <button className="btn">See projects</button>
            </div>
          </div>
          <div className="g2 skill-con">
            <h1 className="text-6xl">Game Development</h1>
            <div>
              <p className="text-lg">i have been doing game dev for 2 years</p>
              <p className="text-lg">specialize in: Game mechainch</p>
              <p className="text-lg">Stack: Godot,raylib(C,C++)</p>
            </div>
            <button className="btn">See projects</button>
          </div>
          <div className="g3 skill-con">
            <h1 className="text-6xl">Embedded System</h1>
            <div>
              <p className="text-lg">
                i have been doing backed dev for 2 years
              </p>
              <p className="text-lg">specialize in: IOT</p>
              <p className="text-lg">Devices: Arduino,Esp32</p>
            </div>
            <button className="btn">See projects</button>
          </div>
          <div className="g7"></div>
        </div>
        {/* <div className="flex">
                <div className="flex-grow">
                    <h1>Web Development</h1>
                    <p>i have been doing backed dev for 2 years</p>
                    <p>Stack: react,supabase</p>
                    <button>See projects</button>
                </div>
                <div className="model flex-grow"></div>
            </div> */}
        {/* <div className="">
                <div className="">
                    <h1></h1>
                    <p></p>
                </div>
                <div className="model"></div>
            </div>
            <div className="">
                <div className="">
                    <h1></h1>
                    <p></p>
                </div>
                <div className="model"></div>
            </div> */}
      </div>
    </div>
  );
}

export default Skils;
