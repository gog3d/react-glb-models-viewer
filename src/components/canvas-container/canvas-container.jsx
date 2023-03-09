import React, { useMemo, useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useThree } from '@react-three/fiber';
import { Canvas } from '@react-three/fiber';
import CameraController from '../camera-controller/camera-controller';

const CanvasContainer = ({children}) => {
  const ref = useRef();
  const { camera } = useThree();
  console.log(camera);
  
  const onDown = () => {
    console.log('down');
  };

  return (
    <Canvas onPointerDown={onDown}>
      <ambientLight />
      <spotLight intensity={0.3} position={[5, 10, 50]} />
      <CameraController />
      <primitive object={new THREE.AxesHelper(10)} />
      { children }
    </Canvas>
  );
};

export default CanvasContainer;
