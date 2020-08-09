import React, {useEffect} from 'react'
import {useLoader} from 'react-three-fiber'
import { GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";
import {draco} from 'drei'

export const Shoe = (props) => {
    const { nodes } = useLoader(GLTFLoader, "BeigeShoe/shoe/shoe.glb", draco());
  
    useEffect(props.loading,[])
   
  
    const main = nodes.Object005.material.clone();
    const obod = nodes.Object005.material.clone();
  
    obod.color.setHex(props.color);
    main.color.setHex(props.color);
  
    return (
      <group position={[0.01, 0, 0]} scale={[0.98, 0.98, 0.98]}>
        <mesh material={obod} geometry={nodes.Object005.geometry}></mesh>
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
  
  export const Sole = (props) => {
    const { nodes } = useLoader(GLTFLoader, "BeigeShoe/sole/sole.glb", draco());
  
    const main = nodes.Object019.material.clone();
    main.color.setHex(props.color);
  
    return (
      <group position={[0, -0.32, 0]}>
        <mesh material={main} geometry={nodes.Object019.geometry}></mesh>
        <mesh material={main} geometry={nodes.Object020.geometry}></mesh>
        <mesh material={main} geometry={nodes.Object021.geometry}></mesh>
        <mesh material={main} geometry={nodes.Object022.geometry}></mesh>
        <mesh material={main} geometry={nodes.Object023.geometry}></mesh>
      </group>
    );
  };
