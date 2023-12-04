import React, { createContext } from "react";
import { useMainContext } from "../utils/MainContext";
import { AiOutlineStar } from "react-icons/ai";
import dataFilter from "../db/fakeData";
export const MyContext = createContext();

const ProductAbout = () => {
  const searchResultsLocal = JSON.parse(localStorage.getItem("searchData"));
  const values = useMainContext();
  const backSearch = () => {
    values.setSP(false);
    values.setFilterPage(false);
    values.setSalePage(false);
    values.setIdOld(null);
  };
  return (
    <>
      <div id="productAbout">
        {searchResultsLocal
          .filter((x) => x.id === values.id || x.id === values.idOld)
          .map((x) => (
            <section className="productAbout">
              <div className="contentProduct">
                <div className="leftContent">
                  <h4>MƏHSUL HAQQINDA MƏLUMAT</h4>
                  <p>{x.name}</p>
                  <a href={x.href}>Məhsulun linkinə keçid et</a>
                  <div className="reyting">
                    <AiOutlineStar className="star" />
                    <span>{x.rating}</span>
                  </div>
                  <div className="price">
                    {x.price} <span>$</span>
                  </div>
                </div>
                <div className="rightContent">
                  <img src={x.about.img} alt="imgbig" />
                </div>
              </div>
              <div className="customerComments">
                <div className="commentData">
                  <div className="leftData">
                    <img src={x.commit.imgUser} alt="" />
                  </div>
                  <div className="rightData">
                    <h4>{x.commit.name}</h4>
                    <div className="reyting">
                      <AiOutlineStar className="star" />
                      <span>{x.rating}</span>
                    </div>
                    <p>{x.commit.text}</p>
                  </div>
                </div>
              </div>
              <button onClick={backSearch}>Geri</button>
            </section>
          ))}
      </div>
      <div id="productAbout">
        {dataFilter
          .filter((x) => x.id === values.idFilter)
          .map((x) => (
            <section className="productAbout">
              <div className="contentProduct">
                <div className="leftContent">
                  <h4>MƏHSUL HAQQINDA MƏLUMAT</h4>
                  <p>{x.name}</p>
                  <a href={x.href}>Məhsulun linkinə keçid et</a>
                  <div className="reyting">
                    <AiOutlineStar className="star" />
                    <span>{x.rating}</span>
                  </div>
                  <div className="price">
                    {x.price} <span>$</span>
                    {x.priceSale} <span>$</span>
                  </div>
                </div>
                <div className="rightContent">
                  <img src={x.about.img} alt="imgbig" />
                </div>
              </div>
              <div className="customerComments">
                <div className="commentData">
                  <div className="leftData">
                    <img src={x.commit.imgUser} alt="" />
                  </div>
                  <div className="rightData">
                    <h4>{x.commit.name}</h4>
                    <div className="reyting">
                      <AiOutlineStar className="star" />
                      <span>{x.rating}</span>
                    </div>
                    <p>{x.commit.text}</p>
                  </div>
                </div>
              </div>
              <button onClick={backSearch}>Geri</button>
            </section>
          ))}
      </div>
      <div id="productAbout">
        {dataFilter
          .filter((x) => x.id === values.idSale)
          .map((x) => (
            <section className="productAbout">
              <div className="contentProduct">
                <div className="leftContent">
                  <h4>MƏHSUL HAQQINDA MƏLUMAT</h4>
                  <p>{x.name}</p>
                  <a href={x.href}>Məhsulun linkinə keçid et</a>
                  <div className="reyting">
                    <AiOutlineStar className="star" />
                    <span>{x.rating}</span>
                  </div>
                  <div className="price">
                    {x.priceSale} <span>$</span>
                  </div>
                </div>
                <div className="rightContent">
                  <img src={x.about.img} alt="imgbig" />
                </div>
              </div>
              <div className="customerComments">
                <div className="commentData">
                  <div className="leftData">
                    <img src={x.commit.imgUser} alt="" />
                  </div>
                  <div className="rightData">
                    <h4>{x.commit.name}</h4>
                    <div className="reyting">
                      <AiOutlineStar className="star" />
                      <span>{x.rating}</span>
                    </div>
                    <p>{x.commit.text}</p>
                  </div>
                </div>
              </div>
              <button onClick={backSearch}>Geri</button>
            </section>
          ))}
      </div>
    </>
  );
};

export default ProductAbout;
