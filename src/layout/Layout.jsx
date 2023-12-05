import React from "react";
import { Outlet } from "react-router-dom";
import { Signin } from "../components/Signin";
import { Register } from "../components/Register";
import RegistrSucces from "../components/RegistrSucces";
import { MobileMenu } from "../mobilemenu/MobileMenu";
import { Write } from "../components/Write";
import Footer from "../components/Footer";

function Layout({ isAdminPanel, setIsAdminPanel }) {
  return (
    <>
      <Signin isAdminPanel={isAdminPanel} setIsAdminPanel={setIsAdminPanel} />
      <Register />
      <RegistrSucces />
      <MobileMenu />
      <Outlet />
      <Write />
      <Footer />
    </>
  );
}

export default Layout;
