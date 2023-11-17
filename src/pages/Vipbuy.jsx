import React from 'react'
import { Link } from "react-router-dom";


const Vipbuy = () => {
  return (
    <>
    <section className="vipBuyBack">
        <div className="vipBuy">
            <h2>Planınızı seçin</h2>
            <div className="newBuy">
                <p>İlk alış</p>
                <div className="newBuyCost">
                    <p> <span>3.99AZN</span> /aylıq</p>
                    <Link to='/pay'>Seçin</Link>
                </div>
            </div>
            <div className="newBuy">
                <p>Sonrakı alış</p>
                <div className="newBuyCost">
                    <p> <span>4.99AZN</span> /aylıq</p>
                    <Link to='/pay'>Seçin</Link>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Vipbuy