import React, { useRef, useState } from "react";
import styles from './image-cropper.module.css';
import Cropper, { ReactCropperElement } from "react-cropper";
import "cropperjs/dist/cropper.css";

import image from '../../../media/1.jpg';

const ImageCropper= () => {
  const [src, setSrc] = useState(image);

  const addPicture = (e) => {
    if(!e.target.files[0] && e.target.files.length === 0) {
      alert('inter file');
    } else {
      setSrc(URL.createObjectURL(e.target.files[0]));
    }
  };

  const cropperRef = useRef(null);
  const onCrop = () => {
    const cropper = cropperRef.current?.cropper;
//    console.log(cropper.getCroppedCanvas().toDataURL());
  };
//        style={{ height: 100, width: "100%" }}

  return (
    <div className={styles['cropper']}>
        <Cropper
          src={src}
          // Cropper.js options
          initialAspectRatio={16 / 9}
          aspectRatio={16 / 9}
          guides={false}
          crop={onCrop}
          ref={cropperRef}
          className={styles['cropper__window']}
        />
      <div className={styles['cropper__panel']}>
        <div className={styles['add-file']}>
            <label 
              htmlFor="im"
              className={styles['add-file__label']}
            >
            add
            </label>
              <input 
                className={styles['add-file__input']}
                id="im"
                type="file"
                accept=".jpg, .jpeg, .png"
                onChange={addPicture}
              />
        </div>



{/*
        <label className={styles['add-file__button']}>add image</label>
        <input 
          name="image-add"
          type='file'
          onChange={addPicture}
          accept='image/png'
        />

        <span className={styles['add-file__text']}>image type .png</span>*/}
      </div>
    </div>
  );
};

export default ImageCropper;