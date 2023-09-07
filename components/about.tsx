"use client";

import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './section-heading';
import { useSectionInView } from '@/lib/hooks';

export default function About() {
  const { ref } = useSectionInView('About');

  return (
  <motion.section
    ref={ref}
    className="mc-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
    initial={{ opacity:0, y: 100 }}
    animate={{ opacity:1, y: 0 }}
    transition={{ delay: 0.125 }}   
    id="about"
    >
    <SectionHeading>About Me</SectionHeading>

    <p className='mb-3'>
    I'm a fun and curious learner with a background in <span className='font-medium'>Education</span>.
    I enjoyed over 10 years teaching high school, elementary and adults math, science and English as a Second Language. 
    As a parent during pandemic distance learning, I had some great user experiences with ed. tech. 
    I was inspired to use many of those applications in my own classroom when we returned to in-person learning.    
    </p>
   
    <p>
    I made a <span className='italic'>brave</span> choice to enroll in a bootcamp and learned {" "}<span className='font-medium'>full-stack
    web development</span>. Through daily remote pair programming, I learned{" "}<span className='underline'>Python, PostgreSQL and
    Bootstrap</span>. Following that, I received a scholarship to earn a <span className='font-medium'>Google UX Design Certification</span>, 
    where I used <span className='underline'>Figma, AdobeXD and UX Research & Design principles</span>. I simultanesously completed a front-end program, 
    to deepen my knowledge of front-end languages and frameworks like <span className='underline'>React, Next.js and Tailwind</span>. 
    {" "}<span className='italic'>When I'm not learning new technologies or coding,</span> I'm likely walking my dogs or cheering at my kids' 
    sports events. I am currently looking for a{" "}<span className="font-medium">full-time </span> position as a{" "}<span className="font-medium"> software
    developer</span>.
    </p>
  </motion.section>
    );
}
