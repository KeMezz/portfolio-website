import { useLayoutEffect } from "react";
import { useRecoilState } from "recoil";
import { windowSize } from "./atom";

export const useWindowSize = () => {
  const [size, setSize] = useRecoilState(windowSize);
  useLayoutEffect(() => {
    const updateSize = () => {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
};
