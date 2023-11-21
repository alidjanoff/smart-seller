import React from "react";
import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import { MainContext } from "../../utils/MainContext";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineFeedback } from "react-icons/md";
import { LuUsers } from "react-icons/lu";
import { FaRegUser } from "react-icons/fa";
import { IoIosStarOutline, IoMdExit } from "react-icons/io";
import NavbarAdmin from "../componentAdmin/NavbarAdmin";
import HomeComponent from "../componentAdmin/HomeComponent";

const HomeAdmin = () => {
  return (
    <MainContext>
      <section className="homeAdminBack">
        <section className="homeAdmin">
          <NavbarAdmin />
          <section className="main">
            <div className="leftMain">
              <ul>
                <li>
                  <Link to="/admin/homeadmin">
                    <IoHomeOutline />
                    Home
                  </Link>
                </li>
                <li>
                  <Link>
                    <MdOutlineFeedback />
                    Feedbacks
                  </Link>
                </li>
                <li>
                  <Link>
                    <LuUsers />
                    Users
                  </Link>
                </li>
                <li>
                  <Link>
                    <FaRegUser />
                    Roles
                  </Link>
                </li>
                <li>
                  <Link>
                    <IoIosStarOutline />
                    Reguests
                  </Link>
                </li>
                <li className="exit">
                  <Link>
                    <IoMdExit />
                    Sign out
                  </Link>
                </li>
              </ul>
            </div>
            <div className="rightMain">
                <Routes>
                  <Route path="/admin/homeadmin" element={<HomeComponent />} />
                </Routes>
            </div>
          </section>
        </section>
      </section>
    </MainContext>
  );
};

export default HomeAdmin;
