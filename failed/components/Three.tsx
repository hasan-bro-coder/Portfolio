import { OrbitControls, GizmoHelper, useGLTF, useFBX } from "@react-three/drei";

function Three() {
  let vertex = 32;
  const scene = useFBX("./models/hero2.fbx");

  return (
    <>
      <OrbitControls
        enabled={true}
        enableZoom={false}
        autoRotate={true}
        autoRotateSpeed={-3.5}
        enableDamping={true}
      />
      <ambientLight intensity={0.1} />
      <directionalLight position={[40, 30, 90]} />
      {/* <pointLight position={[40, 30, 90]} /> */}
      <mesh position={[0, 0, 0]}>
        <primitive object={scene} scale={[0.04,0.04,0.04]}/>
        {/* <sphereGeometry args={[2, vertex * 4, vertex * 2]} /> */}
        

        {/* <torusGeometry args={[1.7, 0.60, 32, 100]} /> */}
        {/* radius, widthSegments, heightSegments */}
        <meshStandardMaterial
          color="white"
          wireframe
          roughness={0.3}
          flatShading={true}
        />
      </mesh>
      {/* <mesh position={[0.5, 0.5, 0.5]}>
        <sphereGeometry args={[0.5, vertex, vertex ]} />
        <meshStandardMaterial
          color="white"
          wireframe
          roughness={0.3}
          flatShading={true}
        />
      </mesh>
      <mesh position={[0.9, 0.9, 0.9]}>
        <sphereGeometry args={[0.5, vertex, vertex ]} />
        <meshStandardMaterial
          color="white"
          wireframe
          roughness={0.3}
          flatShading={true}
        />
      </mesh> */}
    </>
  );
}

export default Three;
