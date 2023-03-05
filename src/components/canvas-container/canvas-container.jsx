import React, { useMemo, useEffect } from 'react';
import * as THREE from 'three';
import { useThree } from '@react-three/fiber';
import { Canvas } from '@react-three/fiber';

const CanvasContainer = ({children}) => {

  return (
    <Canvas>
    <ambientLight intensity={0.1} />
    <directionalLight color="red" position={[1, 1, 5]} />
      { children }
    </Canvas>
  );
};

export default CanvasContainer;
