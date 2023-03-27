import React, { useMemo, useEffect, useRef, useState, useCallback } from 'react';
import styles from './canvas-container.module.css';
import pic from '../../media/oleg.png';
import picTranslation from '../../media/cup-layer.svg';
//import picTranslation from '../../media/oleg.png';
//import picTranslation from '../../media/uvw.jpg';
import ConstructorModels from '../constructor-models/constructor-models';

import { warpHorizontally, warpVertically } from '../../utils/image-curving.js';

const CanvasContainer = () => {
  const imgRef = useRef();
  const imgTranslationRef = useRef();
  const canvasRef = useRef();
  const imgCropRef = useRef();

  const [imgUrl, setImgUrl] = useState(null);
  const [imgCropUrl, setImgCropUrl] = useState(null);
//  const [s, setS] = useState({x: 0, y: 0, Width: 500, Height: 500});
//  const [d, setD] = useState({x: 0, y: 0, Width: 500, Height: 500});

  useEffect(() => {
    setImgUrl(pic);
    imgRef.current.src = imgUrl;
  }, [imgUrl]);
  
  const drawCanvasImg = useCallback(() => {
    const img = new Image();
    img.src = imgUrl;
    img.onload = () => {
//      warpHorizontally (
    warpVertically (
        img,//image_to_warp, 
        false,//invert_curve, 
        0.3,//warp_percentage_input, 
        canvasRef.current,//warp_canvas
        imgTranslationRef.current
      );

    };
  }, [imgUrl, imgTranslationRef]);
  
  const cropeImg = useCallback(() => {
//    const img = new Image();
//    img.src = imgUrl;
//    img.onload = () => {

//    };
//    console.log(canvasRef.currnet);
    const ctx = canvasRef.current.getContext('2d');
    setImgCropUrl(canvasRef.current.toDataURL());
    
  }, [canvasRef]);

  
  return (
    <div className={styles.canvas_container}>
      <ConstructorModels imgUrl={imgCropUrl}/>;
      <img ref={imgTranslationRef} src={picTranslation} className={styles.translation}/>
      <img ref={imgRef} className={styles.src_img}/>
      <button onClick={drawCanvasImg}>Draw Image</button>
      <canvas ref={canvasRef} className={styles.cnv} />
      <button onClick={cropeImg}>Crope Image</button>
      <img src={imgCropUrl} className={styles.img_crope}/>
    </div>
  );
};

export default CanvasContainer;
