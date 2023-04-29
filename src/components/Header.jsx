import { Link, NavLink } from "react-router-dom";
import { useRef, useState } from "react";

// image
import desc from "../assets/img/desc.svg";
import turk from "../assets/img/turkey.png";
import english from "../assets/img/united-kingdom.png";

// fakedata
import data from "./../db/fakeData";

const Header = () => {
  const [isTurkish, setIsTurkish] = useState(true);
  const turkishRef = useRef();
  const englishRef = useRef();

  const toggleLanguage = () => {
    setIsTurkish(!isTurkish);
  };

  return (
    <header className="header">
      <div className="container">
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
                    <NavLink
                      className={`menu-item ${
                        x.isActive ? "active" : "non-active"
                      }`}
                      to={x.to}
                    >
                      {x.item}
                    </NavLink>
                  </li>
                ))
              )}
            </ul>

            <form className="language">
              <img
                ref={isTurkish ? turkishRef : englishRef}
                src={isTurkish ? turk : english}
                alt=""
              />

              <div className="language-submenu">
                <button type="button" onClick={toggleLanguage}>
                  <img
                    ref={!isTurkish ? turkishRef : englishRef}
                    src={!isTurkish ? turk : english}
                    alt=""
                  />
                </button>
              </div>
            </form>

            <Link to="/login">
              <button className="login-btn">Login</button>
            </Link>

            <Link to="/register">
              <button className="login-btn">Register</button>
            </Link>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row site-description">
          <div className="col-6 left-side">
            <h1>Shopping made smarter - Let us do the research for you.</h1>

            <Link to="/login">
              <button>Register</button>
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
