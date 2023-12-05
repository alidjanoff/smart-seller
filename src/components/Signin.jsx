import React, { useRef, createContext, useEffect, useState } from "react";
import { useMainContext } from "../utils/MainContext";
// image
//icons
import { AiOutlineCloseCircle } from "react-icons/ai";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import img from "../assets/img/Abstraction.png";
import Header from "./Header";
export const MyContext = createContext();

export const Signin = ({ setIsAdminPanel }) => {
  const values = useMainContext();
  const navigate = useNavigate();
  const emailInput = useRef();
  const passwordInput = useRef();
  const [userLocal, setUserLocal] = useState(null);

  useEffect(() => {
    if (localStorage.getItem("user")) {
      let user = JSON.parse(localStorage.getItem("user"));
      setUserLocal(user);
    }
  }, []);

  if (userLocal) {
    let dataName = userLocal[0].fullName;
    let status = userLocal[0].status;
    values.setUserData(dataName);
    values.setVipStatus(status);
    values.setNavBlock("none");
    if (userLocal[0].role === "admin") {
      setIsAdminPanel(true);
      navigate("/admin");
    } else {
      setIsAdminPanel(false);
      values.setOffersData(dataName);
    }
    if (dataName) {
      values.setVipHeight("120px");
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = emailInput.current.value;
    const password = passwordInput.current.value;
    if (password.length >= 8) {
      values.setPasswordSimvol(false);
      try {
        const response = await fetch(
          `http://localhost:3001/users?email=${email}&password=${password}`
        );
        let data = await response.json();
        if (!data.length) {
          return alert("E-poçt və şifrə uyğun deyil");
        }
        localStorage.setItem("user", JSON.stringify(data));
        let user = JSON.parse(localStorage.getItem("user"));

        let dataName = user[0].fullName;
        let status = user[0].status;
        values.setUserData(dataName);
        values.setVipStatus(status);
        values.setNavBlock("none");
        if (user[0].role === "admin") {
          setIsAdminPanel(true);
          navigate("/admin");
        } else {
          setIsAdminPanel(false);
          values.setOffersData(dataName);
        }
        if (dataName) {
          values.setVipHeight("120px");
        }

        closeForm();
      } catch (error) {
        console.error("Məlumatın alınması zamanı xəta baş verdi: ", error);
      }
    } else {
      values.setPasswordSimvol(true);
    }
  };

  //////////////////////////////////

  const closeForm = () => {
    values.setOpenSingin("none");
    values.setOpenForm("-200%");
  };

  const forgot = useRef(null);
  const btnforgot = useRef(null);
  const backLogin = useRef(null);

  const getPassword = () => {
    forgot.current.style.right = "0";
  };

  const backToLog = () => {
    forgot.current.style.right = "-100%";
  };
  const onChange = () => {
    if (
      passwordInput.current.value.length > 0 &&
      passwordInput.current.value.length <= 7
    ) {
      values.setPasswordSimvol(true);
    } else {
      values.setPasswordSimvol(false);
    }
  };

  return (
    <>
      <div>
        <Header />
      </div>
      <div style={{ display: values.openSingin }} className="signin">
        <div onClick={closeForm} className="bg-signin"></div>
      </div>
      <div style={{ top: values.openForm }} className="signin-form">
        <div className="img-form">
          <img src={img} alt="" />
        </div>

        <div className="inputs-form">
          <h2>Sign in </h2>

          <form onSubmit={handleSubmit}>
            <input
              placeholder="Your email"
              type="email"
              ref={emailInput}
              required
            />
            <input
              placeholder="Your password"
              type="password"
              ref={passwordInput}
              onChange={onChange}
            />
            {values.passwordSimvol && (
              <p> * simvol sayı 8 -dən çox olmalıdır</p>
            )}
            <div className="remember">
              <div className="remember-1">
                <input id="check" type="checkbox" />
                <label htmlFor="check">Remember me</label>
              </div>

              <span
                onClick={getPassword}
                ref={btnforgot}
                className="forgot"
                href=""
              >
                Forgot password?
              </span>
            </div>

            <button className="btn-sign" type="submit">
              Sign in
            </button>
            <button className="btn-sign-g">Sign in with Google</button>
          </form>

          <div ref={forgot} className="forgot-password">
            <h2>Forgot password?</h2>
            <p>No worries, we’ll send you reset instructions</p>

            <form action="">
              <input placeholder="Your email" type="email" required />

              <button>Reset password</button>
            </form>

            <div onClick={backToLog} ref={backLogin} className="back-log">
              <div className="btn-back">
                <IoIosArrowBack />
              </div>{" "}
              Back to login
            </div>
          </div>

          <div onClick={closeForm} className="close">
            <AiOutlineCloseCircle />
          </div>
        </div>
      </div>
    </>
  );
};
