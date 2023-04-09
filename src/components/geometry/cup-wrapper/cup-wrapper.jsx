import { 
      MeshReflectorMaterial, 
      boxGeometry, 
      Box,
      Cylinder,
      meshStandardMaterial 
    } from '@react-three/drei';

const CupWrapper = () => {

  const size = [6, 4, 10];

  const [tR, bR, h] = size;

  const opacity = {
    background: 1,
    front: 1,
    back: 1,
  };

  return (
    <>
      <Cylinder 
        args={[tR, bR, h, 50, 50, false, 0, 2*Math.PI]} 
        visible={true}
      >
        <meshStandardMaterial 
          color={'yellow'}
          transparent
          opacity={1}
        />
      </Cylinder>
      <Cylinder 
        args={[tR, bR, h, 50, 50, true, 0, 2*Math.PI]} 
        visible={true}
      >
        <meshStandardMaterial 
          color={'blue'}
          transparent
          opacity={opacity.background}
        />
      </Cylinder>
      <Cylinder 
        args={[tR, bR, h, 50, 50, true, 1*Math.PI, 1*Math.PI]} 
        visible={true}
      >
        <meshStandardMaterial 
          color={'red'}
          transparent
          opacity={opacity.front}
        />
      </Cylinder>
      <Cylinder 
        args={[tR, bR, h, 50, 50, true, 0, 1*Math.PI]} 
        visible={true}
      >
        <meshStandardMaterial 
          color={'green'}
          transparent
          opacity={opacity.back}
        />
      </Cylinder>
    </>
  );
};

export default CupWrapper;
