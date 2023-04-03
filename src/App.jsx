import { Canvas } from "@react-three/fiber";
import './App.css'
import Experience from "./components/Experience";
import Configurator from "./components/Configurator";
import * as THREE from 'three';
import { CustomizationProvider } from "./context/Customization";


const App = () => {
  return (
    <CustomizationProvider>
      <div className='App'>
        <Canvas  shadows camera={{ position: [4, 4, -12], fov: 35 }}>
          <color attach="background" args={['#101010']} />
          <Experience />
        </Canvas>
        <Configurator />
      </div>
    </CustomizationProvider>
  )
}

export default App;
// <primitive object={new THREE.AxesHelper(10)} />