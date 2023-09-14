import React from "react";
import codersboostImg from "@/public/codersboost.png";
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
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const projectsData = [
  {
    title: "Coder's Boost",
    description:
      "A full-stack responsive web app that uses AI to generate encouragements and images for aspiring coders.",
    tags: [
      "Python",
      "JavaScript",
      "Bootstrap",
      "DALL-E 2",
      "OpenAI API",
      "SQL",
      "OAuth",
    ],
    imageUrl: codersboostImg,
    url: "https://codersboost.com/",
  },
  {
    title: "My Vaccine Manager",
    description:
      "A complete case study (using a prototype), that allows users to log and easily export a vaccine record for a user and their family.",
    tags: ["Prototyping", "Wireframing", "UX Research", "Figma"],
    imageUrl: vaccinemanagerImg,
    url: "https://www.figma.com/proto/yFxHCoy9zMpXZ9kqC4u59a/Vaccine-Manager?node-id=78-377&starting-point-node-id=78%3A377&scaling=scale-down&mode=design&t=trXycMAazTZo2r6L-1",
  },
  {
    title: "GitHub Repo Gallery",
    description:
      "A gallery for my GitHub Repos that is searchable, dynamic and easy to use.",
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
      "A react app that allows users to create digital sticky notes that are filtered by a search of the title or description.",
    tags: ["React", "JSX", "Props", "Components"],
    imageUrl: stickynotesImg,
    url: "https://codesandbox.io/s/sticky-note-app-forked-3n32nf",
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
