import React, { createContext, useRef, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";

//data
import data from "../db/fakeData";

//icons
import {
  AiOutlineArrowRight,
  AiOutlineArrowLeft,
  AiOutlineStar,
} from "react-icons/ai";

//img
import plan from "../assets/img/g10.png";
import plan4 from "../assets/img/FLO Mağazacılık svg.png";
import plan2 from "../assets/img/Zara svg.png";
import Sales from "../components/Sales";
import Offers from "../components/Offers";
import Filter from "../components/Filter";

import { useMainContext } from "../utils/MainContext";
import ProductAbout from "../components/ProductAbout";
export const MyContext = createContext();

const Home = () => {
  const values = useMainContext();
  const searchValue = useRef();
  const searchInJsonData = (term) => {
    const results = data.filter((user) =>
      user.name.toLowerCase().includes(term.toLowerCase())
    );
    values.setSearchResults(results);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchValue.current.value === "") {
      values.setActivInfo(true);
    } else {
      searchInJsonData(values.searchTerm);
      values.setOpenSearchData("block");
    }
    values.setExitSearch("flex");
  };
  localStorage.setItem("searchData", JSON.stringify(values.searchResults));
  const searchResultsLocal = JSON.parse(localStorage.getItem("searchData"));
  const exitSearch = () => {
    values.setExitSearch("none");
  };
  return (
    <div>
      <div className="description ">
        <div className="container-dec">
          <div className="left-side">
            <h1 className="main-desc">
              Axtardığınız məhsul istədiyiniz qiymətə!
            </h1>
            <p>
              Bu saytda istədiyiniz məhsulu axtara bilərsiniz, məhsul axtarmaq
              üçün sağdaki məlumatları doldurun.
            </p>
          </div>
          <div className="right-side">
            <div className="search-product">
              <form action="">
                <input
                  type="text"
                  placeholder="Arama yap..."
                  value={values.searchTerm}
                  ref={searchValue}
                  onChange={(e) => {
                    values.setSearchTerm(e.target.value);
                    if (e.target.value !== "") {
                      values.setActivInfo(false);
                    }
                  }}
                />
                {values.activInfo && <p>*açar söz daxil edin</p>}
                <button onClick={handleSearch}>Axtar</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="search-container">
        {!values.sP ? (
          <div
            className="container-fluid search2"
            style={{ display: values.openSearchData }}
          >
            <div
              className="container  search-result"
              style={{ display: values.exitSearch }}
            >
              <h1>
                "<span>{values.searchTerm}</span>" axtarışından çıxan nəticələr
              </h1>
              <div className="products-search">
                {searchResultsLocal.map((x) => (
                  <div key={x.id} className="link-product">
                    <div className="name-and-link">
                      <div className="name-search">
                        {x.name} {x.price} <span>$</span>
                      </div>
                      <a className="link-search" href={x.link}>
                        Sayta keç
                      </a>
                    </div>
                    <div className="name-and-link">
                      <div className="name-search">
                        {x.location} {x.rating}
                        <AiOutlineStar className="star" />
                      </div>

                      <button
                        className="link-search"
                        onClick={() => (
                          values.setId(x.id),
                          values.setSP(true),
                          values.setFilterPage(false),
                          values.setIdFilter(null),
                          values.setIdSale(null)
                        )}
                      >
                        Məhsul haqqında məlumat al
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <button onClick={exitSearch}>Bağla</button>
            </div>
          </div>
        ) : null}
        {values.sP ? <ProductAbout /> : null}
      </div>
      {values.vipStatus && <Sales />}
      {values.salePage ? <ProductAbout /> : null}
      {values.vipStatus && <Filter />}
      {values.filterPage ? <ProductAbout /> : null}
      {values.vipStatus && <Offers />}
      <div className="container-fluid">
        <div className="container popular-brands">
          <p className="name-section">Populyar Brendlər</p>
          <p className="desc-section">
            Siz özünüzə uyğun populyar məhsulları seçib sərfəli qiymətə ala
            bilərsiniz!
          </p>

          <div className="popular-carousel">
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={50}
              slidesPerView={7}
              loop={true}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                0: {
                  slidesPerView: 2,
                },
                650: {
                  slidesPerView: 4,
                },
                1024: {
                  slidesPerView: 7,
                },
              }}
            >
              <SwiperSlide className="slide-popular">
                <img src={plan} alt="" />
              </SwiperSlide>
              <SwiperSlide className="slide-popular">
                <img src={plan4} alt="" />
              </SwiperSlide>
              <SwiperSlide className="slide-popular">
                <img src={plan2} alt="" />
              </SwiperSlide>
              <SwiperSlide className="slide-popular">
                <img src={plan} alt="" />
              </SwiperSlide>
              <SwiperSlide className="slide-popular">
                <img src={plan4} alt="" />
              </SwiperSlide>
              <SwiperSlide className="slide-popular">
                <img src={plan2} alt="" />
              </SwiperSlide>
              <SwiperSlide className="slide-popular">
                <img src={plan} alt="" />
              </SwiperSlide>
              <SwiperSlide className="slide-popular">
                <img src={plan4} alt="" />
              </SwiperSlide>
            </Swiper>
            <div className="btns-swiper">
              <div className="swiper-button-next">
                <AiOutlineArrowLeft />
              </div>
              <div className="swiper-button-prev">
                <AiOutlineArrowRight />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="container popular-brands">
          <p className="name-section">Populyar Məhsullar</p>
          <p className="desc-section">
            Siz özünüzə uyğun populyar məhsulları seçib sərfəli qiymətə ala
            bilərsiniz!
          </p>

          <div className="popular-carousel">
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={50}
              slidesPerView={4}
              loop={true}
              navigation={{
                nextEl: ".swiper-button-next2",
                prevEl: ".swiper-button-prev2",
              }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                650: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 4,
                },

                1400: {
                  slidesPerView: 6,
                },
              }}
            >
              {data?.map((x) => (
                <SwiperSlide className="slide-product">
                  <a href="">
                    <div className="image-product">
                      <img src={x.img} alt="" />
                    </div>
                    <div className="name-and-rating">
                      <span className="name">{x.name}</span>
                      <div className="rating">
                        {" "}
                        <AiOutlineStar className="star" /> {x.rating}
                      </div>
                    </div>

                    <div className="price">
                      {x.price} <span>$</span>
                    </div>
                  </a>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="btns-swiper">
              <div className="swiper-button-next2">
                <AiOutlineArrowLeft />
              </div>
              <div className="swiper-button-prev2">
                <AiOutlineArrowRight />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
