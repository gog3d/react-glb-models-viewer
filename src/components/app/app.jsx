import { Canvas } from '@react-three/fiber';
import styles from './app.module.css';
import Experience from '../experience/experience';
import CupWrapper from '../geometry/cup-wrapper/cup-wrapper';
import { CustomizationProvider } from '../../context/customization';


const App = () => {

  return (
  <CustomizationProvider>
    <div className={styles.app}>
      <Canvas>
        <color attach='background' args={['#101010']}/>
        <Experience>
          <CupWrapper/>
        </Experience>
      </Canvas>
    </div>
  </CustomizationProvider>
  );
};

export default App;
