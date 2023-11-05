import { createContext, useContext, useState } from "react";


const Context = createContext(null);

export const MainContext = ({ children }) => {
  const [data, setData] = useState([]);
  const [isOpen, setIsOpen] = useState("-100%");
  const [openSingin, setOpenSingin] = useState('none')
  const [openForm, setOpenForm] = useState('-200%')
  const [openRegister, setOpenRegister] = useState('none')
  const [openRegForm, setOpenRegForm] = useState('-200%')

  const globalStates = { data, setData , isOpen, setIsOpen, openSingin, setOpenSingin, openForm, setOpenForm,
  openRegister, setOpenRegister, openRegForm, setOpenRegForm};

  return (
    <Context.Provider value={globalStates}>{children}</Context.Provider>
  );
};

export const useMainContext = () => useContext(Context);
