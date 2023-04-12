import { createContext, useContext, useState } from "react";
import wrapperColors from '../data/colors.json';

const CustomizationContext = createContext();

export const CustomizationProvider = (props) => {
  const [lid, setLid] = useState(true);
  const [lidColor, setLidColor] = useState(wrapperColors[0]);
  const [lidTexture, setLidTexture] = useState(null);

  const [cupColor, setCupColor] = useState(wrapperColors[0]);
  const [cupTexture, setCupTexture] = useState(null);
  const [front, setFront] = useState(
    {image: null, color: null, visible: true}
  );

  const [wrapper, setWrapper] = useState({
    main: {image: null, color: null, visible: true},
    front: {image: null, color: null, visible: true},
    back: {image: null, color: null, visible: true},
  });

  return (
    <CustomizationContext.Provider
      value={{
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
      }}
      >
      {props.children}
    </CustomizationContext.Provider>
  );
};

export const useCustomization = () => {
  const context = useContext(CustomizationContext);
  return context;
};
