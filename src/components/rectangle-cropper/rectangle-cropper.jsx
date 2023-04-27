import React, { useRef, useState } from "react";
import styles from './rectangle-cropper.module.css';
import Cropper, { ReactCropperElement } from "react-cropper";
import "cropperjs/dist/cropper.css";

import src from '../../media/1.jpg';

const RectangleCropper= (props) => {

  const {
    ratio,
    serface,
    setSerface,
    zoomTo
    } = props;
  
  const cropperRef = useRef(null);

  //console.log(serface);
  function getRoundedCanvas(sourceCanvas) {
    var canvas = document.createElement('canvas');
    var context = canvas.getContext('2d');
    var width = sourceCanvas.width;
    var height = sourceCanvas.height;

    canvas.width = width;
    canvas.height = height;
    context.imageSmoothingEnabled = true;
    context.drawImage(sourceCanvas, 0, 0, width, height);
    context.globalCompositeOperation = 'destination-in';
    context.beginPath();
    context.arc(width / 2, height / 2, Math.min(width, height) / 2, 0, 2 * Math.PI, true);
    context.fill();
    return canvas;
  }



  const onCrop = () => {
    const cropper = cropperRef.current?.cropper;

    //const croppedCanvas = cropper.getCroppedCanvas();
    // Round
   //const roundedCanvas = getRoundedCanvas(croppedCanvas);
     setSerface(cropper.getCroppedCanvas().toDataURL());
  //console.log(roundedCanvas.toDataURL())
  //    setSerface(roundedCanvas.toDataURL());
  //    console.log(cropper.getCroppedCanvas().toDataURL());




 //   setSerface(cropper.getCroppedCanvas().toDataURL());
//    console.log(cropper.getCroppedCanvas().toDataURL());

  };
//    <div className={styles['cropper']}>
  return (

      <Cropper
        src={serface ? serface : src}
        // Cropper.js options
        initialAspectRatio={ratio}
        aspectRatio={ratio}
        guides={false}
        zoomTo={zoomTo}
        crop={onCrop}
        ref={cropperRef}
        style={{width: `100%`, height: `100%`}}
      />

  );
};

export default RectangleCropper;