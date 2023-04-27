import { useCustomization } from "../../context/customization";
import styles from './configurator.module.css';
import { useState } from 'react';
import DropDown from '../ui/dropdown/dropdown';
import DropDownMidle from '../ui/dropdown-midle/dropdown-midle';
import DropDownSmall from '../ui/dropdown-small/dropdown-small';
import ColorsPalette from '../ui/colors-palette/colors-palette';
import SelectionSwitch from '../ui/selection-switch/selection-switch';
import ImageCropper from '../ui/image-cropper/image-cropper';

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
    front,
    setFront,
    back,
    setBack,
    main,
    setMain,
  } = useCustomization();

  return (
    <div className={styles['configurator']}>
      <ImageCropper />
      <DropDown title={'Cup'}>
        <DropDownMidle title={'Main'}>
          <SelectionSwitch 
            surface={main}
            setSurface={setMain}
          />
          <DropDownSmall title={'Цвет'}>
            <ColorsPalette 
              colors={wrapperColors}
              setSurface={setMain}
              surface={main}
            />
          </DropDownSmall>
        </DropDownMidle>
        <DropDownMidle title={'Front'}>
          <SelectionSwitch 
            surface={front}
            setSurface={setFront}
          />
          <DropDownSmall title={'Цвет'}>
            <ColorsPalette 
              colors={wrapperColors}
              setSurface={setFront}
              surface={front}
            />
          </DropDownSmall>
        </DropDownMidle>
        <DropDownMidle title={'Back'}>
          <SelectionSwitch 
            surface={back}
            setSurface={setBack}
          />
          <DropDownSmall title={'Цвет'}>
            <ColorsPalette 
              colors={wrapperColors}
              setSurface={setBack}
              surface={back}
            />
          </DropDownSmall>
        </DropDownMidle>
      </DropDown>
    </div>
  );
};

<div className='configurator__section'></div>
export default Configurator;