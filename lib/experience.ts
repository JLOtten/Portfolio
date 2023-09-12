//add this to data.ts file if you want to add an experience section to your portfolio
import React from 'react';

export const experiencesData = [
    {
      title: "Google UX Design Certificate, RISE Scholarship: The Mom Project",
      location: "Remote",
      description:
        "Completed the comprehensive 6 month Google UX Design Certification, using Figma and Adobe XD to result in 3 complete UX Case Studies.",
      icon: React.createElement(LuGraduationCap),
      date: "Feb-Aug 2023",
    },
    {
      title: "Skill crush Front-End Development Training",
      location: "Remote",
      description:
        "Completed a front-end specialist training program focusing on HTML5, CSS3, JavaScript and React fundamentals.",
      icon: React.createElement(CgWorkAlt),
      date: "Jan-Aug 2023",
    },
    {
      title: "Hackbright Academy Full-Stack Software Engineering Bootcamp",
      location: "SanFrancisco, CA/Remote",
      description:
        "Completed a 3 month, intensive, pair-programming full-stack Software Engineering program focused on Python, PostgreSQL, Flask/Jinja and Bootstrap 5.",
      icon: React.createElement(FaReact),
      date: "Aug-Dec 2022",
    },
    {
      title: "Teacher, (Currently Certified in CA: World Languages:ELD and Biological Sciences)",
      location: "Richmond, CA/ Minneapolis, MN/ New Orleans, LA",
      description:
        "Taught H.S. Biology and Math, Elementary and Adult English as a Second Language.",
      icon: React.createElement(FaReact),
      date: "Aug 2008-Aug 2022",
    },
  ] as const;

  //add these imports to data.ts if you want to add the experience section to your portfolio
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
