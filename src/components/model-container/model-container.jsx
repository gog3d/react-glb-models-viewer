import React, { useRef, useEffect, useState } from 'react';
import { useThree, useFrame} from '@react-three/fiber';

const ModelContainer = ({rotate, children}) => {
  const ref = useRef();
  useFrame((_, delta) => {
    if(rotate) {
//      ref.current.rotation.x += 0.1 * delta;
      ref.current.rotation.y += 0.1 * delta;
//      ref.current.rotation.z += 0.1 * delta;
    }
  });
  
  return (
    <group ref={ ref }>
      { children }
    </group>
  );
};

export default  ModelContainer;
