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

import Vipbuy from "./pages/Vipbuy";
import Pay from "./pages/Pay";
import OldSearch from "./pages/OldSearch";
import HomeAdmin from "./adminPanel/pageAdmin/HomeAdmin";
import Layout from "./layout/Layout";

const App = () => {
  const [isAdminPanel, setIsAdminPanel] = useState(false);
  return (
    <>
      <MainContext>
        <Routes>
          {isAdminPanel && (
            <Route path="/admin">
              <Route path="/admin" element={<HomeAdmin />} />
            </Route>
          )}
          <Route
            path="/"
            element={
              <Layout
                setIsAdminPanel={setIsAdminPanel}
                isAdminPanel={isAdminPanel}
              />
            }
          >
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/questions" element={<Questions />} />
            <Route path="/why" element={<Why />} />
            <Route path="/vipbuy" element={<Vipbuy />} />
            <Route path="/pay" element={<Pay />} />
            <Route path="/search" element={<OldSearch />} />
          </Route>
        </Routes>
      </MainContext>
    </>
  );
};

export default App;
