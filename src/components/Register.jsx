import React, { useState, useRef } from "react";

// context
import { useMainContext } from "../utils/MainContext";

// image
import img from "../assets/img/Abstraction.png";

//icons
import { AiOutlineCloseCircle } from "react-icons/ai";

export const Register = () => {
  const values = useMainContext();
  const name = useRef();
  const email = useRef();
  const password = useRef();

  const closeRegister = () => {
    values.setOpenRegister("none");
    values.setOpenRegForm("-200%");
  };

  // json-a datanin gonderilmesi

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    agreeToTerms: false,
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;

    setFormData({
      ...formData,
      [name]: value,
    });
    if (
      password.current.value.length > 0 &&
      password.current.value.length <= 7
    ) {
      values.setPasswordSimvol(true);
    } else {
      values.setPasswordSimvol(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      name.current.value.length > 0 &&
      email.current.value.length > 0 &&
      password.current.value.length > 7
    ) {
      values.setPasswordSimvol(false);
      values.setNameSimvol(false);
      values.setEmailSimvol(false);
      const jsonData = await JSON.stringify(formData);
      await fetch("http://localhost:3001/users ", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: jsonData,
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Melumat gonderildi", data);
        })
        .catch((error) => {
          console.error("Melumat gonderilmedi:", error);
        });
    } else {
      values.setPasswordSimvol(true);
      values.setNameSimvol(true);
      values.setEmailSimvol(true);
    }
  };
  const openRegistrSucces = () => {
    if (formData.fullName && formData.email && formData.password) {
      values.setOpenRegistrSucces("block");
      values.setOpenRegFormSuc("50%");
    }
  };
  return (
    <>
      <div style={{ display: values.openRegister }} className="signin">
        <div onClick={closeRegister} className="bg-signin"></div>
      </div>

      <div style={{ top: values.openRegForm }} className="signin-form">
        <div className="img-form">
          <img src={img} alt="" />
        </div>

        <div className="inputs-form">
          <h1>Register</h1>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Full name"
              ref={name}
            />
            {values.nameSimvol && <p>* ad,soyadı daxil edin</p>}
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your email"
              ref={email}
            />
            {values.emailSimvol && <p>* elektron poçdu daxil edin</p>}
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Your password"
              ref={password}
            />
            {values.passwordSimvol && <p>* simvol sayı 8 -dən çox olmalıdır</p>}
            <div className="remember">
              <div className="remember-1">
                <input
                  id="read"
                  type="checkbox"
                  name="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onChange={handleChange}
                  required
                />
                <label className="priwacy" htmlFor="read">
                  I've read and agree with Terms of Service and our{" "}
                  <a href="">Privacy Police</a>
                </label>
              </div>
            </div>

            <button onClick={openRegistrSucces} className="btn-sign">
              Sign in
            </button>
            <button className="btn-sign-g">Sign in with Google</button>
          </form>
          <div onClick={closeRegister} className="close">
            <AiOutlineCloseCircle />
          </div>
        </div>
      </div>
    </>
  );
};
