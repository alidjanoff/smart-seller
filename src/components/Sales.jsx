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

const Sales = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="container popular-brands">
          <p className="name-section">Endirimli Məhsullar</p>
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
              {data?.map(
                (x) =>
                  x.priceSale && (
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
                        <div className="salePrice">
                          <div className="price">{x.priceSale}</div>
                          <div className="price saleStyle">{x.price}</div>
                        </div>
                      </a>
                    </SwiperSlide>
                  )
              )}
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
    </>
  );
};

export default Sales;
