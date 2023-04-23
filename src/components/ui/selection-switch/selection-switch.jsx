import styles from './selection-switch.module.css';

const SelectionSwitch = (props) => {
  const {
    trueLabel,
    falseLabel,
    surface,
    setSurface
  } = props;
  return (
    <div className={styles['selection']}>
      <div className={`${styles['selection__value']} ${surface.visible ? styles['selection__value_active'] : ''}`} 
        onClick={()=>setSurface({...surface, visible: true})}
      >
        <div className={styles['selection__label']}>
          {trueLabel ? trueLabel : 'Показать'}
        </div>
      </div>
      <div className={`${styles['selection__value']} ${surface.visible ? '' : styles['selection__value_active']}`} 
        onClick={()=>setSurface({...surface, visible: false})}
      >
        <div className={styles['selection__label']}>
          {falseLabel ? falseLabel : 'Скрыть'}
        </div>
      </div>
    </div>
  );
};
export default SelectionSwitch;