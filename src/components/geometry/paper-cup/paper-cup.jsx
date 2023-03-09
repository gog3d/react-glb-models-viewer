import React, { useRef } from 'react'
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

import { MeshStandartMaterial } from 'three';

const PaperCup = (props) => {

// const { nodes, materials } = useLoader(GLTFLoader, './models/coffee_shop_cup.glb');
// const gltf = useLoader(GLTFLoader, './models/coffee_shop_cup.glb');
  const { nodes, materials } = useLoader(GLTFLoader, './models/starbucks_paper_cup.glb');
  const gltf = useLoader(GLTFLoader, './models/starbucks_paper_cup.glb');

//  gltf.scene.traverse((child) => {
//    if(child.isMesh){
//      console.log(child);
//    }
//  });
  
  console.log({nodes});
  
  const models = [];
  for(const child in nodes) {
    if (nodes[child]) {
//      if (nodes[child].isMesh){
      if (nodes[child].geometry){
        const model = {};
        model.node = nodes[child].name;
        model.material = nodes[child].material.name;
        models.push(model);

        console.log(model);
      }
    }
  }

//  console.log({ nodes, materials });
//    <primitive object={gltf.scene} />
//material={materials[model.material]}
  return (
    <group {...props}>
      {
       /* <primitive object={gltf.scene} />*/
      
        models.map(( model, key) =>
          <mesh key={key} geometry={nodes[model.node].geometry} material={materials[model.material]}/>
        )
/*        nodes.traverse(( node, key) =>
          <mesh key={key} geometry={node.geometry} material={materials[node.material]}/>
        )*/


      }

    </group>
  )
}

export default PaperCup;