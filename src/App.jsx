import Home from './Pages/Home.jsx';
import Projects from './Pages/Projects.jsx';
import About from './Pages/About.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ScrollToTop from "./Components/ScrollToTop";

export default function App() {
  return (
    <div className="bg-[#FBFBF9]">
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
