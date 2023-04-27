import { createContext, useContext, useState } from "react";
import wrapperColors from '../data/colors.json';
import defaultTexture from '../media/default.png';
import pic from '../media/1.jpg';
const CustomizationContext = createContext();

export const CustomizationProvider = (props) => {
  const [lid, setLid] = useState(true);
  const [lidColor, setLidColor] = useState(wrapperColors[0]);
  const [lidTexture, setLidTexture] = useState(null);

  const [cup, setCup] = useState(
    {image: null, color: 'white', visible: true, crope: null}
  );
//  const [cupTexture, setCupTexture] = useState(null);
  const [main, setMain] = useState(
    {image: null, color: 'white', visible: false, crope: null}
  );
  const [front, setFront] = useState(
    {image: null, color: 'white', visible: false, crope: null}
  );
  const [back, setBack] = useState(
    {image: null, color: 'white', visible: false, crope: null}
  );
  const [main_2, setMain_2] = useState(
    {image: null, color: 'white', visible: false, crope: null}
  );
  const [backgroundCrop, setBackgroundCrop] = useState(null);

  const [logoCrop, setLogoCrop] = useState(null);
  const [logoCrop1, setLogoCrop1] = useState(null);
  const [logoImage, setLogoImage] = useState(null);
  const [logoImageRound, setLogoImageRound] = useState(null);


  return (
    <CustomizationContext.Provider
      value={{
        lid,
        setLid,
        lidColor,
        setLidColor,
        lidTexture,
        setLidTexture,
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
        logoCrop1,
        setLogoCrop1,
        logoImage,
        setLogoImage,
        main_2, 
        setMain_2,
        logoImageRound,
        setLogoImageRound
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
