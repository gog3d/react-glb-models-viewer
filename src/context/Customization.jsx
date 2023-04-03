import { createContext, useContext, useState } from "react";

const CustomizationContext = createContext();

const lidColors = [
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

const cupColors = [
  
  {
    color: "#F8F8FF",
    name: "white",
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
    color: "#222222",
    name: "black",
  },
  {
    color: "#59555b",
    name: "grey",
  },

];

export const CustomizationProvider = (props) => {
  const [lid, setLid] = useState(true);
  const [lidColor, setLidColor] = useState(lidColors[0]);
  const [cupColor, setCupColor] = useState(cupColors[0]);
  return (
    <CustomizationContext.Provider
      value={{
        lid,
        setLid,
        lidColor,
        setLidColor,
        cupColor,
        setCupColor,
        cupColors,
        lidColors
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
