import htmlLogo from "./Images/logo-html.png";
import cssLogo from "./Images/logo-css.png";
import jsLogo from "./Images/logo-js.png";
import tsLogo from "./Images/logo-typescript.png";
import sassLogo from "./Images/logo-scss.png";
import reactLogo from "./Images/logo-react.png";

import horrorMovies from "./Images/css-horror.webp";
import rodicDavidson from "./Images/css-rodic.webp";
import schwartz from "./Images/css-schwartz.webp";
import tolv from "./Images/css-tolv.webp";
import zoo from "./Images/css-zoo.webp";

import momentum from "./Images/js-momentum.webp";
import nike from "./Images/js-nike.webp";
import donica from "./Images/js-donica.webp";

import cryptoTracker from "./Images/react-cryptotracker.webp";
import dnd from "./Images/react-dnd.webp";
import netflix from "./Images/react-netflix.webp";
import portfolio from "./Images/react-portfolio.webp";
import ridibooks from "./Images/ridibooks.webp";

interface iPortfolioData {
  isPublished: boolean;
  category: "CSS" | "Vanila JS" | "React JS";
  id: number;
  name: string;
  stacks: string[];
  github: string;
  website: string;
  thumbnail: string;
}

export const portfolioData: iPortfolioData[] = [
  {
    isPublished: true,
    category: "CSS",
    id: 1001,
    name: "RDA Clone",
    stacks: [htmlLogo, cssLogo, sassLogo],
    github:
      "https://github.com/KeMezz/rodic-davidson-architects_clone.github.io",
    website:
      "https://kemezz.github.io/rodic-davidson-architects_clone.github.io/",
    thumbnail: rodicDavidson,
  },
  {
    isPublished: true,
    category: "CSS",
    id: 1002,
    name: "Best Horror Movies Clone",
    stacks: [htmlLogo, cssLogo, sassLogo],
    github: "https://github.com/KeMezz/horror-movies-clone.github.io",
    website: "https://kemezz.github.io/horror-movies-clone.github.io/",
    thumbnail: horrorMovies,
  },
  {
    isPublished: true,
    category: "CSS",
    id: 1003,
    name: "Zoo Clone",
    stacks: [htmlLogo, cssLogo, sassLogo],
    github: "https://github.com/KeMezz/zoo-clone.github.io",
    website: "https://kemezz.github.io/zoo-clone.github.io/",
    thumbnail: zoo,
  },
  {
    isPublished: true,
    category: "CSS",
    id: 1004,
    name: "Tolv Clone",
    stacks: [htmlLogo, cssLogo, jsLogo],
    github: "https://github.com/KeMezz/tolv_clone.github.io",
    website: "https://kemezz.github.io/tolv_clone.github.io/",
    thumbnail: tolv,
  },
  {
    isPublished: true,
    category: "CSS",
    id: 1005,
    name: "Schwartzmedia Clone",
    stacks: [htmlLogo, cssLogo, sassLogo, jsLogo],
    github: "https://github.com/KeMezz/schwartzmedia.github.io",
    website: "https://kemezz.github.io/schwartzmedia.github.io/",
    thumbnail: schwartz,
  },
  {
    isPublished: true,
    category: "Vanila JS",
    id: 2001,
    name: "Momentum Clone",
    stacks: [htmlLogo, cssLogo, jsLogo],
    github: "https://github.com/KeMezz/momentum_clone.github.io",
    website: "https://kemezz.github.io/momentum_clone.github.io/",
    thumbnail: momentum,
  },
  {
    isPublished: true,
    category: "Vanila JS",
    id: 2002,
    name: "Nike Clone",
    stacks: [htmlLogo, cssLogo, jsLogo, sassLogo],
    github: "https://github.com/KeMezz/nike-clone.github.io",
    website: "https://kemezz.github.io/nike-clone.github.io/",
    thumbnail: nike,
  },
  {
    isPublished: true,
    category: "Vanila JS",
    id: 2003,
    name: "Donica Ida Clone",
    stacks: [htmlLogo, cssLogo, jsLogo, sassLogo],
    github: "https://github.com/KeMezz/donica-clone.github.io",
    website: "https://kemezz.github.io/donica-clone.github.io/",
    thumbnail: donica,
  },
  {
    isPublished: true,
    category: "React JS",
    id: 3001,
    name: "Crypto Tracker",
    stacks: [reactLogo, tsLogo],
    github: "https://github.com/KeMezz/crypto-tracker-rebuild",
    website: "https://kemezz.github.io/crypto-tracker-rebuild/",
    thumbnail: cryptoTracker,
  },
  {
    isPublished: true,
    category: "React JS",
    id: 3002,
    name: "Netflix Clone",
    stacks: [reactLogo, tsLogo],
    github: "https://github.com/KeMezz/netflix-clone",
    website: "https://kemezz.github.io/netflix-clone/",
    thumbnail: netflix,
  },
  {
    isPublished: true,
    category: "React JS",
    id: 3003,
    name: "Trello Clone",
    stacks: [reactLogo, tsLogo],
    github: "https://github.com/KeMezz/dragndrop-todo",
    website: "https://kemezz.github.io/dragndrop-todo/",
    thumbnail: dnd,
  },
  {
    isPublished: true,
    category: "React JS",
    id: 3004,
    name: "Portfolio Website",
    stacks: [reactLogo, tsLogo],
    github: "https://github.com/KeMezz/portfolio-website",
    website: "https://kemezz.github.io/portfolio-website/",
    thumbnail: portfolio,
  },
  {
    isPublished: false,
    category: "React JS",
    id: 3005,
    name: "RIDIPAPER Clone",
    stacks: [reactLogo, tsLogo],
    github: "",
    website: "",
    thumbnail: ridibooks,
  },
];
