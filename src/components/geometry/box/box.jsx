import React, { useRef, useEffect, useState } from 'react';
import { useThree, useFrame} from '@react-three/fiber';


const Box = (props) => {
//  const ref = useRef();
/*
  useFrame((_, delta) => {
    if(mouseDown) {
      ref.current.rotation.x += 0.1 * delta;
      ref.current.rotation.y += 0.1 * delta;
      ref.current.rotation.z += 0.1 * delta;
    }
  });
*/
  return (
    <mesh {...props}>
      <boxGeometry />
      <meshBasicMaterial color={'blue'} />
    </mesh>
  );
};

export default Box;
