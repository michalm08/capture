

import React from 'react';

//Animations
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';

const ContactUs = () => {
  return (
    
<motion.div
      variants={pageAnimation}
      initial='hidden'
      animate='show'
      exit='exit'
      style={{ background: '#fff' }}
    >
      <h1>Our contact</h1>
    </motion.div>
  );
};



export default ContactUs;
//     //z kontakt jest cos nie tak
//     // jak na nie wejde to nie moge przejsc na inne karty
//     // i nie wyswietla nie trec jego