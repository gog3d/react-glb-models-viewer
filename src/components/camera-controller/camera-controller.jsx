import React, { useEffect } from 'react';
import { useThree } from '@react-three/fiber';
//import { Canvas }   from '@react-three/fiber';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
//import CanvasContainer from '../canvas-container/canvas-container';

const CameraController = () => {
  const { camera, gl } = useThree();
//  console.log(camera.position);
  useEffect(
    () => {

      const controls = new OrbitControls(camera, gl.domElement);
      controls.minDistanse = 3;
      controls.maxDistanse = 20;
      return () => {
        controls.dispose();
      };
    },
    [camera, gl]
  );
  
  return null;
};

export default CameraController;
