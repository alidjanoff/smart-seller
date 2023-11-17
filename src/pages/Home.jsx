import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';

//data
import data from "../db/fakeData"
import { searchResult } from "../db/searchResult";

//icons
import { BsFillTelephoneForwardFill } from 'react-icons/bs';
import { AiOutlineArrowRight, AiOutlineArrowLeft, AiOutlineStar } from 'react-icons/ai'
import { FaLocationArrow } from 'react-icons/fa'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'

//img
import plan from '../assets/img/g10.png'
import plan4 from '../assets/img/FLO Mağazacılık svg.png'
import plan2 from '../assets/img/Zara svg.png'
import plan3 from '../assets/img/pana.png'
import about from '../assets/img/about.png'
import Sales from "../components/Sales";
import ProductAbout from "../components/ProductAbout";
import Offers from "../components/Offers";
import Filter from "../components/Filter";




const Home = () => {
  return (
    <div>
      <div className="description container-fluid">
        <div className="left-side">
          <h1 className="main-desc">
            Axtardığınız məhsul istədiyiniz qiymətə!
          </h1>
          <p>
            Bu saytda istədiyiniz məhsulu axtara bilərsiniz, məhsul axtarmaq üçün sağdaki məlumatları doldurun.
          </p>
        </div>
        <div className="right-side">
          <div className="search-product">
            <form action="">
              <input type="text" placeholder="Mehsulun adi" />
              <button>Axtar</button>
            </form>
          </div>
        </div>
      </div>
     <Sales />
      <ProductAbout />
      <Filter />
      <Offers />
      <div className="container-fluid" style={{display:'none'}}>
        <div className="container search-result">
          <h1>“Automatic Pet Feeter” axtarışından çıxan nəticələr</h1>
          <div className="products-search">
            {searchResult.map(x => (
              <div key={x.id} className="link-product">
                <div className="name-and-link">
                  <div className="name-search">
                    {x.name} {x.price}
                  </div>

                  <a className="link-search" href={x.href}>Sayta keç</a>
                </div>
                <div className="name-and-link">
                  <div className="name-search">
                    {x.location} {x.rating}
                  </div>

                  <a className="link-search" href={x.about}>Məhsul haqqında məlumat al</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="container popular-brands">
          <p className="name-section">
            Populyar Brendlər
          </p>
          <p className="desc-section">
            Siz özünüzə uyğun populyar məhsulları seçib sərfəli qiymətə ala bilərsiniz!
          </p>

          <div className="popular-carousel">
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={50}
              slidesPerView={7}
              loop={true}
              navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
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
              <SwiperSlide className="slide-popular"><img src={plan} alt="" /></SwiperSlide>
              <SwiperSlide className="slide-popular"><img src={plan4} alt="" /></SwiperSlide>
              <SwiperSlide className="slide-popular"><img src={plan2} alt="" /></SwiperSlide>
              <SwiperSlide className="slide-popular"><img src={plan} alt="" /></SwiperSlide>
              <SwiperSlide className="slide-popular"><img src={plan4} alt="" /></SwiperSlide>
              <SwiperSlide className="slide-popular"><img src={plan2} alt="" /></SwiperSlide>
              <SwiperSlide className="slide-popular"><img src={plan} alt="" /></SwiperSlide>
              <SwiperSlide className="slide-popular"><img src={plan4} alt="" /></SwiperSlide>
            </Swiper>
            <div className="btns-swiper">
              <div className="swiper-button-next"><AiOutlineArrowLeft /></div>
              <div className="swiper-button-prev"><AiOutlineArrowRight /></div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="container popular-brands">
          <p className="name-section">
            Populyar Məhsullar
          </p>
          <p className="desc-section">
            Siz özünüzə uyğun populyar məhsulları seçib sərfəli qiymətə ala bilərsiniz!
          </p>

          <div className="popular-carousel">
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={50}
              slidesPerView={4}
              loop={true}
              navigation={{
                nextEl: '.swiper-button-next2',
                prevEl: '.swiper-button-prev2',
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
              {data?.map(x => (
                <SwiperSlide className="slide-product">
                  <a href="">
                    <div className="image-product">
                      <img src={x.img} alt="" />
                    </div>
                    <div className="name-and-rating">
                      <span className="name">{x.name}</span>
                      <div className="rating"> <AiOutlineStar className="star" /> {x.rating}</div>
                    </div>

                    <div className="price">{x.price}</div>
                  </a>
                </SwiperSlide>
              ))}

            </Swiper>
            <div className="btns-swiper">
              <div className="swiper-button-next2"><AiOutlineArrowLeft /></div>
              <div className="swiper-button-prev2"><AiOutlineArrowRight /></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home