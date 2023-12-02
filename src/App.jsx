import React, { useState } from "react";

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
import HomeAdmin from "./adminPanel/pageAdmin/HomeAdmin";

const App = () => {
  const [isAdminPanel, setIsAdminPanel] = useState(false);
  return (
    <>
      {!isAdminPanel ? (
        <MainContext>
          <Signin
            isAdminPanel={isAdminPanel}
            setIsAdminPanel={setIsAdminPanel}
          />
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
            {/* <Route path="/product" element={<ProductAbout />} /> */}
            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
          <Write />
          <Footer />
        </MainContext>
      ) : (
        <MainContext>
          <Routes>
            <Route path="/admin" element={<HomeAdmin />} />
          </Routes>
        </MainContext>
      )}
    </>
  );
};

export default App;
