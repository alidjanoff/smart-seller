import React from "react";
import { LiaCrownSolid } from "react-icons/lia";

const Offers = () => {
  return (
    <>
      <section className="container-off">
        <div className="top-container">
          <div className="of-icn">
            <LiaCrownSolid className="crown" />
            <p>XÜSUSİ TƏKLİF</p>
          </div>
          <h2>Pull&Bear məhsulları dekabr ayına qədər endirimdə!</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
          <button>
            <a href="#">Daha ətraflı</a>
          </button>
        </div>
        <div className="bottom-container">
          <div className="of-left off">
            <h2>Dünya markası Nike-dan gözlənilməz təklif</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.{" "}
            </p>
            <button>
              <a href="#">Daha ətraflı</a>
            </button>
          </div>
          <div className="of-right off">
            <h2>Zara-dan yeni işıq saçan ətirlər endirimli qiymətə</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.{" "}
            </p>
            <button>
              <a href="#">Daha ətraflı</a>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Offers;
