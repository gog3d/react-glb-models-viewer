import React, { useRef, useState, useCallback, useMemo } from "react";
import styles from './round-cropper.module.css';
import Cropper, { ReactCropperElement } from "react-cropper";
import "cropperjs/dist/cropper.css";

import src from '../../media/1.jpg';

const RoundCropper= (props) => {

  const {
    ratio,
    serface,
    setSerface,
    zoomTo,
    roundCrop,
    setSerfaceRound
    } = props;
  
  const cropperRef = useRef(null);

  function getRoundedCanvas(sourceCanvas) {
    var canvas = document.createElement('canvas');
    var context = canvas.getContext('2d');
    //console.log(sourceCanvas);
    var width = sourceCanvas.width;
    var height = sourceCanvas.height;
    canvas.width = width;
    canvas.height = height;
    context.imageSmoothingEnabled = true;

    const im = sourceCanvas ? 1 : 0;
    //console.log(sourceCanvas)
    if (width > 0) {
      context.drawImage(sourceCanvas, 0, 0, width, height);
    }
   
    context.globalCompositeOperation = 'destination-in';
    context.beginPath();
    context.arc(width / 2, height / 2, Math.min(width, height) / 2, 0, 2 * Math.PI, true);
    context.fill();
    return canvas;
  }
  const img = new Image();
  img.onload = () => {console.log('1')};

  const onCrop = () => {
    const cropper = cropperRef.current?.cropper;
    const croppedCanvas = cropper.getCroppedCanvas();
    //console.log('hello1')
   

    // Round

    const roundedCanvas = getRoundedCanvas(croppedCanvas);
   // console.log(croppedCanvas);
    setSerfaceRound(roundedCanvas.toDataURL());
    setSerface(croppedCanvas.toDataURL());
   // };


  };

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

export default RoundCropper;