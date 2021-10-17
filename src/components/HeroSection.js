import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      {/* <img src='./images/capsule-corp-building.png' className='capsule-building' width='100%' height='auto' /> */}
      <h1>CapsuleCorp.</h1>
      <p>Everything you need in a compact size</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
      </div>
      
    </div>
    
    
  );
}

export default HeroSection;
