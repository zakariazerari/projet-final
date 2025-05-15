import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";



function Markup() {
  return (
    <div>
        <BrowserRouter>
      <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        
        {/* <Route path="*" element={<Nopage />} /> */}
      </Route>
    </Routes>
    </BrowserRouter>
     
      
    </div>
  );
}

export default Markup;
