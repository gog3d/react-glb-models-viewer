import { 
      Stage, 
      OrbitControls, 
      MeshReflectorMaterial, 
      boxGeometry, 
      Box,
      Cylinder,
      meshStandardMaterial 
      } from '@react-three/drei';

const Experience = ({ children }) => {

  return (
    <>
     { <Stage
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

        { children }

      </Stage>}

      <OrbitControls
        makeDefault
        minPolarAngle={0}
        maxPolarAngle={Math.PI / 1}
      />
      {<mesh  rotation={[-Math.PI / 2, 0, 0]} position-y={-5.3}>
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
      </mesh> }

    </>
  );
};

export default Experience;
