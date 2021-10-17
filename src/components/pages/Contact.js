import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../Footer.css';
import '../Contact.css';

function Contact() {
  
  return (
    <>
      <div className="common-container">
        <div className="mb-4 mb-lg-5 container">
          <img
            src="./images/capsule-corp-night.png"
            width="100%"
            height="600px"
            alt="capsulecorp"
          ></img>
        </div>
        <div className="contact-container">
          <div className="contact-info">
            <div className="left-side">
              <h3></h3>
            </div>
            <div className="right-side">
              <h2 className='contact-us'>Contact Us</h2>
              <input type="text" className="field-name" placeholder="Name"></input>
              <input type="email" className="field-email" placeholder="Email"></input>
              <textarea className="field-message" placeholder="Message"></textarea>
            </div>
          </div>
          {/* <img src="./images/Capsule-corp-night.png" width="100%" height="600px" alt="capsulecorp">
            </img> */}
        </div>
        <div className="footer">
          <div className="container-fluid foot-line">
            <div className="row mx-0 footer-padding">
              <div className="col-12 col-lg-4 order-lg-first my-lg-auto">
                <div className="email-container">
                  <span className="span-label">
                    Join Us! Get on the list now!
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
                  <div className="text-lg-right col-sm-12">
                    <a href="https://www.instagram.com/spacedel">
                      <i class="fab fa-instagram"></i>
                    </a>
                    <a href="https://twitter.com/cryptosauce6">
                      <i class="fab fa-twitter"></i>
                    </a>
                  </div>
                  <div class="text-lg-right col-sm-12">
                    <p class="copyright text-right">
                      <span class="copy-left">© 2021 CapsuleCorp LLC</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="common-container">
        <div className="mb-4 mb-lg-5 container">
        </div>
      </div> */}
    </>
  );
}

export default Contact;