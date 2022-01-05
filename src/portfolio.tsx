// 나중에 마저 변환해서 채워놓기 (horror, rodic)
// import horrorMovies from "./Images/c-horror-movies.webp";
// import rodicDavidson from "./Images/c-rodic-davidson-architects.webp";

import htmlLogo from "./Images/logo-html.png";
import cssLogo from "./Images/logo-css.png";
import jsLogo from "./Images/logo-js.png";
import tsLogo from "./Images/logo-typescript.png";
import sassLogo from "./Images/logo-scss.png";
import reactLogo from "./Images/logo-react.png";

import schwartz from "./Images/css-schwartz.webp";
import tolv from "./Images/css-tolv.webp";
import zoo from "./Images/css-zoo.webp";

import momentum from "./Images/js-momentum.webp";
import nike from "./Images/js-nike.webp";
import donica from "./Images/js-donica.webp";

import cryptoTracker from "./Images/react-cryptotracker.webp";
import dnd from "./Images/react-dnd.webp";

export const cssData = [
  {
    id: 1001,
    name: "Horror Movies Clone",
    desc: "호러 영화를 소개하는 웹사이트인 Horror Movies (https://besthorrorscenes.com/) 를 클론한 반응형 웹사이트입니다. 원본 웹사이트의 현재 모습과는 디자인 차이가 있을 수 있습니다. 자세한 설명은 Github 링크를 통해 확인해주시기 바랍니다.",
    stacks: [htmlLogo, cssLogo, sassLogo],
    github: "https://github.com/KeMezz/horror-movies-clone.github.io",
    website: "https://kemezz.github.io/horror-movies-clone.github.io/",
    thumbnail: zoo,
  },
  {
    id: 1002,
    name: "Rodic Davidson Architects Clone",
    desc: "Rodic Davidson Architects (https://rodicdavidson.co.uk/) 의 외관을 클론한 반응형 웹 사이트입니다. 원본 웹사이트의 현행 디자인과 다소 다른 부분이 있을 수 있습니다. 자세한 설명은 Github 링크를 통해 확인해주시기 바랍니다.",
    stacks: [htmlLogo, cssLogo, sassLogo],
    github:
      "https://github.com/KeMezz/rodic-davidson-architects_clone.github.io",
    website:
      "https://kemezz.github.io/rodic-davidson-architects_clone.github.io/",
    thumbnail: zoo,
  },
  {
    id: 1003,
    name: "Zoo Clone",
    desc: "",
    stacks: [htmlLogo, cssLogo, sassLogo],
    github: "https://github.com/KeMezz/zoo-clone.github.io",
    website: "https://kemezz.github.io/zoo-clone.github.io/",
    thumbnail: zoo,
  },
  {
    id: 1004,
    name: "Tolv Clone",
    desc: "덴마크의 가구 브랜드 Tolv (https://tolv.dk/) 의 외관을 클론한 반응형 웹사이트입니다. 자바스크립트는 헤더에만 아주 조금 사용되었습니다. 자세한 설명은 Github 링크를 통해 확인해주시기 바랍니다.",
    stacks: [htmlLogo, cssLogo, jsLogo],
    github: "https://github.com/KeMezz/momentum_clone.github.io",
    website: "https://kemezz.github.io/momentum_clone.github.io/",
    thumbnail: tolv,
  },
  {
    id: 1005,
    name: "Schwartzmedia Clone",
    desc: "",
    stacks: [htmlLogo, cssLogo, sassLogo, jsLogo],
    github: "https://github.com/KeMezz/schwartzmedia.github.io",
    website: "https://kemezz.github.io/schwartzmedia.github.io/",
    thumbnail: schwartz,
  },
];

export const vanilaJSData = [
  {
    id: 2001,
    name: "Momentum Clone",
    desc: "바닐라 자바스크립트를 이용해 크롬 확장기능 Momentum의 주요 기능을 클론한 웹앱이며, 외관만 직접 디자인했습니다. 시계, 할 일 관리 기능, 매번 무작위로 바뀌는 배경화면과 명언, 그리고 간단한 로그인과 로그아웃 기능 등을 제공합니다.",
    stacks: [htmlLogo, cssLogo, jsLogo],
    github: "https://github.com/KeMezz/momentum_clone.github.io",
    website: "https://kemezz.github.io/momentum_clone.github.io/",
    thumbnail: momentum,
  },
  {
    id: 2002,
    name: "Nike Clone",
    desc: "스포츠 의류 브랜드 나이키 (https://www.nike.com/kr/ko_kr/) 를 클론한 반응형 웹사이트입니다. 원본 웹사이트는 JQuery 등으로 인터랙션을 구현했지만, 클론 작업을 할 때는 바닐라 자바스크립트만을 이용해 좀 더 반응성 있게 구현해보고자 하였습니다.",
    stacks: [htmlLogo, cssLogo, jsLogo, sassLogo],
    github: "https://github.com/KeMezz/nike-clone.github.io",
    website: "https://kemezz.github.io/nike-clone.github.io/",
    thumbnail: nike,
  },
  {
    id: 2003,
    name: "Donica Ida Clone",
    desc: "Donica Ida (http://donicaida.com/) 포트폴리오를 클론한 반응형 웹사이트입니다. 단순한 구조의 사이트였기 때문에 라이브러리에 의존하지 않고 오직 바닐라 자바스크립트로만 구현하는 데 집중했습니다. 자세한 설명은 Github 링크를 통해 확인해주시기 바랍니다.",
    stacks: [htmlLogo, cssLogo, jsLogo, sassLogo],
    github: "https://github.com/KeMezz/donica-clone.github.io",
    website: "https://kemezz.github.io/donica-clone.github.io/",
    thumbnail: donica,
  },
];

export const reactJSData = [
  {
    id: 3001,
    name: "Crypto Tracker",
    desc: "코인 파프리카에서 제공받은 정보를 바탕으로 다양한 암호화폐 정보를 추적 및 검색할 수 있는 리액트 기반 반응형 웹 앱입니다. 무한 스크롤링, 검색, 다크 모드, 최근 2주간 가격 변동 차트 기능 등을 제공합니다.",
    stacks: [reactLogo, tsLogo],
    github: "https://github.com/KeMezz/crypto-tracker-rebuild",
    website: "https://kemezz.github.io/crypto-tracker-rebuild/",
    thumbnail: cryptoTracker,
  },
  {
    id: 3002,
    name: "Netflix Clone",
    desc: "다양한 영화나 TV 시리즈 정보를 열람할 수 있는 리액트 기반 웹앱니다. 대부분 디자인은 넷플릭스를 클론하여 가져왔습니다.",
    stacks: [reactLogo, tsLogo],
    github: "https://github.com/KeMezz/netflix-clone",
    website: "",
    thumbnail: cryptoTracker,
  },
  {
    id: 3003,
    name: "Trello Clone",
    desc: "React Beautiful Dnd를 이용하여 간단하게 Trello 할 일 관리 앱을 클론한 리액트 기반 반응형 웹 앱니다.",
    stacks: [reactLogo, tsLogo],
    github: "https://github.com/KeMezz/dragndrop-todo",
    website: "https://kemezz.github.io/dragndrop-todo/",
    thumbnail: dnd,
  },
  {
    id: 3004,
    name: "Portfolio Website",
    desc: "지금 보고 계시는 이 포트폴리오 웹사이트입니다. 직접 기획하고 디자인하였습니다. 아직 부족한 점도 아쉬운 점도 많지만 재미있게 봐주시길 바랍니다.",
    stacks: [reactLogo, tsLogo],
    github: "",
    website: "",
    thumbnail: cryptoTracker,
  },
];
