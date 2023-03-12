import React, { useState, useMemo, useRef, useEffect, useCallback } from 'react';
import styles from './image-cropper.module.css';
import Cropper from 'cropperjs';
import 'cropperjs/dist/cropper.min.js';


const ImageCropper = ({src}) => {
//  const {src} = props;
  const [imgDestination, setImageDistination]  = useState('');
  const [mousePos, setMousePos] = useState({});
  const [imgMouseDown, setImgMouseDown] = useState(false);
  const imageElement = useRef();
  const imageCropped = useRef();
  const imageCropper = useRef();

  const handlerOnMouseDown =() => {
    setImgMouseDown(true);
  };
  
  const handlerOnMouseUp =() => {
    setImgMouseDown(false);
  };



  useEffect(() => {
    if (imageElement.current?.cropper && typeof src !== 'undefined') {
      imageElement.current.cropper.reset().clear().replace(src);
    }
  }, [src]);

  useEffect(() => {
    const cropper = new Cropper(imageElement.current, {
      aspectRatio: 1,
      crop: () => {
        const canvas = cropper.getCroppedCanvas();
        setImageDistination(canvas.toDataURL('image/png'));
      }
    });
  }, [])

  useEffect(() => {
    imageCropped.current.ondragstart = () => {return false};
  }, []);


  useEffect(() => {
    const listener = (e) => {
      setMousePos({x: e.clientX, y: e.clientY});
    }
    window.addEventListener('mousemove', listener);
    window.addEventListener('mouseup', handlerOnMouseUp);
    return () => {
      window.removeEventListener('mousemove',  listener);
      window.removeEventListener('mouseup', handlerOnMouseUp);
    }
  }, []);

  useEffect(() => {
    console.log(imageCropper.current.offsetLeft);
    console.log(imageCropper.current.offsetTop);
    console.log(imageCropper.current.offsetWidth);
    console.log(imageCropper.current.offsetHeight);
  }, [imageCropper]);


  useEffect(() => {
    const w = imageCropped.current.offsetWidth / 2;
    const h = imageCropped.current.offsetHeight / 2;

    const l = imageCropper.current.offsetLeft + w - mousePos.x;
    const r = imageCropper.current.offsetLeft - w + imageCropper.current.offsetWidth - mousePos.x;
    const t = imageCropper.current.offsetTop + h - mousePos.y;
    const b = imageCropper.current.offsetTop - h + imageCropper.current.offsetHeight - mousePos.y;

//    console.log(l, r);
/*    const l = imageCropper.current.offsetLeft - imageCropped.current.offsetLeft;
    const r = imageCropper.current.offsetRight - imageCropped.current.offsetRight;
    const t = imageCropper.current.offsetTop - imageCropped.current.offsetTop;
    const b = imageCropper.current.offsetBottom - imageCropped.current.offsetBottom;
*/
    if(imgMouseDown && l <= 0 && r >= 0 && t <= 0  && b >= 0) {
//    if(imgMouseDown && l !== 0 && r !== 0 && t !== 0  && b !== 0) {
      imageCropped.current.style.left = mousePos.x - imageCropped.current.offsetWidth / 2 + 'px';
      imageCropped.current.style.top = mousePos.y - imageCropped.current.offsetHeight / 2 + 'px';
    }
  }, [imageCropped, imageCropped, mousePos, imgMouseDown]);

  return (
    <div className={styles.image_cropper}>
    <p>{mousePos.x} : {mousePos.y}</p>
      <div ref={imageCropper} className={styles.img_preview_container}>
        <img ref={imageCropped} 
          className={styles.img_preview}
          src={imgDestination}
          alt='imageDestination'
          onMouseDown={handlerOnMouseDown}
          onMouseUp={handlerOnMouseUp}
        />
      </div>
      <div className={styles.img_container}>
        <img ref={imageElement} src={src} alt='Sourse' />
      </div>
    </div>
  );
};

export default ImageCropper;
