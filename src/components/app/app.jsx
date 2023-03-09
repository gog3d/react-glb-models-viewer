import React, { useState, useMemo, useRef, useEffect } from 'react';
import styles from './app.module.css';
import * as THREE from 'three';

import { Canvas, useThree } from '@react-three/fiber';
import CanvasContainer from '../canvas-container/canvas-container';
import Box from '../geometry/box/box';
import PaperCup from '../geometry/paper-cup/paper-cup';
import CameraController from '../camera-controller/camera-controller';
import ModelContainer from '../model-container/model-container';
import ValueControl from '../ui/value-control/value-control';

const App = () => {
  const [mouseDown, setMouseDown] = useState(false);

  const [positionX, setPositionX] = useState(0);
  const [positionY, setPositionY] = useState(0);
  const [positionZ, setPositionZ] = useState(-0.7);

  const [rotationX, setRotationX] = useState(-0.5);
  const [rotationY, setRotationY] = useState(0);
  const [rotationZ, setRotationZ] = useState(0);

//  const [scale, setScale] = useState(0);
  const [scaleX, setScaleX] = useState(0.2);
  const [scaleY, setScaleY] = useState(0.2);
  const [scaleZ, setScaleZ] = useState(0.2);



  const onDown = () => {
//    console.log('down');
    setMouseDown(true)
  };

  const onUp= () => {
//    console.log('down');
    setMouseDown(false)
  };

  const position = useMemo(() => {
    return [positionX, positionY, positionZ];
  }, [positionX, positionY, positionZ]);

  const scale = useMemo(() => {
    return [scaleX, scaleY, scaleZ];
  }, [scaleX, scaleY, scaleZ]);


  const rotation = useMemo(() => {
    const factor = Math.PI;
    return [rotationX * factor, rotationY * factor, rotationZ * factor];
  }, [rotationX, rotationY, rotationZ]);

//    camera.rotation.set(0, 0.2, 0);

  return (
    <div className={styles.app}>
      <div className={styles.canvas_container}>
        <Canvas onPointerDown={onDown} onPointerUp={onUp} >
          <ambientLight />
          <spotLight intensity={0.3} position={[5, 10, 50]} />
          <CameraController />
          <primitive object={new THREE.AxesHelper(10)} />
          <ModelContainer mouseDown={mouseDown} >
{/*            <Box position={position} rotation={rotation} scale={scale}/*/}
            <PaperCup position={position} rotation={rotation} scale={scale}/>
          </ModelContainer>
        </Canvas>
      </div>
      
      <div className={styles.control_container}>
        <fieldset className={styles.field}>
          <legend>Model Position</legend>
          <ValueControl name={'Position X'} value={positionX} setValue={setPositionX}/>
          <ValueControl name={'Position Y'} value={positionY} setValue={setPositionY}/>
          <ValueControl name={'Position Z'} value={positionZ} setValue={setPositionZ}/>
        </fieldset>
        <fieldset className={styles.field}>
          <legend>Rotation</legend>
          <ValueControl name={'Rotation X'} value={rotationX} setValue={setRotationX}/>
          <ValueControl name={'Rotation Y'} value={rotationY} setValue={setRotationY}/>
          <ValueControl name={'Rotation Z'} value={rotationZ} setValue={setRotationZ}/>
        </fieldset>
        <fieldset className={styles.field}>
          <legend>Scale</legend>
          <ValueControl name={'ScaleX'} value={scaleX} setValue={setScaleX}/>
          <ValueControl name={'ScaleY'} value={scaleY} setValue={setScaleY}/>
          <ValueControl name={'ScaleZ'} value={scaleZ} setValue={setScaleZ}/>
        </fieldset>


      </div>
    </div>
  );
};

export default App;
