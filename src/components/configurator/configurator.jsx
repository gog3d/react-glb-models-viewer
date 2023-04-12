import { useCustomization } from "../../context/customization";
import styles from './configurator.module.css';
import { useState } from 'react';
 

const Configurator = () => {
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

  const [frontMenu, setFrontMenu] = useState(false);

//console.log(wrapperColors)

  return (
    <div className={styles['configurator']}>

      <div className={styles['configurator__section']}>
        <div className={styles.item}
          onClick={()=>{return frontMenu ? setFrontMenu(false) : setFrontMenu(true) }}
        >
          <div className={styles['configurator__section_title']}>
            Передняя сторона
          </div>
        </div>
        { frontMenu ? (
          <div className={styles['configurator__section__values']}>
            <div className={`${styles['item']} ${front.visible ? styles['item__active'] : ''}`} 
              onClick={()=>setFront({...front, visible: true})}
            >
              <div className={`${styles['item__label']}`}>
                Показать
              </div>
            </div>
            <div className={`${styles['item']} ${front.visible ? '' : styles['item__active']}`} 
              onClick={()=>setFront({...front, visible: false})}
            >
              <div className={styles['item__label']}>
                Скрыть
              </div>
            </div>
          </div>) : ''
      }
      </div>
      { frontMenu ? (
      <div className={styles['configurator__section']}>
        <div className={styles['configurator__section_title']}>
          Цвет
        </div>
        <div className={styles['configurator__section__values']}>
        { wrapperColors.map((item, index) => (
          <div className={`${styles['item']} ${item.color === front.color ? styles['item__active'] : ''}`}
            onClick={()=>setFront({...front, color: item.color})}
            key={index}
          >
            <div className={styles['item__dot']} style={{
              backgroundColor: item.color,
            }}/>
            {/*<div className='item__label'>{item.name}</div>*/}
          </div>
        ))}
        </div>
      </div>) : ''
      }
    </div>
  );
};

<div className='configurator__section'></div>
export default Configurator;