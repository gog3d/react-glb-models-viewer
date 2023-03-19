import React, { useState, useMemo, useRef, useEffect } from 'react';
import styles from './constructor-models.module.css';
import * as THREE from 'three';

import { Canvas, useThree } from '@react-three/fiber';
import CanvasContainer from '../canvas-container/canvas-container';

import Box from '../geometry/box/box';
import PaperCup from '../geometry/paper-cup/paper-cup';
import PaperCupRegroup from '../geometry/paper-cup-regroup/paper-cup-regroup';

import CameraController from '../camera-controller/camera-controller';
import ModelContainer from '../model-container/model-container';
import ValueControl from '../ui/value-control/value-control';

const ConstructorModels = (props) => {
  const {imgUrl} = props;

  const [rotate, setRotate] = useState(true);
  const [controlPanel, setControlPanel] = useState(false);

  const [mouseUp, setMouseUp] = useState(true)
/*
  const [positionX, setPositionX] = useState(-0.2);
  const [positionY, setPositionY] = useState(-12);
  const [positionZ, setPositionZ] = useState(0);

  const [rotationX, setRotationX] = useState(0.5);
  const [rotationY, setRotationY] = useState(0);
  const [rotationZ, setRotationZ] = useState(11);
*/

  const [positionX, setPositionX] = useState(0);
  const [positionY, setPositionY] = useState(0);
  const [positionZ, setPositionZ] = useState(0);

  const [rotationX, setRotationX] = useState(0);
  const [rotationY, setRotationY] = useState(0);
  const [rotationZ, setRotationZ] = useState(11);



//  const [scale, setScale] = useState(0);
  const [scaleX, setScaleX] = useState(0.3);
  const [scaleY, setScaleY] = useState(0.3);
  const [scaleZ, setScaleZ] = useState(0.3);

  const [positionCameraX, setPositionCameraX] = useState(0);
  const [positionCameraY, setPositionCameraY] = useState(0);
//  const [positionCameraZ, setPositionCameraZ] = useState(32);

  const [positionCameraZ, setPositionCameraZ] = useState(5);
  const [fovCamera, setFovCamera] =useState(75);
  const [nearCamera, setNearFovCamera] =useState(0.1);
  const [farCamera, setFarCamera] =useState(1000);

  const rotateControl = () => {
    rotate ? setRotate(false) : setRotate(true);
  }

  const controlPanelViewer = () => {
    controlPanel ? setControlPanel(false) : setControlPanel(true);
  }

  const onDown = () => {
//    console.log('down');
    setMouseUp(false)
  };

  const onUp= () => {
//    console.log('down');
    setMouseUp(true)
  };

  const position = useMemo(() => {
    return [positionX, positionY, positionZ];
  }, [positionX, positionY, positionZ]);

  const positionCamera = useMemo(() => {
//    return { fov: fovCamera, nearCamera: 0.1, farCamera: 1000, position: [positionCameraX, positionCameraY, positionCameraZ]}
    return { fov: fovCamera, nearCamera: 0.1, farCamera: 1000, position: [positionCameraX, positionCameraY, positionCameraZ]}
  }, [fovCamera, farCamera, nearCamera, positionCameraX, positionCameraY, positionCameraZ]);


  const scale = useMemo(() => {
    return [scaleX, scaleY, scaleZ];
  }, [scaleX, scaleY, scaleZ]);


  const rotation = useMemo(() => {
    const factor = Math.PI;
    return [rotationX * factor, rotationY * factor, rotationZ * factor];
  }, [rotationX, rotationY, rotationZ]);


//    camera.rotation.set(0, 0.2, 0);

  return (
    <div className={styles.constructor_models}>
      <div className={styles.canvas_container}>
        <Canvas 
          onPointerDown={onDown} 
          onPointerUp={onUp} 
          camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 0, 5]}}
        >
          <ambientLight />
          <spotLight intensity={0.3} position={[5, 10, 50]} />
          <CameraController />
          <primitive object={new THREE.AxesHelper(10)} />
          <ModelContainer rotate={rotate&&mouseUp} >
{/*            <Box position={position} rotation={rotation} scale={scale}/*/}
            <PaperCupRegroup 
              positionCamera={positionCamera} 
              position={position} 
              rotation={rotation}
              scale={scale}
              imgUrl={imgUrl}
              />
          </ModelContainer>
        </Canvas>
      </div>

      <div className={styles.control_button_container}>
        <button onClick={rotateControl} className={styles.control_button}>
          {rotate ? 'stop rotate' : 'run rotate'}
        </button>
        <button onClick={controlPanelViewer} className={styles.control_button}>
          {controlPanel ? 'close control panel' : 'open control panel'}
        </button>
      </div>

      {controlPanel ? (
        <div className={styles.control_container}>
          <fieldset className={styles.field}>
            <legend>Camera Position</legend>
            <ValueControl name={'Camera X'} value={positionCameraX} setValue={setPositionCameraX}/>
            <ValueControl name={'Camera Y'} value={positionCameraY} setValue={setPositionCameraY}/>
            <ValueControl name={'Camera Z'} value={positionCameraZ} setValue={setPositionCameraZ}/>
          </fieldset>
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
        ) : null
      }

    </div>
  );
};

export default ConstructorModels;
