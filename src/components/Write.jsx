import React, { useRef, useState } from "react";

//icons
import { TbMessageCircle } from "react-icons/tb";

//img
import img from "../assets/img/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.avif";
import img2 from "../assets/img/young-bearded-man-with-striped-shirt_273609-5677.avif";

export const Write = () => {
  const message = useRef(null);

  const blockMessage = () => {
    message.current.classList.toggle("block-message");
  };

  // json-a datanin gonderilmesi

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    textarea: "",
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

  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const jsonData = await JSON.stringify(formData);

    await fetch("http://localhost:3002/feedBack ", {
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
  };

  return (
    <>
      <div className="write">
        <div className="write-inner">
          <TbMessageCircle className="icn-write" />
          <span onClick={blockMessage}>Bizə yazın</span>
          <div ref={message} className="message-sent">
            <div className="header-message">
              <div className="man-images">
                <div className="man-1">
                  <img src={img} alt="" />
                </div>
                <div className="man-1 man-2">
                  <img src={img2} alt="" />
                </div>
              </div>
              <h3>Necə kömək edək?</h3>
              <p>Sizi bir saat ərzində cavablandırırıq</p>
            </div>

            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Ad Soyad"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="email"
              />

              <textarea
                type="textarea"
                name="textarea"
                value={formData.textarea}
                onChange={handleChange}
                placeholder="Mesaj yaz"
              ></textarea>

              <input
                className="button"
                type="submit"
                onClick={blockMessage}
                value="Mesaj göndər"
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
