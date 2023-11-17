import { createContext, useContext, useState } from "react";


const Context = createContext(null);

export const MainContext = ({ children }) => {
  const [data, setData] = useState([]);
  const [isOpen, setIsOpen] = useState("-100%");
  const [openSingin, setOpenSingin] = useState('none')
  const [openForm, setOpenForm] = useState('-200%')
  const [openRegister, setOpenRegister] = useState('none')
  const [openRegistrSucces, setOpenRegistrSucces] = useState('none')
  const [openRegForm, setOpenRegForm] = useState('-200%')
  const [openRegFormSuc, setOpenRegFormSuc] = useState('-200%')
  const [dataName,setDataName] = useState("")


  const globalStates = { data, setData , isOpen, setIsOpen, openSingin, setOpenSingin, openForm, setOpenForm,
  openRegister, setOpenRegister, openRegForm, setOpenRegForm,openRegistrSucces,setOpenRegistrSucces,openRegFormSuc,setOpenRegFormSuc,dataName,setDataName};

  return (
    <Context.Provider value={globalStates}>{children}</Context.Provider>
  );
};

export const useMainContext = () => useContext(Context);
