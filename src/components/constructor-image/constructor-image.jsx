import React, { useState, useMemo, useRef, useEffect } from 'react';
import styles from './constructor-image.module.css';
import * as THREE from 'three';
import pic from  '../../media/oleg.png';
//import ConstructorModels from '../constructor-models/constructor-models';
import ImageCropper from '../image-cropper/image-cropper';


const ConstructorImage = () => {
//  const url = '../../media/oleg.png';
  const [src, setSrc] = useState(pic);
  const addPicture = (e) => {
    if(!e.target.files[0] && e.target.files.length === 0) {
      alert('inter file');
    } else {
      setSrc(URL.createObjectURL(e.target.files[0]));
    }
  };
//      <img className={styles.img_container} src={src}/>
  return (
    <div className={styles.constructor_image}>
      <ImageCropper src={src} />
      <label className={styles.input_file}>
        <input type='file'
           onChange={addPicture}
           accept='image/png'
        />
        <span className={styles.input_file_btn}>add image</span>
        <span className={styles.input_file_text}>image type .png</span>
      </label>
    </div>
  );
};

export default ConstructorImage;
