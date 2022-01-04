import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { windowSize } from "./atom";
import Frame from "./Components/Frame";
import Contacts from "./Routes/Contacts";
import Home from "./Routes/Home";
import Hyeongjin from "./Routes/Hyeongjin";
import Projects from "./Routes/Projects";
import Stacks from "./Routes/Stacks";
import { useWindowSize } from "./useWindowSize";
import StacksDetail from "./Routes/StacksDetail";
import CSS from "./Routes/Projects/CSS";
import VanilaJS from "./Routes/Projects/VanilaJS";
import ReactJS from "./Routes/Projects/ReactJS";

function Router() {
  const size = useRecoilValue(windowSize);
  useWindowSize();
  return (
    <BrowserRouter>
      {size.width < 1200 ? null : <Frame />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hyeongjin" element={<Hyeongjin />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/vanilaJS" element={<VanilaJS />} />
        <Route path="/projects/reactJS" element={<ReactJS />} />
        <Route path="/projects/css" element={<CSS />} />
        <Route path="/stacks" element={<Stacks />} />
        <Route path="/stacks/:id" element={<StacksDetail />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
