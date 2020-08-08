import React, { Suspense, useRef } from "react";
import { Canvas, Dom, useLoader, useFrame } from "react-three-fiber";
import { OrbitControls, draco } from "drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import Shadows from "./Shadows";
import "./Three.scss";

import { animated } from "react-spring-three";

const black = 0xFFD700;
const darkBlue = 0x18233f;
const beige = 0xffffff;

const Shoe = (props) => {
  const { nodes } = useLoader(GLTFLoader, "BeigeShoe/shoe/shoe.glb", draco());

  const main = nodes.Object005.material.clone();
  const obod = nodes.Object005.material.clone();

  obod.color.setHex(darkBlue)
  
  if(props.black){
    main.color.setHex(black);
  }else main.color.setHex(darkBlue);
  

  return (
    <group position={[0.01,0,0]} scale={[0.98,0.98,0.98]}>
      <mesh
        material={obod}
        geometry={nodes.Object005.geometry}
      ></mesh>
      <mesh material={main} geometry={nodes.Object013.geometry}></mesh>
      <mesh material={main} geometry={nodes.Object014.geometry}></mesh>
      <mesh material={main} geometry={nodes.Object015.geometry}></mesh>
      <mesh material={main} geometry={nodes.Object016.geometry}></mesh>
      <mesh material={obod} geometry={nodes.Object017.geometry}></mesh>
      <mesh material={main} geometry={nodes.Object018.geometry}></mesh>
      <mesh
        material={nodes.Object005.material}
        geometry={nodes.Object019.geometry}
      ></mesh>
      <mesh
        material={nodes.Object005.material}
        geometry={nodes.Object024.geometry}
      ></mesh>
      <mesh
        material={nodes.Object005.material}
        geometry={nodes.Object025.geometry}
      ></mesh>
    </group>
  );
};

const Sole = (props) => {
  const { nodes } = useLoader(GLTFLoader, "BeigeShoe/sole/sole.glb", draco());

  const main = nodes.Object019.material.clone();
  main.color.setHex(beige);

  return (
    <group position={[0,-0.32,0]}>
      <mesh material={main} geometry={nodes.Object019.geometry}></mesh>
      <mesh material={main} geometry={nodes.Object020.geometry}></mesh>
      <mesh material={main} geometry={nodes.Object021.geometry}></mesh>
      <mesh material={main} geometry={nodes.Object022.geometry}></mesh>
      <mesh material={main} geometry={nodes.Object023.geometry}></mesh>
    </group>
  );
};

const Scene = (props) => {
  const group = useRef();
  const shadow = useRef();

  useFrame((state, delta) => {
    const sine = Math.sin(state.clock.getElapsedTime());
    group.current.rotation.y += delta / 2;
    group.current.position.y = (1.3 + sine) * 0.2;
    shadow.current((1.2 + sine) * 1.5);
  });

  return (
    <React.Fragment>
      <animated.group
        ref={group}
        {...props}
        dispose={null}
        scale={[1.6, 1.6, 1.6]}
        rotation={[0, 0, 0.6]}
      >
        <Shoe />
        <Sole />
      </animated.group>
      <Shadows
        ref={shadow}
        rotation={[Math.PI / 2, 0, 0]}
        position={[0, -1.5, 0]}
        doublePass
        opacity={0.5}
        width={8}
        height={4}
        blur={1}
        far={50}
      />
    </React.Fragment>
  );
};

export default () => (
  <Canvas sRGB camera={{ position: [0, 1, 4.5], fov: 60, near: 1, far: 50 }}>
    <color attach="background" args={["white"]} />
    <ambientLight intensity={0.3} />
    <pointLight position={[10, 20, 10]} intensity={1.25} />
    <pointLight position={[-10, 20, -10]} color="#DAA520" intensity={0.4} />
    <Suspense fallback={<Dom center>Loading...</Dom>}>
      <Scene />
    </Suspense>
    <OrbitControls
      enablePan={false}
      enableZoom={false}
      minPolarAngle={Math.PI / 4}
      maxPolarAngle={Math.PI / 2}
    />
  </Canvas>
);
