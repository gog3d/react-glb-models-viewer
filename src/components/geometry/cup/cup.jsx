/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 .\public\models\cup_1.glb
*/

import React, { useRef } from 'react'
import { Decal, useGLTF, useTexture } from '@react-three/drei'
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader';

//import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import * as THREE from 'three';
import { useCustomization } from '../../../context/customization';

const Cup = (props) => {

  const {
    cup
  } = useCustomization();

  const paperTextureProps = useTexture({
    map: '/texture/paper/Paper_Wrinkled_001_basecolor.jpg',
  });

  const plasticTextureProps = useTexture({
    map: '/texture/plastic/Plastic_Rough_001_basecolor.jpg',
  });

  //const texture = useTexture('/texture/1.jpg');

  paperTextureProps.map.repeat.set(2, 2);

  paperTextureProps.map.wrapS = paperTextureProps.map.wrapT = THREE.RepeatWrapping;

  plasticTextureProps.map.repeat.set(2, 2);

  plasticTextureProps.map.wrapS = plasticTextureProps.map.wrapT = THREE.RepeatWrapping;

  const { nodes, materials } = useGLTF('/models/cup_1.glb')
  
  return (
    <group {...props} dispose={null} position-y={-5.5}>
      <group rotation={[Math.PI / 2, 0, 0]} scale={0.1} >
        <mesh geometry={nodes.coffee_with_sugar_1.geometry} dispose={null}>
        <meshStandardMaterial 
          map={paperTextureProps.normalMap}
          color={cup.color}
        />
        </mesh>
        <mesh geometry={nodes.coffee_with_sugar_2.geometry} visible={true}>
          <meshStandardMaterial 
            roughnessMap={plasticTextureProps.roughnessMap}
            color={'black'}
          />
        </mesh>
      </group>
    </group>
  )
}

useGLTF.preload('/models/cup_1.glb');
//<primitive object={gltf.scene} />  material={materials.Material} <meshStandardMaterial />   <meshStandardMaterial {...plasticTextureProps}/>

export default Cup;