import React,{useState} from "react";
import { FaRegCreditCard, FaPaypal } from "react-icons/fa";
import PayPal from "../components/PayPal";
import PayCards from "../components/PayCards";

const Pay = () => {
  const [openPay, setOpenPay] = useState(false)

  const openPayfun = () => {
    setOpenPay(true);
  };
  const openPayfun2 = () => {
    setOpenPay(false);

  };
  return (
    <>
      <section className="payBack">
        <h2>Ödəniş metodunuzu seçin</h2>
        <div className="pay">
          <div className="payMetod">
            <div className={`card ${openPay|| 'openPay'}`}>
              <FaRegCreditCard />
              <p onClick={openPayfun2}>Kredit kartı</p>
            </div>
            <div className={`card ${openPay&& 'openPay'}`}>
              <FaPaypal />
              <p onClick={openPayfun}>PayPal</p>
            </div>
          </div>
          <div className="payMetodView">
            {openPay ? <PayPal /> : <PayCards />}
          </div>
        </div>
      </section>
    </>
  );
};

export default Pay;
