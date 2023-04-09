import { Canvas } from '@react-three/fiber';
import styles from './app.module.css';
import Experience from '../experience/experience';
import CupWrapper from '../geometry/cup-wrapper/cup-wrapper';

const App = () => {

  return (
    <div className={styles.app}>
      <Canvas>
        <color attach='background' args={['#101010']}/>
        <Experience>
          <CupWrapper/>
        </Experience>
      </Canvas>
    </div>
  );
};

export default App;
