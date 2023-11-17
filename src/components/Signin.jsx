import React, { useRef, createContext, useState } from "react";
import { useMainContext } from "../utils/MainContext";
// image
//icons
import { AiOutlineCloseCircle } from "react-icons/ai";
import { IoIosArrowBack } from "react-icons/io";
import img from "../assets/img/Abstraction.png";
import Header from "./Header";
export const MyContext = createContext();

export const Signin = () => {
  const values = useMainContext();
  const [userData, setUserData] = useState(null);

  /////////////////////////////////
  const emailInput = useRef();
  const passwordInput = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = emailInput.current.value;
    const password = passwordInput.current.value;
    try {
      const response = await fetch("http://localhost:3001/users");
      let data = await response.json();
      data.forEach((user) => {
        if (user.email === email && user.password === password) {
          const dataName = user.fullName;
          setUserData(dataName);
          closeForm();
        } else {
          alert("E-poçt və şifrə uyğun deyil");
        }
      });
    } catch (error) {
      console.error("Məlumatın lınması zamanı xəta baş verdi: ", error);
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
  return (
    <>
      <div>
        <Header userData={userData} />
      </div>
      <div style={{ display: values.openSingin }} className="signin">
        <div onClick={closeForm} className="bg-signin"></div>
      </div>
      <div style={{ top: values.openForm }} className="signin-form">
        <div className="img-form">
          <img src={img} alt="" />
        </div>

        <div className="inputs-form">
          <h1>Sign in </h1>

          <form onSubmit={handleSubmit}>
            <input placeholder="Your email" type="email" ref={emailInput} />
            <input
              placeholder="Your password"
              type="password"
              ref={passwordInput}
            />
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
              <input placeholder="Your email" type="email" />

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
