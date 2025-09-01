import { useState } from "react";
import "./App.css";
import { ReactLenis, useLenis } from "lenis/react";
import { Canvas } from "@react-three/fiber";
import Three from "./components/three";


import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { SplitText } from "gsap/SplitText";

import AOS from 'aos';
import 'aos/dist/aos.css';


import { useEffect } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Skills from "./components/Skills";

function App() {

  // gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollToPlugin, SplitText);

  // Initialize AOS on mount
  
  
  useEffect(() => {
    AOS.init();
  }, []);
    
  return (
    <div className="inc h-[400vh]">
      <ReactLenis root />
      <Nav></Nav>
      <Hero></Hero>
      <Skills></Skills>
      {/* <div className="h-[500vh] w-screen"></div> */}
    </div>
  );
}

export default App;
