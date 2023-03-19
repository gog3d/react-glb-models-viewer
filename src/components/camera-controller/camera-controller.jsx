import React, { useEffect } from 'react';
import { useThree } from '@react-three/fiber';
//import { Canvas }   from '@react-three/fiber';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
//import CanvasContainer from '../canvas-container/canvas-container';

const CameraController = (props) => {
  const {cameraPosition} = props;
  const { camera, gl } = useThree();
//  console.log(camera.position);
  useEffect(
    () => {

      const controls = new OrbitControls(camera, gl.domElement);
      controls.minDistanse = 3;
      controls.maxDistanse = 20;
//      cameraPosition ?  camera.position.set(cameraPosition[0], cameraPosition[1], cameraPosition[2]) : null;
      return () => {
        controls.dispose();
      };
    },
    [camera, gl, cameraPosition]
  );
  
  return null;
};

export default CameraController;
