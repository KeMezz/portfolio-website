import { atom } from "recoil";

export const dark = atom({
  key: "dark",
  default: false,
});

export const windowSize = atom({
  key: "windowSize",
  default: {
    width: window.innerWidth,
    height: window.innerHeight,
  },
});
