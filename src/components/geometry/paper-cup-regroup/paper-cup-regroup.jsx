import React, { useRef, useMemo } from 'react'
import { useLoader, useThree } from '@react-three/fiber';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

import * as THREE from 'three'; ///

import { MeshStandartMaterial } from 'three';

import pic from  '../../../media/photo.png'; //

const PaperCupRegroup = (props) => {

  const {positionCamera} = props;
  const {imgUrl} = props;
  
//  console.log(imgUrl);
//  const { nodes, materials } = useLoader(GLTFLoader, './models/starbucks_paper_cup.glb');
//  const gltf = useLoader(GLTFLoader, './models/starbucks_paper_cup.glb');

//  const texture = new THREE.TextureLoader().load( pic );//
  //const material = new THREE.MeshBasicMaterial( { map: texture } );//

  const texture = new THREE.TextureLoader().load( imgUrl );//
  const material = new THREE.MeshBasicMaterial( { map: texture } );//


  const { nodes, materials } = useLoader(GLTFLoader, './models/cup.glb');
  const gltf = useLoader(GLTFLoader, './models/cup.glb');

  const {camera} = useThree();

  const cameraPos = useMemo(() => {
    const pos = positionCamera.position;
    camera.position.set(...pos);
    return camera;
  }, [positionCamera]);

//    console.log(positionCamera.position);
  
  const models = [];
  for(const child in nodes) {
    if (nodes[child]) {
      if (nodes[child].geometry){
        const model = {};
        model.node = nodes[child].name;
        model.material = nodes[child].material.name;
        models.push(model);
      }
    }
  }
  console.log(models);

//        <primitive object={gltf.scene} />
  /* 
         <mesh 
            geometry={nodes[models[0].node].geometry} 
            material={material}
          />
  */

  return (
    <group {...props} camera={cameraPos}>
      {/*
        models.map(( model, key) =>
          <mesh key={key} geometry={nodes[model.node].geometry} material={materials[model.material]}/>
        )*/
      }
          <mesh geometry={nodes[models[4].node].geometry} material={materials[models[4].mterial]}/>
    </group>
  )
}

export default PaperCupRegroup;