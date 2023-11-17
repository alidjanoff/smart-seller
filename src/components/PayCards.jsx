import React from "react";

const PayCards = () => {
  return (
    <>
      <form action="">
        <label htmlFor="">
          Kart nömrəsi
          <input type="text" placeholder="1234 1234 1234 1234" />
        </label>
        <label htmlFor="">
          Kartın üzərindəki ad
          <input type="text" placeholder="Brooklyn Simmons" />
        </label>
        <label htmlFor="">
          Son istifadə tarixi
          <input type="data" placeholder="01/23" />
        </label>
        <label htmlFor="">
          CVV
          <input type="text" placeholder="123" />
        </label>
        <label htmlFor="">
          <input className="submit" type="Submit" value="Göndər" />
        </label>
      </form>
    </>
  );
};

export default PayCards;
