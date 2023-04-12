import { Cylinder, meshStandardMaterial } from '@react-three/drei';
import { useCustomization } from '../../../context/customization';

const CupWrapper = ({dimensions}) => {

  const [tR, bR, h] = [...dimensions];

  const opacity = {
    background: 1,
    front: 1,
    back: 1,
  };

  const {
    lid,
    setLid,
    lidColor,
    setLidColor,
    lidTexture,
    setLidTexture,
    cupColor,
    setCupColor,
    cupTexture,
    setCupTexture,
    wrapperColors,
    wrapper,
    setWrapper,
    front,
    setFront
  } = useCustomization();

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
        visible={wrapper.main.visible}
      >
        <meshStandardMaterial 
          color={'blue'}
          transparent
          opacity={opacity.background}
        />
      </Cylinder>
      <Cylinder 
        args={[tR, bR, h, 50, 50, true, 1*Math.PI, 1*Math.PI]} 
        visible={front.visible}
      >
        <meshStandardMaterial 
          color={front.color ? front.color : 'red'}
          transparent
          opacity={front.color ? 1 : 0.1}
        />
      </Cylinder>
      <Cylinder 
        args={[tR, bR, h, 50, 50, true, 0, 1*Math.PI]} 
        visible={wrapper.back.visible}
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
