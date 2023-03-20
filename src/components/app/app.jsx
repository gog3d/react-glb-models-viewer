import React, { useState, useMemo, useRef, useEffect } from 'react';
import styles from './app.module.css';
import * as THREE from 'three';

import ConstructorModels from '../constructor-models/constructor-models';
import ConstructorImage from '../constructor-image/constructor-image';
import Demo from '../demo/demo';

import pic from  '../../media/lada.png';

//      <ConstructorImage />

const App = () => {
  return (
    <div className={styles.app}>
      <ConstructorModels imgUrl={pic}/>
    </div>
  );
};

export default App;
