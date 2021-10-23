import React from 'react';
import '../Gallery.css';
import Newsletter from '../Newsletter';

function Gallery() {
    return (
      <>
        <div className="common-container">
          <div className="container">
            <div className="header">
              <h1>Gallery</h1>
              <p>Capsules</p>
            </div>
            <div className="row">
              <div className="column">
                <img src="https://ipfs.io/ipfs/QmapsA1K5zn7g9TLPUEZuXxabaw8c6pnSUcUjCkdi2Hj3c" width="100%" alt="1000"></img>
                <img src="https://ipfs.io/ipfs/QmZ2esqdjswcnFZyJQ9U92DTZigNU3dTGVh1mCpXH8QgJh" width="100%" alt="999"></img>
                <img src="https://ipfs.io/ipfs/QmaxrNAe5D3uTKahK4dwAXC92kBTrpoAHpJz9tDftSCXFb" width="100%" alt="998"></img>
                <img src="https://ipfs.io/ipfs/Qmdec8ugTK8QRtNoraVCZHXGkH4XMQfUjSPHBb2kY4YMXi" width="100%" alt="997"></img>
              </div>
              <div className="column">
                <img src="https://ipfs.io/ipfs/QmVjDAFXwKzp7ii6eUY6cCF1bhpZEDUoHnen1mAKBtZ2gE" width="100%" alt="996"></img>
                <img src="https://ipfs.io/ipfs/QmZZA4etkHHXtqpJHPf8XWdkLCsvyAy7uSawHBT5LaiUjB" width="100%" alt="995"></img>
                <img src="https://ipfs.io/ipfs/QmaD9V3pqfUEy8i8FbX47Ui7cX27VRigmL1RV6RDGc8hFY" width="100%" alt="994"></img>
                <img src="https://ipfs.io/ipfs/QmVetGyVPYhZEfRRE3uLfRwgp5B8z9wXmK9369qe2HrfJh" width="100%" alt="993"></img>
              </div>
              <div className="column">
                <img src="https://ipfs.io/ipfs/QmX7JGmj3ZHZy1vGMU1rNN88tFtDWYof4iTDia1B4jUPUh" width="100%" alt="992"></img>
                <img src="https://ipfs.io/ipfs/QmP5B6AgtuR45SoYBpcDSGb2txNAGXG7WaqZwGs4HPQg5L" width="100%" alt="991"></img>
                <img src="https://ipfs.io/ipfs/QmfKNPEToh3zY9ipuRzBwpue2NrPJTWFxw1GZyMFTG8re9" width="100%" alt="990"></img>
                <img src="https://ipfs.io/ipfs/QmQt2jHkaTXJhkEuy1JpWn8MK7YwZDXNTywokAREjMv2xW" width="100%" alt="989"></img>
              </div>
              <div className="column">
                <img src="https://ipfs.io/ipfs/Qmd3erkqG7pdbfWL6p1bZWheBvM9GjBevWQd7WUmxnyjS4" width="100%" alt="988"></img>
                <img src="https://ipfs.io/ipfs/QmdkXvgNMW3QZfJ4v5A3t2P7Epgj2fa1tB5GnTCYU946Fm" width="100%" alt="987"></img>
                <img src="https://ipfs.io/ipfs/QmNq8FPDWtjujnQ7jvDpNeUNMf6WxqaeDH6A2ED4wZQ42G" width="100%" alt="986"></img>
                <img src="https://ipfs.io/ipfs/QmRQyJgCTN92zg7xz24BvmCg949apwbUpX5FRbWnhrC4MG" width="100%" alt="985"></img>
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
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a href="https://twitter.com/cryptosauce6">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </div>
                  <div className="text-lg-right col-sm-12">
                    <p className="copyright text-right">
                      <span className="copy-left">© 2021 CapsuleCorp</span>
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
