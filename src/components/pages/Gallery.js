import React from 'react';
import '../Gallery.css';
import Newsletter from '../Newsletter';

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
                <img src="./images/capsule_variations/capsule_1000.png" width="100%" alt="1000"></img>
                <img src="./images/capsule_variations/capsule_999.png" width="100%" alt="999"></img>
                <img src="./images/capsule_variations/capsule_998.png" width="100%" alt="998"></img>
                <img src="./images/capsule_variations/capsule_997.png" width="100%" alt="997"></img>
              </div>
              <div class="column">
                <img src="./images/capsule_variations/capsule_996.png" width="100%" alt="996"></img>
                <img src="./images/capsule_variations/capsule_995.png" width="100%" alt="995"></img>
                <img src="./images/capsule_variations/capsule_994.png" width="100%" alt="994"></img>
                <img src="./images/capsule_variations/capsule_993.png" width="100%" alt="993"></img>
              </div>
              <div class="column">
                <img src="./images/capsule_variations/capsule_992.png" width="100%" alt="992"></img>
                <img src="./images/capsule_variations/capsule_991.png" width="100%" alt="991"></img>
                <img src="./images/capsule_variations/capsule_990.png" width="100%" alt="990"></img>
                <img src="./images/capsule_variations/capsule_989.png" width="100%" alt="989"></img>
              </div>
              <div class="column">
                <img src="./images/capsule_variations/capsule_988.png" width="100%" alt="988"></img>
                <img src="./images/capsule_variations/capsule_987.png" width="100%" alt="987"></img>
                <img src="./images/capsule_variations/capsule_986.png" width="100%" alt="986"></img>
                <img src="./images/capsule_variations/capsule_985.png" width="100%" alt="985"></img>
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
                  <Newsletter />
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
