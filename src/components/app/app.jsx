import styles from './app.module.css';
import { CustomizationProvider } from '../../context/customization';
import ConstructorPage from '../../pages/constructor-page/constructor-page';

const App = () => {
  return (
    <CustomizationProvider>
      <ConstructorPage />
    </CustomizationProvider>
  );
};

export default App;
