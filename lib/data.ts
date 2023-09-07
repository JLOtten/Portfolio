import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import codersboostImg from "@/public/Codersboost.png";
import githubgalleryImg from "@/public/githubrepogallery.png";
import guessthewordImg from "@/public/guessthewordgame.png";
import stickynotesImg from "@/public/stickynotes.png";
import vaccinemanagerImg from "@/public/vaccinemanager.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

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

export const projectsData = [
  {
    title: "Coder's Boost",
    description:
      "A full-stack responsive web app that uses AI to generate encouragements and images for aspiring coders.",
    tags: ["Python", "JavaScript", "Bootstrap", "DALL-E 2", "OpenAI API", "SQL", "OAuth"],
    imageUrl: codersboostImg,
  },
  {
    title: "My Vaccine Manager",
    description:
      "A complete case study (using a prototype), that allows users to log and easily export a vaccine record for a user and their family.",
    tags: ["Prototyping", "Wireframing", "UX Research", "Figma"],
    imageUrl: vaccinemanagerImg,
  },
  {
    title: "GitHub Repo Gallery",
    description:
      "A gallery for my GitHub Repos that is searchable, dynamic and easy to use.",
    tags: ["JavaScript", "Responsiveness", "GitHub API", "HTML5", "CSS3"],
    imageUrl: githubgalleryImg,
  },
  {
    title: "Guess the Word Game",
    description:
      "A fun interactive web app for playing a game to guess a word that is selected from an API.",
    tags: ["JavaScript", "DOM Manipulation", "GitHub", "API"],
    imageUrl: guessthewordImg,
  },
  {
    title: "Sticky Notes App",
    description:
      "A react app that allows users to create digital sticky notes that are filtered by a search of the title or description.",
    tags: ["React", "JSX", "Props", "Components"],
    imageUrl: stickynotesImg,
  },
] as const;

export const skillsData = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "React",
  "TypeScript",
  "Next.js",
  "Rest API",
  "Git/Github",
  "Tailwind",
  "Framer Motion",
  "Adobe XD",
  "Figma",
  "Canva",
  "User Research",
  "Wireframing",
  "Prototyping",
  "Responsive Design",
  "UX/UI Design",
  "Bootstrap",
  "PostgreSQL",
  "Python",
  "Flask/Jinja",
  
] as const;