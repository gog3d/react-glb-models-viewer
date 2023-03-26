import React, { useState, useMemo, useRef, useEffect } from 'react';
import styles from './app.module.css';
import * as THREE from 'three';

import ConstructorModels from '../constructor-models/constructor-models';
import ConstructorImage from '../constructor-image/constructor-image';
import Demo from '../demo/demo';
import CanvasContainer from '../canvas-container/canvas-container';

import { warpHorizontally } from '../../utils/image-curving.js';

import pic from  '../../media/lada.png';

//      <ConstructorImage />

const App = () => {
  return (
    <div className={styles.app}>
      <CanvasContainer/>
    </div>
  );
};

export default App;

/*
import { useEffect, useRef } from "react";
import pic from '../../media/oleg.png';

export default function App() {
  const myCanvas = useRef();

  useEffect(() => {
    const context = myCanvas.current.getContext("2d");
    const image = new Image();
    image.src = pic;
//      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Picture_icon_BLACK.svg/1200px-Picture_icon_BLACK.svg.png";
    image.onload = () => {
      context.drawImage(image, 0, 0, 500, 500);
    };
  }, []);

  return <canvas ref={myCanvas} width={500} height={500} />;
}
*/