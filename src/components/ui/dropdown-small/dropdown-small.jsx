import { useState } from 'react';
import styles from './dropdown-small.module.css';

const DropDownSmall = ({title, children}) => {
  const [menu, setMenu] = useState(false);
  return (
    <div className={styles['dropmenu']}>
      <div className={`${styles['dropmenu__title']} ${menu ? styles['dropmenu__title_active'] : ''}`}
        onClick={()=>{return menu ? setMenu(false) : setMenu(true) }}
      >
        {title}
      </div>
      {
        menu ? (
          <div className={styles['dropmenu__values']}>
            {children}
          </div>
        ) : null
      }
    </div>
  );
};

export default DropDownSmall;
