import { createContext, useContext, useState } from "react";


const Context = createContext(null);

export const MainContext = ({ children }) => {
  const [data, setData] = useState([]);
  const [isOpen, setIsOpen] = useState("-100%");

  const globalStates = { data, setData , isOpen, setIsOpen};

  return (
    <Context.Provider value={globalStates}>{children}</Context.Provider>
  );
};

export const useMainContext = () => useContext(Context);
