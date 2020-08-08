import React, { Suspense, useRef } from "react";
import { Canvas, Dom, useLoader, useFrame } from "react-three-fiber";
import { OrbitControls, draco } from "drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import Shadows from "./Shadows";
import "./Three.scss";

// import * as THREE from "three";

import { animated } from "react-spring-three";

// const djon = "#800000";
// const pertle = "#800000";
// const obod = "#800000";

const Shoe = () => {
  const { nodes } = useLoader(GLTFLoader, "BlackShoe/black.glb", draco());

 console.log(nodes)
  return (
    <primitive object={nodes.Scene} />
  );
};

// const Sole = () => {
//   const { nodes, materials } = useLoader(
//     GLTFLoader,
//     "BeigeShoe/shoeSoleDraco.glb",
//   );
//   console.log(nodes);
//   return (
//     <group position={[0, -0.31, 0]}>
//       <mesh
//         material={materials["01 - Default"]}
//         geometry={nodes.Object019.geometry}
//       >
//         <meshPhysicalMaterial attach="material" />
//       </mesh>
//       <mesh
//         material={materials["01 - Default"]}
//         geometry={nodes.Object020.geometry}
//       >
//         <meshPhysicalMaterial attach="material" color={djon} />
//       </mesh>
//       <mesh
//         material={materials["01 - Default"]}
//         geometry={nodes.Object021.geometry}
//       ></mesh>
//       <mesh
//         material={materials["01 - Default"]}
//         geometry={nodes.Object022.geometry}
//       ></mesh>
//       <mesh
//         material={materials["01 - Default"]}
//         geometry={nodes.Object023.geometry}
//       ></mesh>
//     </group>
//   );
// };

const Suzanne = (props) => {
  // const [hover, setHover] = useState(false);
  const group = useRef();
  const shadow = useRef();

  useFrame((state, delta) => {
    const sine = Math.sin(state.clock.getElapsedTime());
    group.current.rotation.y += delta / 2;
    group.current.position.y = (1.3 + sine) * 0.2;
    shadow.current((1.2 + sine) * 1.5);
  });

  return (
    <>
      <animated.group
        ref={group}
        {...props}
        dispose={null}
        scale={[8, 8, 8]}
        rotation={[0, 0, 0.6]}
      >
        {/* <Sole /> */}
        <Shoe />
      </animated.group>
      <Shadows
        ref={shadow}
        rotation={[Math.PI / 2, 0, 0]}
        position={[0, -1.1, 0]}
        doublePass
        opacity={0.5}
        width={8}
        height={4}
        blur={1}
        far={50}
      />
    </>
  );
};

export default () => (
  <Canvas sRGB camera={{ position: [0, 1, 4.5], fov: 50, near: 1, far: 40 }}>
    <color attach="background" args={["white"]} />
    <ambientLight intensity={0.1} />
    <pointLight position={[10, 20, 10]} intensity={1.25} />
    <pointLight position={[-10, 20, -10]} color="#DAA520" intensity={0.4} />
    <Suspense fallback={<Dom center>loading...</Dom>}>
      <Suzanne />
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI / 2}
      />
    </Suspense>
  </Canvas>
);
