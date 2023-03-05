import React from 'react';
//import CanvasContainer from '../canvas-container/canvas-container';

const Box = (props) => {
  return (
    <mesh {...props} >
      <boxGeometry />
    </mesh>
  );
};

export default Box;
