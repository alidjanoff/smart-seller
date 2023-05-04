import { Link } from "react-router-dom"
import { useEffect } from "react";
//data
import data from "../db/fakeData"

//icons
import { BsFillTelephoneForwardFill } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai'
import { FaLocationArrow } from 'react-icons/fa'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'

//img
import plan from '../assets/img/amico2.png'
import plan4 from '../assets/img/amico.png'
import plan2 from '../assets/img/rafiki.png'
import plan3 from '../assets/img/pana.png'
import about from '../assets/img/about.png'



const Home = () => {
  return (
    <div>
      <div id="why" className="container mt-5">
        <div className="section-header">
          <h1>
            Why Choose Us
          </h1>
        </div>

        <div className="row choose-us mt-5">
          {data.map(item => (
            item.chooseUs.map(x => (
              <div data-aos="fade-up" key={x.id} className="choose-item">
                <img src={x.img} alt="" />
                <strong>{x.name}</strong>
                <p className="choose-desc">{x.desc}</p>

                <Link to='' className="start-link">
                  <button>Get started</button>
                </Link>
              </div>
            ))
          ))}
        </div>
      </div>

      <div className="container mt-5">
        <div className="section-header">
          <h1>
            Our Future Plans
          </h1>
        </div>

        <div className="row plans">
          <div className="col-6 img-plans" >
            <img src={plan4} alt="" />
          </div>
          <div className="col-6 desc-plans">
            <h1>To improve the user experience, add new features</h1>
            <p className="plans-title">
              Lorem ipsum dolor sit amet consectetur. Tortor quis sed arcu pulvinar morbi egestas id gravida euismod.
            </p>
          </div>
        </div>

        <div className="row plans mt-5">
          <div  className="col-6 desc-plans">
            <h1>Offer discounts and promotional offers to customers</h1>
            <p className="plans-title">
              Lorem ipsum dolor sit amet consectetur. Tortor quis sed arcu pulvinar morbi egestas id gravida euismod.
            </p>
          </div>
          <div  className="col-6 img-plans">
            <img src={plan2} alt="" />
          </div>
        </div>

        <div className="row plans mt-5">
          <div  className="col-6 img-plans">
            <img src={plan3} alt="" />
          </div>
          <div className="col-6 desc-plans">
            <h1>Add a mobile version of the platform</h1>
            <p className="plans-title">
              Lorem ipsum dolor sit amet consectetur. Tortor quis sed arcu pulvinar morbi egestas id gravida euismod.
            </p>
          </div>
        </div>

        <div className="row plans mt-5">
          <div  className="col-6 desc-plans">
            <h1>Add a mobile version of the platform</h1>
            <p className="plans-title">
              Lorem ipsum dolor sit amet consectetur. Tortor quis sed arcu pulvinar morbi egestas id gravida euismod.
            </p>
          </div>

          <div  className="col-6 img-plans">
            <img src={plan4} alt="" />
          </div>
        </div>

        <div className="row plans mt-5">
          <div  className="col-6 img-plans">
            <img src={plan} alt="" />
          </div>
          <div  className="col-6 desc-plans">
            <h1>Analyze user data and database statistics to offer more effective recommendations.</h1>
            <p className="plans-title">
              Lorem ipsum dolor sit amet consectetur. Tortor quis sed arcu pulvinar morbi egestas id gravida euismod.
            </p>
          </div>
        </div>
      </div>

      <div id="about" className="container mt-5">
        <div className="section-header">
          <h1>
            About Us
          </h1>
        </div>

        <div className="row plans mt-2">
          <div  className="col-6 img-plans">
            <img src={about} alt="" />
          </div>
          <div  className="col-6 desc-plans">
            <p className="about-title">
              Our project offers a service that helps customers easily find the products they are looking for, thereby saving their time and energy. This also means e-commerce businesses can save on advertising costs.
            </p>
          </div>
        </div>
      </div>

      <div id="contact" className="container mt-5 mb-5">
        <div className="row contact">
          <div className="col-5 left-contact">
            <p className="header-contact">Contact Information</p>
            <p>
              Fill up there form and our team will get back to you within 24 hours
            </p>

            <div className="contacts">
              <a href="tel:0555555555">
                <BsFillTelephoneForwardFill /> 0555555555
              </a>

              <a href="mailto:test@mail.ru">
                <AiOutlineMail /> test@mail.ru
              </a>

              <a href="">
                <FaLocationArrow /> Baku c
              </a>

              <div className="social">
                <a href="">
                  <FaFacebookF />
                </a>
                <a href="">
                  <FaInstagram />
                </a>
                <a href="">
                  <FaTwitter />
                </a>
              </div>
            </div>
          </div>

          <div className="col-7 right-contact">
            <form className="contact-form" action="">
              <div className="line-1">
                <input placeholder="Your name" type="text" />
                <input placeholder="Your surname" type="text" />
              </div>

              <div className="line-1">
                <input placeholder="Email" type="email" />
                <input placeholder="Your phone" type="text" />
              </div>

              <div className="line-1">
                <textarea placeholder="Your message" name="" id="" ></textarea>
              </div>

              <div className="line-2">
                <button>Send message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home