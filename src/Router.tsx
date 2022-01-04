import { Routes, Route, BrowserRouter } from "react-router-dom";
import Frame from "./Components/Frame";
import Contacts from "./Routes/Contacts";
import Home from "./Routes/Home";
import Hyeongjin from "./Routes/Hyeongjin";
import Projects from "./Routes/Projects";
import Stacks from "./Routes/Stacks";

function Router() {
  return (
    <BrowserRouter>
      <Frame />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/hyeongjin" element={<Hyeongjin />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/stacks" element={<Stacks />}></Route>
        <Route path="/contacts" element={<Contacts />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
