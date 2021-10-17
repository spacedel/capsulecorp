import React from 'react';
import '../Gallery.css';

function Gallery() {
    return (
      <>
        <div className="common-container">
          <div className="container">
            <div class="header">
              <h1>Gallery</h1>
              <p>Capsules</p>
            </div>
            <div class="row">
              <div class="column">
                <img src="./images/img-1.png" width="100%" alt="..."></img>
                <img src="./images/img-1.png" width="100%" alt="image"></img>
                <img src="./images/img-1.png" width="100%" alt="image"></img>
                <img src="./images/img-1.png" width="100%" alt="image"></img>
              </div>
              <div class="column">
                <img src="./images/img-1.png" width="100%" alt="image"></img>
                <img src="./images/img-1.png" width="100%" alt="image"></img>
                <img src="./images/img-1.png" width="100%" alt="image"></img>
                <img src="./images/img-1.png" width="100%" alt="image"></img>
              </div>
              <div class="column">
                <img src="./images/img-1.png" width="100%" alt="image"></img>
                <img src="./images/img-1.png" width="100%" alt="image"></img>
                <img src="./images/img-1.png" width="100%" alt="image"></img>
                <img src="./images/img-1.png" width="100%" alt="image"></img>
              </div>
              <div class="column">
                <img src="./images/img-1.png" width="100%" alt="image"></img>
                <img src="./images/img-1.png" width="100%" alt="image"></img>
                <img src="./images/img-1.png" width="100%" alt="image"></img>
                <img src="./images/img-1.png" width="100%" alt="image"></img>
              </div>
            </div>
          </div>
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
      </>
    );
}

export default Gallery;
