import React, { useState, useMemo } from 'react';
import styles from './app.module.css';
import * as THREE from 'three';

import { Canvas } from '@react-three/fiber';
//import CanvasContainer from '../canvas-container/canvas-container';
import Box from '../geometry/box/box';
import ValueControl from '../ui/value-control/value-control';

const App = () => {
//  const [value, setValue] = useState(1);
  const [positionX, setPositionX] = useState(0);
  const [positionY, setPositionY] = useState(0);
  const [positionZ, setPositionZ] = useState(0);

  const [rotationX, setRotationX] = useState(0);
  const [rotationY, setRotationY] = useState(0);
  const [rotationZ, setRotationZ] = useState(0);

  const position = useMemo(() => {
    return [positionX, positionY, positionZ];
  }, [positionX, positionY, positionZ]);

  const rotation = useMemo(() => {
    const factor = Math.PI * 0.1;
    return [rotationX * factor, rotationY * factor, rotationZ * factor];
  }, [rotationX, rotationY, rotationZ]);


  return (
    <div className={styles.app}>
      <div className={styles.canvas_container}>
        <Canvas>
        <pointLight position={[5, 5, 5]} color={'red'}/>
{/*          <pointLight position={pointLight} color={'red'}/>*/}
          <Box position={position} rotation={rotation} />
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


      </div>
    </div>
  );
};

export default App;
