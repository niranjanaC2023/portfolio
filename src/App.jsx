import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Education from "./pages/Education";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/education" element={<Education />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />

        {/* fallback */}
        <Route path="*" element={<Home />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;