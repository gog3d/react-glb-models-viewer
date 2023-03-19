import React, { useState, useMemo, useRef, useEffect } from 'react';
import styles from './app.module.css';
import * as THREE from 'three';

import ConstructorModels from '../constructor-models/constructor-models';
import ConstructorImage from '../constructor-image/constructor-image';
import Demo from '../demo/demo';

import pic from  '../../media/lada.png';

//      <ConstructorImage />

const App = () => {
  const [imgUrl, setImgUrl] = useState(null);
  
  const canvasRef = useRef();
  
  
  
  useEffect(()=>{
    let ctx = canvasRef.current?.getContext('2d');
    let newImage = new Image();
    newImage.src = require('../../media/lada.png');
//    newImage.onLoad = () => {
//      console.log(newImage.src);
    ctx.drawImage(newImage, 0, 0, 250, 208);
    setImgUrl(canvasRef.current?.toDataURL());
//    console.log(imgUrl);
  //  }
  }, [canvasRef.current]);
  
  
  return (
    <div className={styles.app}>
      <canvas ref={canvasRef} className={styles.canvas}>
      </canvas>
      <ConstructorModels imgUrl={imgUrl}/>
    </div>
  );
};

export default App;
