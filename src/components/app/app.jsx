import React, { useState, useMemo, useRef, useEffect } from 'react';
import styles from './app.module.css';
import * as THREE from 'three';

import ConstructorModels from '../constructor-models/constructor-models';
import ConstructorImage from '../constructor-image/constructor-image';
import Demo from '../demo/demo';

const App = () => {

  return (
    <div className={styles.app}>
      <ConstructorModels />
      <ConstructorImage />
    </div>
  );
};

export default App;
