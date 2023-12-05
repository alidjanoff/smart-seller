import React, { createContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MainContext } from "../../utils/MainContext";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineFeedback } from "react-icons/md";
import { LuUsers } from "react-icons/lu";
import { FaRegUser } from "react-icons/fa";
import { IoIosStarOutline, IoMdExit } from "react-icons/io";
import NavbarAdmin from "../componentAdmin/NavbarAdmin";
import HomeComponent from "../componentAdmin/HomeComponent";
import FeedBack from "../componentAdmin/FeedBack";
import { useMainContext } from "../../utils/MainContext";
import Users from "../componentAdmin/Users";
import Admins from "../componentAdmin/Admins";
import Reguests from "../componentAdmin/Reguests";
export const MyContext = createContext;

const HomeAdmin = () => {
  const values = useMainContext();
  const navigate = useNavigate();
  const clickExitAdmin = () => {
    localStorage.removeItem("user");
    navigate("/");
    window.location.href = "/";
  };
  return (
    <MainContext>
      <section className="homeAdminBack">
        <section className="homeAdmin">
          <NavbarAdmin />
          <section className="main">
            <div className="leftMain">
              <ul>
                <li
                  style={
                    values.stateAdmin === "home"
                      ? { background: "#0000000e" }
                      : null
                  }
                  onClick={() => values.setStateAdmin("home")}
                >
                  <Link>
                    <IoHomeOutline />
                    Home
                  </Link>
                </li>
                <li
                  style={
                    values.stateAdmin === "feedback"
                      ? { background: "#0000000e" }
                      : null
                  }
                  onClick={() => values.setStateAdmin("feedback")}
                >
                  <Link>
                    <MdOutlineFeedback />
                    Feedbacks
                  </Link>
                </li>
                <li
                  style={
                    values.stateAdmin === "users"
                      ? { background: "#0000000e" }
                      : null
                  }
                  onClick={() => values.setStateAdmin("users")}
                >
                  <Link>
                    <LuUsers />
                    Users
                  </Link>
                </li>
                <li
                  style={
                    values.stateAdmin === "admins"
                      ? { background: "#0000000e" }
                      : null
                  }
                  onClick={() => values.setStateAdmin("admins")}
                >
                  <Link>
                    <FaRegUser />
                    Roles
                  </Link>
                </li>
                <li
                  style={
                    values.stateAdmin === "reguests"
                      ? { background: "#0000000e" }
                      : null
                  }
                  onClick={() => values.setStateAdmin("reguests")}
                >
                  <Link>
                    <IoIosStarOutline />
                    Reguests
                  </Link>
                </li>
                <li className="exit" onClick={clickExitAdmin}>
                  <Link>
                    <IoMdExit />
                    Sign out
                  </Link>
                </li>
              </ul>
            </div>
            <div className="rightMain">
              {values.stateAdmin === "home" && <HomeComponent />}
              {values.stateAdmin === "feedback" && <FeedBack />}
              {values.stateAdmin === "users" && <Users />}
              {values.stateAdmin === "admins" && <Admins />}
              {values.stateAdmin === "reguests" && <Reguests />}
            </div>
          </section>
        </section>
      </section>
    </MainContext>
  );
};

export default HomeAdmin;
