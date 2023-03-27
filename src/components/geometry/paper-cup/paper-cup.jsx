import React, { useRef } from 'react'
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import * as THREE from 'three'; ///

import { MeshStandartMaterial } from 'three';

const PaperCup = (props) => {

  const {imgUrl} = props;


  const { nodes, materials } = useLoader(GLTFLoader, './models/starbucks_paper_cup.glb');
  const gltf = useLoader(GLTFLoader, './models/starbucks_paper_cup.glb');

//  console.log({nodes});
  
  const models = [];
  for(const child in nodes) {
    if (nodes[child]) {
      if (nodes[child].geometry){
        const model = {};
        model.node = nodes[child].name;
        model.material = nodes[child].material.name;
        models.push(model);
//        console.log(model);
      }
    }
  }

  const texture = new THREE.TextureLoader().load( imgUrl );//
  const material = imgUrl ? 
    new THREE.MeshBasicMaterial( { map: texture } )
     : 
    materials[models[0].material];



  return (
    <group {...props}>
      {
//        models.map(( model, key) =>
//          <mesh key={key} geometry={nodes[model.node].geometry} material={materials[model.material]}/>
//        )
          <mesh  geometry={nodes[models[0].node].geometry} material={material}/>
      }

    </group>
  )
}

export default PaperCup;