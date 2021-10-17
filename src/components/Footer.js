import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="footer">
      <div className="container-fluid foot-line">
        <div className="row mx-0 footer-padding">
          <div className="col-12 col-lg-4 order-lg-first my-lg-auto">
            <div className="email-container">
              <span className="span-label">
                Joooin Usss...Get on the list now!
              </span>
              <br></br>
              <div className="d-flex email-flex">
                <br></br>
                <form
                  id="email-submit"
                  method="post"
                  name="mc-embedded-subscribe-form"
                  target="_blank"
                  className="email-form"
                >
                  <input
                    id="email-address"
                    className="m-0 email-input-text"
                    placeholder="Enter Email Address here"
                    name="EMAIL"
                    required
                    value
                  ></input>
                  <div aria-hidden="true">
                    <button
                      name="subscribe"
                      className="email-submit"
                      type="submit"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4 order-first">
            <img
              className="img-fluid footer-logo"
              src="./images/logo.png"
              width="100px"
              height="100px"
              alt="logo"
            ></img>
          </div>
          <div className="order-last my-auto text-center col-lg-4 col-sm-12 col-12">
            <div className="row">
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
