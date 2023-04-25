import styles from './constructor-page.module.css';

import { useCustomization } from "../../context/customization";
import { useState } from 'react';
import ColorsPaletteColumn from '../../components/ui/colors-palette-column/colors-palette-column';
import RectangleCropper from '../../components/rectangle-cropper/rectangle-cropper';
import RoundCropper from '../../components/round-cropper/round-cropper';

import { Canvas } from '@react-three/fiber';
import Experience from '../../components/experience/experience';
import CupWrapper from '../../components/geometry/cup-wrapper/cup-wrapper';
import Cup from '../../components/geometry/cup/cup';

const ConstructorPage = () => {
  const [menuColor, setMenuColor] = useState(false);
  const [menuBackground, setMenuBackground] = useState(false);
  const [menuLogo, setMenuLogo] = useState(false);

  const [menuLogoImage, setMenuLogoImage] = useState(true);
  const [menuLogoCrop, setMenuLogoCrop] = useState(false);

  const [addBackPic, setAddBackPic] = useState(false);
  const [addBackFile, setAddBackFile] = useState(false);
  const [delBackPic, setDelBackPic] = useState(false);


  const [addLogoFile, setAddLogoFile] = useState(false);
  const [addLogoPic, setAddLogoPic] = useState(false);
  const [delLogoPic, setDelLogoPic] = useState(false);

  const [addLogoCropPic, setAddLogoCropPic] = useState(false);
  const [delLogoCropPic, setDelLogoCropPic] = useState(false);

  const [doubleLogo, setDoubleLogo] = useState(false);


  const [backZoom, setBackZoom] = useState(0.5);
  const [logoZoom, setLogoZoom] = useState(0.5);
  const [logoCropZoom, setLogoCropZoom] = useState(null);

  const {
    cup,
    setCup,
    wrapperColors,
    front,
    setFront,
    back,
    setBack,
    main,
    setMain,
    backgroundCrop,
    setBackgroundCrop,
    logoCrop,
    setLogoCrop,
    logoImage,
    setLogoImage
  } = useCustomization();

  const colorClick = () => {
    if(menuColor) {
      setMenuColor(false);
    } else {
      setMenuLogo(false);
      setMenuBackground(false);
      setMenuColor(true);
    }
  };
  const backgroundClick = () => {
    if(menuBackground) {
      setMenuBackground(false);
    } else {
      setMenuLogo(false);
      setMenuBackground(true);
      setMenuColor(false);
    }
  };
  

  const logoClick = () => {
    if(menuLogo) {
      setMenuLogo(false);
    } else {
      setMenuLogo(true);
      setMenuBackground(false);
      setMenuColor(false);
    }
  };

  const logoImageOpen = () => {
    setMenuLogoImage(true);
    setMenuLogoCrop(false);
  };

  const logoImageClose = () => {
    setMenuLogoImage(false);
    setMenuLogoCrop(true);
    
  };

  const logoCropOpen = () => {
    setMenuLogoCrop(true);
  };

  const logoCropClose = () => {
    setMenuLogoCrop(false);
  };


  const addBackgroundImage = (e) => {
    if(!e.target.files[0] && e.target.files.length === 0) {
      alert('inter file');
    } else {
      setMain({...main, visible: true, image: URL.createObjectURL(e.target.files[0])});
    }
  };

  const addLogoImage = (e) => {
    setFront({...front, visible: true, image: logoCrop});
    setBack({...back, visible: true, image: logoCrop});
  };

  const addBackground = () => {
    setMain({...main, visible: true, crop: backgroundCrop});
  };

  const addLogo = () => {
    setFront({...front, visible: true, crop: logoCrop});
    setBack({...back, visible: true, crop: logoCrop});
  };

  const deleteBackground = () => {
    setMain({...main, visible: false, crop: null});
  };
  const deleteLogo = () => {
    setFront({...front, visible: false, crop: logoCrop});
    setBack({...back, visible: false, crop: logoCrop});
  };

  const backZoomUp = () => {
    setBackZoom(backZoom + 0.01);
  };
  const backZoomDown = () => {
    setBackZoom(backZoom - 0.01);
  };
  const logoZoomUp = () => {
    setLogoZoom(logoZoom + 0.01);
  };
  const logoZoomDown = () => {
    setLogoZoom(logoZoom - 0.01);
  };


  return (
    <main className={styles['main']}>
      <section className={styles['main__model']}>
{        <Canvas>
          <color attach='background' args={['#101010']}/>
          <Experience>
            <CupWrapper dimensions={[4, 2.6, 11.2]}/>
            <Cup/>
          </Experience>
        </Canvas>
}
      </section>
      <nav className={styles['menu']}>
        <ul className={styles['nav-menu']}>
          <li 
            className={`${styles['nav-menu__item']} 
              ${menuColor ? styles['nav-menu__item_active'] : ''}`
            }
            onClick={colorClick}
          >
            Цвет
          </li>
          <li 
            className={`${styles['nav-menu__item']}
              ${menuBackground ? styles['nav-menu__item_active'] : ''}`
            }
            onClick={backgroundClick}
          >
            Фон
          </li>
          <li 
            className={`${styles['nav-menu__item']}
              ${menuLogo ? styles['nav-menu__item_active'] : ''}`
            }
            onClick={logoClick}
          >
            Логотип
          </li>
        </ul>
      </nav>
      <menu className={`${styles['side-menu']} ${styles['side-menu_left']}`}>
      {(
        menuColor ? 
        <ColorsPaletteColumn 
          colors={wrapperColors}
          setSurface={setCup}
          surface={cup}
        /> : null
        )}
      </menu>
      <menu className={styles['side-menu']}>
      {(
        menuBackground ? (
        <div className={styles['crop-menu']}>
          <menu className={styles['crop-menu__controls']}>
            <div className={styles['crop-menu__controls_top']}>
              <label 
                className={styles['add-file__label']}
              >
                <input 
                  className={styles['add-file__input']}
                  type="file"
                  accept=".jpg, .jpeg, .png"
                  onChange={addBackgroundImage}
                />
                <span className={styles['add-file__span']}>
                  Файл
                </span>
              </label>
                <div
                  className={styles['nav-menu__item']}
                  onClick={addBackground}
                >
                  Добавить
                </div>
            </div>
            <div className={styles['crop-menu__controls__buttons']}>
              <button className={styles['crop-menu__button']}
                onClick={backZoomUp}
              >
              +
              </button>
              <button className={styles['crop-menu__button']}
                onClick={backZoomDown}
              >
                -
              </button>
            </div>
            <div className={styles['crop-menu__controls_bottom']}>
              <div
                className={styles['nav-menu__item']}
                onClick={deleteBackground}
              >
                Очистить
              </div>
            </div>
          </menu>
          <div className={styles['crop-menu__container']}>
            <RectangleCropper 
              ratio={16/9}
              serface={main.image}
              setSerface={setBackgroundCrop}
              zoomTo={backZoom}
            />
          </div>


        </div>
        ): null
      )}
      {(
        menuLogo ? 
        
        menuLogoImage ? (
        
        <div className={styles['crop-menu']}>
          <menu className={styles['crop-menu__controls']}>
            <div className={styles['crop-menu__controls_top']}>
              <label 
                className={styles['add-file__label']}
              >
                <input 
                  className={styles['add-file__input']}
                  type="file"
                  accept=".jpg, .jpeg, .png"
                  onChange={addLogoImage}
                />
                <span className={styles['add-file__span']}>
                  Файл
                </span>
              </label>
                <div
                  className={styles['nav-menu__item']}
                  onClick={logoImageClose}
                >
                  Разместить
                </div>
            </div>
            <div className={styles['crop-menu__controls__buttons']}>
              <button className={styles['crop-menu__button']}
                onClick={logoZoomUp}
              >
              +
              </button>
              <button className={styles['crop-menu__button']}
                onClick={logoZoomDown}
              >
                -
              </button>
            </div>
            <div className={styles['crop-menu__controls_bottom']}>
            </div>
          </menu>
          <div className={styles['crop-menu__container']}>
            <RoundCropper 
              ratio={1}
              serface={front.image}
              setSerface={setLogoImage}
              zoomTo={logoZoom}
            />
          </div>
        </div>
        ) : (
        <div className={styles['crop-menu']}>
          <menu className={styles['crop-menu__controls']}>
            <div className={styles['crop-menu__controls_top']}>
              <div
                className={styles['nav-menu__item']}
                onClick={logoImageOpen}
              >
                Назад
              </div>

              <div
                className={styles['nav-menu__item']}
                onClick={addLogo}
              >
                Добавить
              </div>
            </div>
            <div className={styles['crop-menu__controls__buttons']}>
              <button className={styles['crop-menu__button']}
                onClick={logoZoomUp}
              >
              +
              </button>
              <button className={styles['crop-menu__button']}
                onClick={logoZoomDown}
              >
                -
              </button>
            </div>
            <div className={styles['crop-menu__controls_bottom']}>
              <div
                className={styles['nav-menu__item']}
                onClick={deleteLogo}
              >
                Очистить
              </div>

            </div>
          </menu>
          <div className={styles['crop-menu__container']}>
            <RectangleCropper 
              ratio={1}
              serface={front.image}
              setSerface={setLogoCrop}
              zoomTo={logoZoom}
            />
          </div>
        </div>
        ) : null
      )}
      </menu>
    </main>
  );
};

export default ConstructorPage;
