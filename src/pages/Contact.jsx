import React from 'react'

//icons
import {BsTelephone} from "react-icons/bs";
import {CiMail, CiLocationOn} from "react-icons/ci";
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

export const Contact = () => {
    return (
        <div>
            <div className="header-contact">
                <h1>Bizimlə əlaqə</h1>
                <p>Sizinlə əlaqə saxlaya bilmək üçün aşağıdakı məlumatları doldurun.</p>
            </div>

            <div className="container-fluid">
                <div className="information">
                    <div className="info-1">
                        <h1>Contact information</h1>
                        <p>Fill up there form and our team will get back to you within 24 hours</p>
                    </div>
                    <div className="info-2">
                        <div className="info-inner">
                          <BsTelephone/>  <a href="tel:+555555555">99455xxxxxxxxx</a>
                        </div>
                        <div className="info-inner">
                         <CiMail/>   <a href="mailto:sfjcsdcj@fvd.ru">xxxxx@gmail.com</a>
                        </div>
                        <div className="info-inner">
                          <CiLocationOn/>  <a href="">Baku c. Khatai</a>
                        </div>
                    </div>

                    <div className="info-3">
                        <a href="">
                            <FaFacebookF/>
                        </a>
                        <a href="">
                            <FaInstagram/>
                        </a>
                        <a href="">
                            <FaTwitter/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
