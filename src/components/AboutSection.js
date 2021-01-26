import React from 'react';
import home1 from '../img/home1.png';
import { About, Desctiption, Image, Hide } from '../styles';

//Framer Motion
import { motion } from 'framer-motion';
import { titleAnim, fade, photoAnim } from '../animation';
import Wave from './Wave';

const AboutSection = () => {
  return (
    <About>
      <Desctiption>
        <motion.div className='title'>
          <Hide>
            <motion.h2 variants={titleAnim}>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              your <span>dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>true.</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          Contact us for any photography or videography ideas that you have. We
          have profesionals with amaizing skills.
        </motion.p>
        <motion.button variants={fade}>Contact Us</motion.button>
      </Desctiption>
      <Image>
        <motion.img
          variants={photoAnim}
          // initial='hidden'
          // animate='show'
          src={home1}
          alt='guy with a camera'
        />
      </Image>
      <Wave />
    </About>
  );
};

export default AboutSection;
