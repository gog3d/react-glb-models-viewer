import React, { useRef, useState } from "react";
import styles from './round-cropper.module.css';
import Cropper, { ReactCropperElement } from "react-cropper";
import "cropperjs/dist/cropper.css";

import src from '../../media/1.jpg';

const RoundCropper= (props) => {

  const {
    ratio,
    serface,
    setSerface,
    zoomTo
    } = props;
  
  const cropperRef = useRef(null);

  const onCrop = () => {
    const cropper = cropperRef.current?.cropper;
    setSerface(cropper.getCroppedCanvas().toDataURL());
//    console.log(cropper.getCroppedCanvas().toDataURL());
  };
//    <div className={styles['cropper']}>
  return (

      <Cropper
        src={serface ? serface : src}
        // Cropper.js options
        aspectRatio={1}

        viewMode={1}
        crop={onCrop}
        ref={cropperRef}
        style={{width: `100%`, height: `100%`}}
      />

  );
};

export default RoundCropper;