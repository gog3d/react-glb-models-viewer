import { Cylinder, meshStandardMaterial, useTexture } from '@react-three/drei';
import { useCustomization } from '../../../context/customization';
import * as THREE from 'three';

import defaultTexture from '../../../media/default.png';

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
    cup,
    setCup,
    cupTexture,
    setCupTexture,
    wrapperColors,
    front,
    setFront,
    back,
    setBack,
    main,
    setMain
  } = useCustomization();

  const mainTexture = useTexture(main.crop ? main.crop : defaultTexture);
  const frontTexture = useTexture(front.crop ? front.crop : defaultTexture);
  const backTexture = useTexture(back.crop ? back.crop : defaultTexture);
  return (
    <>
      <Cylinder 
        args={[tR, bR, h, 50, 50, false, 0, 2*Math.PI]} 
        visible={true}
      >
        <meshStandardMaterial 
          color={cup.color ? cup.color : 'white'}
        />
      </Cylinder>
      <Cylinder 
        args={[tR, bR, h, 50, 50, true, 0, 2*Math.PI]} 
        visible={main.visible}
      >
        <meshStandardMaterial 
          color={main.color ? main.color : 'blue'}
          map={mainTexture}
          transparent
          opasity={0.8}
        />
      </Cylinder>
      <Cylinder 
        args={[tR, bR, h, 50, 50, true, 1*Math.PI, 1*Math.PI]} 
        visible={front.visible}
      >
        <meshStandardMaterial 
          color={front.color ? front.color : 'red'}
          map={frontTexture}
          transparent
          opasity={0.8}
        />
      </Cylinder>
      <Cylinder 
        args={[tR, bR, h, 50, 50, true, 0, 1*Math.PI]} 
        visible={back.visible}
      >
        <meshStandardMaterial 
          color={back.color ? back.color : 'green'}
          map={backTexture}
          transparent
          opasity={0.8}
        />
      </Cylinder>
    </>
  );
};

export default CupWrapper;
