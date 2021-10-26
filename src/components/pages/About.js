import React from 'react';
import '../About.css';
import Newsletter from '../Newsletter';

function About() {
    return (
        <>
            <div className='common-container'>
              <div className='mb-4 mb-lg-5 container'>
                <img src='./images/capsules.png' className='plate-img' width='100%' height='800px' alt='capsulecorp'></img>
              </div>
              <div className='px-4 mt-md-4 container'>
                <div className='mb-5 row'>
                  <div className='col'>
                    <div className='mb-4 row'>
                      <h3 className='about-header'>Welcome to Capsule Corp.</h3>
                      <div className='col'>
                      <p>
                        Items such as vehicles, houses, and refrigerators are stored within capsules. Some may contain other items increasing the capsule's convenience and utility as a storage device (portable shelters and vehicles which could also contain emergency supplies. Comforts like kitchens, baths and restroom facilities). Ideal from a logistical standpoint, they allow for the easy transportation of large numbers of materials.
                      </p>
                      </div>
                      <div className='my-lg-auto col-lg-4 col-12 offset-lg-1'>
                        <div className='common-container'>
                          <img src='./images/capsule-instruct.png' className='capsule-instruct' width='300px' height='200px' alt='capsule'></img>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='px-4 mt-md-4 container'>
                <div className='mb-5 row'>
                  <div className='col'>
                    <div className='mb-4 row'>
                      <h3 className='mission-header'>Mission</h3>
                      <div className='col'>
                        Our mission is to improve the lives of many who need it. Capsules are distributed online and accessed across Earth via Opensea, although the pricing varies depending on what it contains. It is possible to have an object adapted to turn into a capsule.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='px-4 mt-md-4 container'>
                <div className='mb-5 row'>
                  <div className='col'>
                    <div className='mb-4 row'>
                      <h3 className='mission-header'>Specs</h3>
                      <div className='col'>
                      <p>
                        Each Capsule is unique and programmatically generated to create traits including Color, Type, Weight, Expiration, Number and more. All capsules are inspired by DBZ, some are rarer than others. The Capsules are stored as ERC-721 tokens on the Ethereum blockchain and hosted on IPFS. You will need a metamask wallet to purchase!
                      </p>
                      </div>
                      <div className='my-lg-auto col-lg-4 col-12 offset-lg-1'>
                        <div className='common-container'>
                          <img src='./images/prototype-capsule.png' className='prototype-capsule' width='300px' height='300px' alt='capsule'></img>
                        </div>
                        <p className='prototype-label'>Prototype ver. 1 </p>
                      </div>
                      
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
                        <a href="https://www.instagram.com/_thecapsulecorporation">
                          <i class="fab fa-instagram"></i>
                        </a>
                        <a href="https://twitter.com/cryptosauce6">
                          <i class="fab fa-twitter"></i>
                        </a>
                      </div>
                      <div class="text-lg-right col-sm-12">
                        <p class="copyright text-right">
                          <span class="copy-left">© 2021 CapsuleCorp</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
              
            </div>
        </>
    );
}

export default About;