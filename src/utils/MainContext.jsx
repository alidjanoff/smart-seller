import { createContext, useContext, useState } from "react";

const Context = createContext(null);

export const MainContext = ({ children }) => {
  const [data, setData] = useState([]);
  const [isOpen, setIsOpen] = useState("-100%");
  const [openSingin, setOpenSingin] = useState("none");
  const [openForm, setOpenForm] = useState("-200%");
  const [openRegister, setOpenRegister] = useState("none");
  const [openRegistrSucces, setOpenRegistrSucces] = useState("none");
  const [openSearchData, setOpenSearchData] = useState("none");
  const [openRegForm, setOpenRegForm] = useState("-200%");
  const [openRegFormSuc, setOpenRegFormSuc] = useState("-200%");
  const [dataName, setDataName] = useState("");
  const [offersData, setOffersData] = useState(null);
  const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [userData, setUserData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [passwordSimvol, setPasswordSimvol] = useState(false);
  const [emailSimvol, setEmailSimvol] = useState(false);
  const [nameSimvol, setNameSimvol] = useState(false);
  const [vipHeight, setVipHeight] = useState("60px");
  const [navBlock, setNavBlock] = useState("block");
  const [vipStatus, setVipStatus] = useState(null);
  const [activInfo, setActivInfo] = useState(false);
  const [button2, setButton2] = useState(false);
  const [sP, setSP] = useState(false);
  const [filterPage, setFilterPage] = useState(false);
  const [salePage, setSalePage] = useState(false);
  const [id, setId] = useState();
  const [idFilter, setIdFilter] = useState();
  const [idSale, setIdSale] = useState();
  const [idOld, setIdOld] = useState();
  const [exitSearch, setExitSearch] = useState("flex");
  const [stateAdmin, setStateAdmin] = useState("home");

  const globalStates = {
    stateAdmin,
    setStateAdmin,
    idOld,
    setIdOld,
    idSale,
    setIdSale,
    salePage,
    setSalePage,
    exitSearch,
    setExitSearch,
    idFilter,
    setIdFilter,
    filterPage,
    setFilterPage,
    id,
    setId,
    sP,
    setSP,
    button2,
    setButton2,
    activInfo,
    setActivInfo,
    navBlock,
    setNavBlock,
    vipStatus,
    setVipStatus,
    vipHeight,
    setVipHeight,
    data,
    setData,
    isOpen,
    setIsOpen,
    openSingin,
    setOpenSingin,
    openForm,
    setOpenForm,
    openRegister,
    setOpenRegister,
    openRegForm,
    setOpenRegForm,
    openRegistrSucces,
    setOpenRegistrSucces,
    openRegFormSuc,
    setOpenRegFormSuc,
    dataName,
    setDataName,
    offersData,
    setOffersData,
    openSearchData,
    setOpenSearchData,
    searchResults,
    setSearchResults,
    searchTerm,
    setSearchTerm,
    userData,
    setUserData,
    currentPage,
    setCurrentPage,
    passwordSimvol,
    emailSimvol,
    setEmailSimvol,
    nameSimvol,
    setNameSimvol,
    setPasswordSimvol,
  };

  return <Context.Provider value={globalStates}>{children}</Context.Provider>;
};

export const useMainContext = () => useContext(Context);
