import React from "react";

import { useMainContext } from "../utils/MainContext";
import { AiOutlineCloseCircle } from "react-icons/ai";

const RegistrSucces = () => {
  const values = useMainContext();

  const closeRegistrSucces = () => {
    values.setOpenRegistrSucces("none");
    values.setOpenRegFormSuc("-200%");
  };
  return (
    <section
      className="registr-succes"
      style={{ display: values.openRegistrSucces, top: values.openRegFormSuc }}
    >
      <div className="reg-suc">
        Qeydiyyat uğurla tamamlandı
        <div onClick={closeRegistrSucces} className="close">
          <AiOutlineCloseCircle />
        </div>
      </div>
    </section>
  );
};

export default RegistrSucces;
