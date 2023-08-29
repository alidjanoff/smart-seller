import React from 'react'
import { Link } from 'react-router-dom';

// icons

import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import { BsTelephone } from 'react-icons/bs';

// fakedata
import { fakeFooter } from '../db/fakeFooter';

const Footer = () => {
  return (
    <>
      <div className='container-fluid footer-container'>
        <div className="container foot-1">
          <div className="footer-name">
            <span className='f-1'>Smart</span><span className='f-2'>Sale</span>
          </div>

          <div className="rules">
            <div className="rule-1">
              <Link className='menu-1'>Istifade qaydalari</Link>
            </div>

            <div className="rule-2">
              <a href="tel:+99455xxxxxxx">
                <BsTelephone />  +99455xxxxxxxx
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid footer-container-2">
        <div className="container foot-2">
          <div className="copyright">Copyright © SmartSale® Foundry</div>
          <div className="social">
            <a href='' className="social-item">
              <FaFacebookF/>
            </a>

            <a href='' className="social-item">
              <FaInstagram/>
            </a>

            <a href='' className="social-item">
              <FaTwitter/>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer