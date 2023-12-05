import { Link, useNavigate } from "react-router-dom";
import { useRef, useState, useContext } from "react";
import { useMainContext } from "../utils/MainContext";

// icons
import { AiOutlineLogin, AiOutlineMenu, AiOutlineUser } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import { FcManager } from "react-icons/fc";

// image
import desc from "../assets/img/newhead.png";
import turk from "../assets/img/turkey.png";
import english from "../assets/img/united-kingdom.png";
import ru from "../assets/img/ru.png";

// fakedata
import { fakeHeader } from "../db/fakeHeader";

const Header = () => {
  const values = useMainContext();
  const navigate = useNavigate();
  const openMenu = () => {
    values.setIsOpen("0");
  };

  const openSignin = () => {
    values.setOpenSingin("block");
    values.setOpenForm("50%");
  };

  const openRegister = () => {
    values.setOpenRegister("block");
    values.setOpenRegForm("50%");
  };
  const ref = useRef(null);
  const sub = useRef(null);

  const user = useRef(null);
  const subUser = useRef(null);

  const openSubLang = () => {
    sub.current.classList.toggle("open-lang");
    subUser.current.classList.remove("open-user");
  };

  const openUser = () => {
    subUser.current.classList.toggle("open-user");
    sub.current.classList.remove("open-lang");
  };
  const exitAccount = () => {
    localStorage.removeItem("user");
    navigate("/");
    window.location.href = "/";
  };

  return (
    <header id="home">
      <div className="logo_and_nav">
        <div className="logo">
          <Link to="/">
            <span className="logo_1">SMART</span>
            <span className="logo_2">SALE</span>
          </Link>
        </div>
        <div className="menu">
          <ul>
            {fakeHeader.map((x) => (
              <li key={x.id} style={{ display: values.navBlock }}>
                <Link to={x.to} className="menu-item">
                  {x.item}
                </Link>
              </li>
            ))}
            <li>
              {values.vipStatus && (
                <Link to="/search" className="menu-item">
                  Keçmiş axtarışlar
                </Link>
              )}
            </li>
          </ul>

          <div ref={ref} onClick={openSubLang} className="language">
            <div className="main-lang">
              <img src={turk} alt="" />
              <IoIosArrowDown />

              <div ref={sub} className="lang-submenu">
                <div className="lang-block">
                  <a href="">
                    <img src={english} alt="" /> <span>EN</span>
                  </a>

                  <a href="">
                    <img src={ru} alt="" /> <span>RU</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div onClick={openUser} ref={user} className="user-select">
            <div className="user-inner">
              {values.userData ? (
                <FcManager style={{ fontSize: 30 }} />
              ) : (
                <AiOutlineUser className="user-profile" />
              )}
              <IoIosArrowDown />
            </div>

            <div
              ref={subUser}
              className="user-sub"
              style={{ height: values.vipHeight }}
            >
              {values.userData && (
                <div className="tips-user">
                  {values.vipStatus ? (
                    <p className="vip-a">VIP</p>
                  ) : (
                    <div>
                      <p>VIP</p>
                      <Link to="/vipbuy" className="user-class">
                        Al
                      </Link>
                    </div>
                  )}
                </div>
              )}
              {values.userData ? (
                <div className="user-cabinet">
                  <div className="succes-user">{values.userData}</div>
                  <button onClick={exitAccount} className="cabinet">
                    Çıxış
                  </button>
                </div>
              ) : (
                <div className="btns-user">
                  <div onClick={openSignin} className="btn-user">
                    Giriş
                  </div>
                  <div onClick={openRegister} className="btn-user">
                    Qeydiyyat
                  </div>
                </div>
              )}
            </div>
          </div>

          <div onClick={openMenu} className="burger-menu">
            <div className="burger-inner">
              <AiOutlineMenu />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
