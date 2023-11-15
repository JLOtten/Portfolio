"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.125 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>

      <p className="mb-3 text-left" style={{ textIndent: "1.5em" }}>

       Hi, I'm Jenna! I’m a <span className="font-medium">Software Engineer</span> focusing on frontend development, 
       with a background in education and specializing in accessible and responsive web apps. In my prior career 
       I enjoyed teaching math, science, and English as a second language to students from age 5 to 65. 
       I'm bringing effective communication, collaboration skills and ability to break down problems to any team that I join.
      </p>
        
      <p className="mb-3 text-left" style={{ textIndent: "1.5em" }}>
       During the pandemic, I discovered a passion for educational technology (as both a teacher and a parent) 
       and decided to pursue software engineering. I completed a <span className="">software engineering 
       bootcamp, obtained a Google UX Design Certification,</span> and enhanced my skills in {" "}
       <span className="underline">JavaScript, HTML, CSS, Python, PostgreSQL and React</span> while using tools like
       {" "}<span className="underline">Git & GitHub, VS Code, Figma, Adobe XD</span> and more. I'm dedicated to designing, 
       building and improving technology to simplify the lives of everyone, and
       have a particular empathy for parents, teachers and families.
      </p>

      <p className="text-left" style={{ textIndent: "1.5em"}}>
      When I'm not learning new technologies or coding, I'm likely walking my dogs
      or cheering at my kids' sports events. I am currently looking for a 
      full-time position as a Front-end or Full-Stack Developer.
      </p>
    </motion.section>
  );
}
