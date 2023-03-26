import React, { useMemo, useEffect, useRef, useState, useCallback } from 'react';
import styles from './canvas-container.module.css';
import pic from '../../media/oleg.png';
//import picTranslation from '../../media/cup-layer.svg';
import picTranslation from '../../media/oleg.png';

import { warpHorizontally, warpVertically } from '../../utils/image-curving.js';

const CanvasContainer = () => {
  const imgRef = useRef();
  const imgTranslationRef = useRef();
  const canvasRef = useRef();
  
  const [imgUrl, setImgUrl] = useState(null);
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
        0.2,//warp_percentage_input, 
        canvasRef.current,//warp_canvas
        imgTranslationRef.current
      );
    };
  }, [imgUrl, imgTranslationRef]);
  
  return (
    <div className={styles.canvas_container}>

      <img ref={imgTranslationRef} src={picTranslation} className={styles.translation}/>
      <img ref={imgRef} />
      <canvas ref={canvasRef} className={styles.cnv} />
      <button onClick={drawCanvasImg}>Draw Image</button>
    </div>
  );
};

export default CanvasContainer;
