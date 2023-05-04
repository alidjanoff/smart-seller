import React from 'react'
import { Link } from 'react-router-dom';

// icons

import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'


// fakedata
import data from "./../db/fakeData";


const Footer = () => {
  return (
    <div className='footer-container'>
      <div className="container">
        <div className="row footer-row">
          <div className="col-3 footer-col">
            <p className="header-col">
              About us
            </p>

            <ul>
              {
                data.map(item => (
                  item.footerOne.map(x => (
                    <li key={x.id}>
                      <Link className='footer-link' to={x.to}>
                        {x.item}
                      </Link>
                    </li>
                  ))
                ))
              }
            </ul>
          </div>
          <div className="col-3">
            <p className="header-col">
              Help
            </p>

            <ul>
              {
                data.map(item => (
                  item.footerOne.map(x => (
                    <li key={x.id}>
                      <Link className='footer-link' to={x.to}>
                        {x.item}
                      </Link>
                    </li>
                  ))
                ))
              }
            </ul>
          </div>
          <div className="col-3">
            <p className="header-col">
              Contact
            </p>

            <ul>
              {
                data.map(item => (
                  item.footerOne.map(x => (
                    <li key={x.id}>
                      <Link className='footer-link' to={x.to}>
                        {x.item}
                      </Link>
                    </li>
                  ))
                ))
              }
            </ul>
          </div>
        </div>

        <div className="row footer-bottom">
          <span>
            © 2023  Privacy · Terms · Sitemap
          </span>

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
    </div>
  )
}

export default Footer