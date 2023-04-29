import { createContext, useState } from "react";

const MainContext = createContext();

const Context = ({ children }) => {
  const [data, setData] = useState([]);

  const globalStates = { data, setData };

  return (
    <MainContext.Provider value={globalStates}>{children}</MainContext.Provider>
  );
};

export default Context;
