import React from "react";
import { AiOutlineStar } from "react-icons/ai";
import imgBig from "../assets/img/Rectangle 5623.png";
import dataComment from "../db/comment";


const ProductAbout = () => {
  return (
    <>
      <section className="productAbout">
        <div className="contentProduct">
          <div className="leftContent">
            <h4>MƏHSUL HAQQINDA MƏLUMAT</h4>
            <p>Apple iPad Pro 12.9-inch (6th Generation)</p>
            <a href="#">Məhsulun linkinə keçid et</a>
            <div className="reyting">
              <AiOutlineStar className="star" />
              <span>4.3</span>
            </div>
            <div className="price">1200</div>
          </div>
          <div className="rightContent">
            <img src={imgBig} alt="imgbig" />
          </div>
        </div>

        <div className="customerComments">
          {dataComment.map((x) => (
            <div className="commentData">
              <div className="leftData">
                <img src={x.img} alt="" />
              </div>
              <div className="rightData">
                <h4>{x.name}</h4>
                <div className="reyting">
                  <AiOutlineStar className="star" />
                  <span>{x.reyt}</span>
                </div>
                <p>{x.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default ProductAbout;
