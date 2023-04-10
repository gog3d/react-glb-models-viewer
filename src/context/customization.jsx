import { createContext, useContext, useState } from "react";

const CustomizationContext = createContext();

const wrapperColors = [
  {
    color: "#222222",
    name: "black",
  },
  {
    color: "#683434",
    name: "brown",
  },
  {
    color: "#1a5e1a",
    name: "green",
  },
  {
    color: "#659994",
    name: "blue",
  },
  {
    color: "#896599",
    name: "mauve",
  },
  {
    color: "#ffa500",
    name: "orange",
  },
  {
    color: "#59555b",
    name: "grey",
  },

  {
    color: "#ececec",
    name: "white",
  },
];

export const CustomizationProvider = (props) => {
  const [lid, setLid] = useState(true);
  const [lidColor, setLidColor] = useState(wrapperColors[0]);
  const [lidTexture, setLidTexture] = useState(null);

  const [cupColor, setCupColor] = useState(wrapperColors[0]);
  const [cupTexture, setCupTexture] = useState(null);

  const [wrapper, setWrapper] = useState({
    main: {image: null, visible: true},
    front: {image: null, visible: true},
    back: {image: null, visible: true},
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
