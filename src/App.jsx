import React from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
 
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

function App() {
  return (<>
  
    <Routes>
      <Route path="/" element={<Landing />} />
 
      <Route path="/skills" element={<Skills />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<Contact />} />
    </Routes></>
  );
}

export default App;
