import React from "react";
import codersboostImg from "@/public/compressed-codersboost.png";
import githubgalleryImg from "@/public/compressed-githubrepogallery.png";
import guessthewordImg from "@/public/compressed-guess-the-word-game.png";
import stickynotesImg from "@/public/compressed-stickynotes.png";
import vaccinemanagerImg from "@/public/compressed-vaccinemanager.png";

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
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const projectsData = [
  {
    title: "Coder's Boost",
    description:
      "A full-stack responsive web app that filters a SQL database of AI-generated encouragements for aspiring coders. ",
    tags: ["Python", "JavaScript", "Bootstrap", "DALL-E 2", "OpenAI API", "SQL", "OAuth",],
    imageUrl: codersboostImg,
    url: "https://codersboost.com/",
  },
  {
    title: "My Vaccine Manager",
    description:
      "A complete UX case study (including a prototype), that allows users to log and easily export a vaccine record for a user and their family.",
    tags: ["Prototyping", "Wireframing", "UX Research", "Figma"],
    imageUrl: vaccinemanagerImg,
    url: "https://docs.google.com/presentation/d/1Z25t69QKy7027zVWrYj2u79Ln89kz1jd9YaOO4Nyh7Q/edit?usp=sharing",
  },
  {
    title: "GitHub Repo Gallery",
    description:
      "A gallery for each of my GitHub Repos (using GitHub's API) that is searchable, dynamic and easy to use.",
    tags: ["JavaScript", "Responsiveness", "GitHub API", "HTML5", "CSS3"],
    imageUrl: githubgalleryImg,
    url: "https://jlotten.github.io/github-repo-gallery-main/",
  },
  {
    title: "Guess the Word Game",
    description:
      "A fun interactive web app for playing a game to guess a word that is selected from an API.",
    tags: ["JavaScript", "DOM Manipulation", "GitHub", "API"],
    imageUrl: guessthewordImg,
    url: "https://jlotten.github.io/guess-the-word/",
  },
  {
    title: "Sticky Notes App",
    description:
      "A react app that allows users to add, edit, search for and delete digital sticky notes. Data for the notes is stored in local storage.",
    imageUrl: stickynotesImg,
    tags: ["JSX", "ES6", "React", "DOM Manipulation", "Local Storage"],
    url: "https://csb-3n32nf-7grkiqtfg-jlotten.vercel.app/",
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
  "Git/GitHub",
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
