import { Canvas } from "@react-three/fiber";
import Three from "./three";

function Hero() {
  return (
    <main className="w-screen h-screen main mb-10">
      <div className="about absolute bottom-20 left-10 flex flex-col gap-4">
        <h1 className="text-6xl" data-aos="fade-up" data-aos-delay="0">Hi im Hasan</h1>
        <div>
          <p className="text-lg" data-aos="fade-up" data-aos-delay="100" data-aos-anchor=".main">.Webdev .Embeded systems .Gamedev</p>
          <p className="text-lg" data-aos="fade-up" data-aos-delay="200" data-aos-anchor=".main">based one bangladesh</p>
          <p className="text-lg" data-aos="fade-up" data-aos-delay="300" data-aos-anchor=".main">16 yo</p>
        </div>
      </div>
      <Canvas>
        <Three></Three>
      </Canvas>
    </main>
  );
}

export default Hero;
