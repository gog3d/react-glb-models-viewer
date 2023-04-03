import { PresentationControls, Stage, MeshReflectorMaterial, Reflector, Float, OrbitControls } from '@react-three/drei';
import { useLoader } from '@react-three/fiber';
import { Suspense } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import Cup from './Cup.jsx';
//import StarbucksPaperCup from './StarbucksPaperCup.jsx';
//import CoffeeShopCup from './CoffeeShopCup.jsx';
//import ShirtBakedCollapsed from './ShirtBakedCollapsed.jsx';
//import CoffeePaperCup from './CoffeePaperCup.jsx';
//import Conus from './Conus.jsx';
//import Cube from './Cube.jsx';

const Experience = () => {
  return (
    <>
      <Stage
        intensity={1.5}
        environment="city"
        shadows={{
          type: "accumulative",
          color: "#d9afd9",
          colorBlend: 2,
          opacity: 2,
        }}
        adjustCamera={2}
      >

        {<Cup />}
        {/*<StarbucksPaperCup />*/}
        {/*<CoffeeShopCup/>*/}
        {/*<ShirtBakedCollapsed/>*/}
        {/*<CoffeePaperCup />*/}
        {/*<Conus />*/}
        {/*<Cube />*/}
        
      </Stage>
       <OrbitControls
        makeDefault
        minPolarAngle={0}
        maxPolarAngle={Math.PI / 1}
      />
      {<mesh  rotation={[-Math.PI / 2, 0, 0]} position-y={-2.50}>
        <planeGeometry args={[170, 170]} />
        <MeshReflectorMaterial
          blur={[300, 100]}
          resolution={1080}
          mixBlur={1}
          mixStrength={40}
          roughness={1}
          depthScale={0.2}
          minDepthThreshold={0.4}
          maxDepthThreshold={1.4}
          color="#101010"
          metalness={0.5}
        />
      </mesh>}
    </>
  );
};

export default Experience;
/*
<Stage environment={'city'} intensity={0.6} contactShadow={false}>
     </Stage>
      <mesh  rotation={[-Math.PI / 2, 0, 0]}>
      position={[0, 0.005, 0]}




*/