import { Routes, Route, BrowserRouter } from "react-router-dom";
import Contacts from "./Routes/Contacts";
import Home from "./Routes/Home";
import Hyeongjin from "./Routes/Hyeongjin";
import Projects from "./Routes/Projects";
import Skills from "./Routes/Skills";
import NotFound from "./Routes/NotFound";
import Footer from "./Components/Footer";

function Router() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="hyeongjin" element={<Hyeongjin />} />
        <Route path="projects" element={<Projects />} />
        <Route path="projects/:projectId" element={<Projects />} />
        <Route path="skills" element={<Skills />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
