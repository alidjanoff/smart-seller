import { createContext, useState } from "react";

const MainContext = createContext();

const Context = ({ children }) => {
  const [data, setData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const globalStates = { data, setData , isOpen};

  return (
    <MainContext.Provider value={globalStates}>{children}</MainContext.Provider>
  );
};

export default Context;