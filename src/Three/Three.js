import React, { Suspense, useRef } from "react";
import { Canvas, Dom, useFrame } from "react-three-fiber";
import { OrbitControls } from "drei";

import Shadows from "./Shadows";
import "./Three.scss";

import { animated } from "react-spring-three";

import {Shoe , Sole} from './Shoes/BeigeShoe'

const Scene = (props) => {
  console.log(props)
  
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
        scale={[1.3, 1.3, 1.3]}
        rotation={[0, 0, 0.6]}
      >
        <Shoe color={props.shoeColor}/>
        <Sole color={props.soleColor}/>
      </animated.group>
      <Shadows
        ref={shadow}
        rotation={[Math.PI / 2, 0, 0]}
        position={[0, -1.5, 0]}
        doublePass
        opacity={0.3}
        width={8}
        height={4}
        blur={1}
        far={50}
      />
    </React.Fragment>
  );
};

export default (props) => (
  <Canvas sRGB camera={{ position: [0, 1, 4.5], fov: 45, near: 2, far: 9 }}>
    <color attach="background" args={["white"]} />
    <ambientLight intensity={0.5} />
    <pointLight position={[10, 20, 10]} intensity={1.25} />
    <pointLight position={[-10, 20, -10]} color="#DAA520" intensity={0.4} />
    <Suspense fallback={<Dom center>Loading...</Dom>}>
      <Scene {...props} />
    </Suspense>
    <OrbitControls
      enablePan={false}
      enableZoom={false}
      minPolarAngle={Math.PI / 4}
      maxPolarAngle={Math.PI / 2}
    />
  </Canvas>
);

