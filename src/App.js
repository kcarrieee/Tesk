import Main from "./pages/Main";
import Contact from "./pages/Contact";
import Opportunities from "./pages/Opportunities";
import About from "./pages/About";
import {BrowserRouter, Routes, Route } from 'react-router-dom';



function App() {
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/contact" element={<Contact />} />
        <Route path="/opportunities" element={<Opportunities/>} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
