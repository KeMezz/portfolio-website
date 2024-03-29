import htmlLogo from "./Images/logo-html.png";
import cssLogo from "./Images/logo-css.png";
import jsLogo from "./Images/logo-js.png";
import tsLogo from "./Images/logo-typescript.png";
import sassLogo from "./Images/logo-scss.png";
import reactLogo from "./Images/logo-react.png";
import gatsbyLogo from "./Images/logo-gatsby.png";
import expressLogo from "./Images/logo-express.png";
import mongoLogo from "./Images/logo-mongo.webp";
import nextLogo from "./Images/logo-nextjs.svg";

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
import devblogs from "./Images/react-devblogs.png";
import twitter from "./Images/express-twitter.png";
import carrot from "./Images/next-carrot.png";
import nadoharu from "./Images/next-nadoharu.png";

interface iPortfolioData {
  isPublished: boolean;
  category: string;
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
    category: "Next.js",
    id: 16,
    name: "나도하루 마이크로 블로그",
    stacks: [reactLogo, tsLogo, nextLogo],
    github: "https://github.com/GuitarCoders/front",
    website: "http://nadoharu.duckdns.org/",
    thumbnail: nadoharu,
  },
  {
    isPublished: true,
    category: "Next.js",
    id: 15,
    name: "당근마켓 클론",
    stacks: [reactLogo, tsLogo, nextLogo],
    github: "https://github.com/KeMezz/carrot-market",
    website: "https://carrot-market-kemezz.vercel.app/",
    thumbnail: carrot,
  },
  {
    isPublished: true,
    category: "Gatsby.js",
    id: 14,
    name: "닷캐시 개발 블로그",
    stacks: [reactLogo, tsLogo, gatsbyLogo],
    github: "https://github.com/KeMezz/blog",
    website: "https://dotcache.netlify.app/blog/",
    thumbnail: devblogs,
  },
  {
    isPublished: true,
    category: "Express",
    id: 13,
    name: "트위터 클론",
    stacks: [expressLogo, mongoLogo, jsLogo, reactLogo],
    github: "https://github.com/KeMezz/twitter-clone-backend",
    website: "https://kemezz.github.io/twitter-clone-frontend",
    thumbnail: twitter,
  },
  {
    isPublished: true,
    category: "React",
    id: 12,
    name: "Portfolio Website",
    stacks: [reactLogo, tsLogo],
    github: "https://github.com/KeMezz/portfolio-website",
    website: "https://kemezz.github.io/portfolio-website/",
    thumbnail: portfolio,
  },
  {
    isPublished: true,
    category: "React",
    id: 11,
    name: "Trello 클론",
    stacks: [reactLogo, tsLogo],
    github: "https://github.com/KeMezz/dragndrop-todo",
    website: "https://kemezz.github.io/dragndrop-todo/",
    thumbnail: dnd,
  },
  {
    isPublished: true,
    category: "React",
    id: 10,
    name: "Netflix 클론",
    stacks: [reactLogo, tsLogo],
    github: "https://github.com/KeMezz/netflix-clone",
    website: "https://kemezz.github.io/netflix-clone/",
    thumbnail: netflix,
  },
  {
    isPublished: true,
    category: "React",
    id: 9,
    name: "Crypto Tracker",
    stacks: [reactLogo, tsLogo],
    github: "https://github.com/KeMezz/crypto-tracker-rebuild",
    website: "https://kemezz.github.io/crypto-tracker-rebuild/",
    thumbnail: cryptoTracker,
  },
  {
    isPublished: true,
    category: "Vanila JS",
    id: 8,
    name: "Donica Ida 클론",
    stacks: [htmlLogo, cssLogo, jsLogo, sassLogo],
    github: "https://github.com/KeMezz/donica-clone.github.io",
    website: "https://kemezz.github.io/donica-clone.github.io/",
    thumbnail: donica,
  },
  {
    isPublished: true,
    category: "Vanila JS",
    id: 7,
    name: "Nike 웹사이트 클론",
    stacks: [htmlLogo, cssLogo, jsLogo, sassLogo],
    github: "https://github.com/KeMezz/nike-clone.github.io",
    website: "https://kemezz.github.io/nike-clone.github.io/",
    thumbnail: nike,
  },
  {
    isPublished: true,
    category: "Vanila JS",
    id: 6,
    name: "Momentum 클론",
    stacks: [htmlLogo, cssLogo, jsLogo],
    github: "https://github.com/KeMezz/momentum_clone.github.io",
    website: "https://kemezz.github.io/momentum_clone.github.io/",
    thumbnail: momentum,
  },
  {
    isPublished: true,
    category: "CSS",
    id: 5,
    name: "Schwartzmedia 클론",
    stacks: [htmlLogo, cssLogo, sassLogo, jsLogo],
    github: "https://github.com/KeMezz/schwartzmedia.github.io",
    website: "https://kemezz.github.io/schwartzmedia.github.io/",
    thumbnail: schwartz,
  },
  {
    isPublished: true,
    category: "CSS",
    id: 4,
    name: "Tolv 클론",
    stacks: [htmlLogo, cssLogo, jsLogo],
    github: "https://github.com/KeMezz/tolv_clone.github.io",
    website: "https://kemezz.github.io/tolv_clone.github.io/",
    thumbnail: tolv,
  },
  {
    isPublished: true,
    category: "CSS",
    id: 3,
    name: "Zoo 클론",
    stacks: [htmlLogo, cssLogo, sassLogo],
    github: "https://github.com/KeMezz/zoo-clone.github.io",
    website: "https://kemezz.github.io/zoo-clone.github.io/",
    thumbnail: zoo,
  },
  {
    isPublished: true,
    category: "CSS",
    id: 2,
    name: "Best Horror Movies 클론",
    stacks: [htmlLogo, cssLogo, sassLogo],
    github: "https://github.com/KeMezz/horror-movies-clone.github.io",
    website: "https://kemezz.github.io/horror-movies-clone.github.io/",
    thumbnail: horrorMovies,
  },
  {
    isPublished: true,
    category: "CSS",
    id: 1,
    name: "RDA 클론",
    stacks: [htmlLogo, cssLogo, sassLogo],
    github:
      "https://github.com/KeMezz/rodic-davidson-architects_clone.github.io",
    website:
      "https://kemezz.github.io/rodic-davidson-architects_clone.github.io/",
    thumbnail: rodicDavidson,
  },
];
