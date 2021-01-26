import React from 'react';
import home1 from '../img/home1.png';

//Styles
// import styled from 'styled-components';
import { About, Desctiption, Image, Hide } from '../styles';

const AboutSection = () => {
  return (
    <About>
      <Desctiption>
        <div className='title'>
          <Hide>
            <h2>We work to make</h2>
          </Hide>
          <Hide>
            <h2>
              your <span>dreams</span> come
            </h2>
          </Hide>
          <Hide>
            <h2>true.</h2>
          </Hide>
        </div>
        <p>
          Contact us for any photography or videography ideas that you have. We
          have profesionals with amaizing skills.
        </p>
        <button>Contact Us</button>
      </Desctiption>
      <Image>
        <img src={home1} alt='guy with a camera' />
      </Image>
    </About>
  );
};



export default AboutSection;
