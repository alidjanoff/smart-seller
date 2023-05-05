import { Link } from "react-router-dom";
import { useRef, useState, useContext } from "react";

// icons
import { AiOutlineLogin, AiOutlineMenu } from 'react-icons/ai';

// image
import desc from "../assets/img/newhead.png";
import turk from "../assets/img/turkey.png";
import english from "../assets/img/united-kingdom.png";

// fakedata
import data from "./../db/fakeData";
import { useMainContext } from "../utils/MainContext";

const Header = () => {
  const [isTurkish, setIsTurkish] = useState(true);

  const turkishRef = useRef();
  const englishRef = useRef();

  const toggleLanguage = () => {
    setIsTurkish(!isTurkish);
  };

  const values = useMainContext();
   
  const openMenu = ()=>{
    values.setIsOpen('0')
  }

  
  return (
    <header id="home" className="header">
      <div className="">
        <div className="container header-container">
          <div className="row header-row-1">
            <div className="logo col-3">
              <Link className="logo-inner" to="/home">
                <p>SMARTSALE</p>
              </Link>
            </div>

            <div className="menu col-9">
              <ul>
                {data.map((item) =>
                  item.menu.map((x) => (
                    <li key={x.id}>
                      <a href={x.href}
                        className="menu-item"
                      >
                        {x.item}
                      </a>
                    </li>
                  ))
                )}
              </ul>
              <div className="language">
                <img
                  ref={isTurkish ? turkishRef : englishRef}
                  src={isTurkish ? turk : english}
                  alt=""
                /> 
                <div className="language-submenu">
                  <a onClick={toggleLanguage}>
                    <img
                      ref={!isTurkish ? turkishRef : englishRef}
                      src={!isTurkish ? turk : english}
                      alt=""
                    />
                  </a>
                </div>
              </div>

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
      </div>
    </header>
  );
};

export default Header;


