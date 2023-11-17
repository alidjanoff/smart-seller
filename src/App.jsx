import React from "react";

// Router
import { Route, Routes } from "react-router-dom";

// Context
import { MainContext } from "./utils/MainContext";

// Pages
import Home from "./pages/Home";
import { Questions } from "./pages/Questions";
import NotFound from "./pages/NotFound";
import { Contact } from "./pages/Contact";
import { About } from "./pages/About";
import { Why } from "./pages/Why";

// Components
import Footer from "./components/Footer";
import { MobileMenu } from "./mobilemenu/MobileMenu";
import { Signin } from "./components/Signin";
import { Write } from "./components/Write";
import { Register } from "./components/Register";
import RegistrSucces from "./components/RegistrSucces";
import Vipbuy from "./pages/Vipbuy";
import Pay from "./pages/Pay";
import OldSearch from "./pages/OldSearch";

const App = () => {
  return (
    <MainContext>
      <Signin />
      <Register />
      <RegistrSucces />
      <MobileMenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/why" element={<Why />} />
        <Route path="/vipbuy" element={<Vipbuy />} />
        <Route path="/pay" element={<Pay />} />
        <Route path="/search" element={<OldSearch />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
      <Write />
      <Footer />
    </MainContext>
  );
};

export default App;
