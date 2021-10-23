import React from 'react';
import '../Shop.css';
import '../Button.css';
import Newsletter from '../Newsletter';

function Shop() {
    return (
        <>
            <div className='common-container'>
              < div className='mb-4 mb-lg-5 container'>
                <img src='./images/capsule-corporation.png' className='capsulecorp' width='100%' height='600px' alt='capsulecorp'></img>
              </div>
              <div className='px-4 mt-md-4 container'>
                <div className='mb-5 row'>
                  <div className='mb-4 row'>
                    <div className='col'>
                      CPSL is a collection of 1000 Capsules; 10 of each kind. It is a unique NFT digital collectible on the Ethereum blockchain produced by CapsuleCorp.
                    </div>
                    <div className='my-lg-auto col-12 offset-lg-1'>
                      <div className='common-container'>
                        <img src='./images/img-1.png' className='capsule' width='200px' height='200px' alt='capsule'></img>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='shop-container'>
              <button className='shop-button'><a href='https://opensea.io/collection/capsule-corp' className='buy-button-style'>Buy a Capsule on Opensea!</a></button>
              <div className='shop-info'>To obtain a Capsule, check out the CapsuleCorp. collection on Opensea</div>
              <div className='shop-nft'>Buy an NFT Now</div>
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

            {/* <div class="col-1">
              1 of 3
            </div>
            <div class="">
              To obtain a Capsule, check out the CapsuleCorp. collection on Opensea 
            </div> */}
          
        </>
    );
}

export default Shop;
