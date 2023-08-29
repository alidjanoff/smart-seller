import { Link } from "react-router-dom";
import { useRef, useState, useContext } from "react";

import { useMainContext } from "../utils/MainContext";

// icons
import { AiOutlineLogin, AiOutlineMenu, AiOutlineUser } from 'react-icons/ai';
import { IoIosArrowDown } from 'react-icons/io'

// image
import desc from "../assets/img/newhead.png";
import turk from "../assets/img/turkey.png";
import english from "../assets/img/united-kingdom.png";

// fakedata
import data from "./../db/fakeData";
import { fakeHeader } from "../db/fakeHeader";



const Header = () => {



  const values = useMainContext();

  const openMenu = () => {
    values.setIsOpen('0');
  }

  const openSignin = () => {
    values.setOpenSingin('block');
    values.setOpenForm('50%');
  }

  const openRegister = ()=>{
    values.setOpenRegister('block');
    values.setOpenRegForm('50%')
  }

  const ref = useRef(null);
  const sub = useRef(null);

  const user = useRef(null);
  const subUser = useRef(null);

  const openSubLang = () => {
    sub.current.classList.toggle('open-lang');
    subUser.current.classList.remove('open-user');
  }

  const openUser = () => {
    subUser.current.classList.toggle('open-user')
    sub.current.classList.remove('open-lang')
  }

  return (
    <header id="home">
      {/* <div className="">
        <div className="container header-container">
          <div className="row header-row-1">
            <div className="logo col-3">
              <Link className="logo-inner" to="/home">
                <p>SMARTSALE</p>
              </Link>
            </div>

            <div className="menu col-9">
              <ul>
                {
                  fakeHeader.map((x) => (
                    <li key={x.id}>
                      <a href={x.href}
                        className="menu-item"
                      >
                        {x.item}
                      </a>
                    </li>
                  ))
                }
              </ul>

              <Link to="/login">
                <button className="login-btn login-1"><AiOutlineLogin /> Login</button>
              </Link>

              <Link to="/register">
                <button className="login-btn">Sign up</button>
              </Link>

              <div onClick={openMenu} className="burger-menu">
                <AiOutlineMenu />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row site-description">
          <div className="col-6 left-side">
            <h1>Shopping made smarter  Let us do the research for you.</h1>
            <p>Let us do the research for you.</p>
            <Link to="/login">
              <button>Get started</button>
            </Link>
          </div>
          <div className="col-6 right-side">
            <img src={desc} alt="" />
          </div>
        </div>
      </div> */}

      <div className="main-header container-fluid">
        <div className="logo_and_nav">
          <div className="logo">
            <Link to='/'>
              <span className="logo_1">
                SMART
              </span>
              <span className="logo_2">
                SALE
              </span>
            </Link>
          </div>

          <div className="menu">
            <ul>
              {
                fakeHeader.map((x) => (
                  <li key={x.id}>
                    <Link to={x.to}
                      className="menu-item"
                    >
                      {x.item}
                    </Link>
                  </li>
                ))
              }
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
                      <img src={english} alt="" /> <span>EN</span>
                    </a>
                  </div>
                </div>
              </div>

            </div>

            <div onClick={openUser} ref={user} className="user-select">
              <div className="user-inner">
                <AiOutlineUser className="user-profile" /> <IoIosArrowDown />
              </div>

              <div ref={subUser} className="user-sub">
                <div className="tips-user">
                  <Link className="user-class">VIP</Link>
                </div>

                <div className="btns-user">
                  <div onClick={openSignin} className="btn-user">
                    Giris
                  </div>
                  <div onClick={openRegister} className="btn-user">
                    Qeydiyyat
                  </div>
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>
    </header>
  );
};

export default Header;
