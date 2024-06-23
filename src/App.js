import Home from "./compenents/Home";
import Navbar from "./compenents/Navbar";
import About from "./compenents/About";
import Skills from "./compenents/Skills";
import Portfolio from "./compenents/Portfolio";
import Contact from "./compenents/Contact";
import Footer from "./compenents/Footer";
import WhatsApp from './assets/whatsapp.png';
import {Routes, Route} from 'react-router-dom';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} /> 
      <Route path="/about" element={<About />} /> 
      <Route path="/skills" element={<Skills />} /> 
      <Route path="/portfolio" element={<Portfolio />} /> 
      <Route path="/contact" element={<Contact />} /> 
      
      </Routes>
      <Footer />
      <div class="fixed bottom-8 pl-5" traget="_blank">
      <a href="https://wa.me/+923244929258?text=Hello How can I help you?" traget="_blank">
      <img src={WhatsApp} width="42" alt="whatsapp"/>
      </a>
      </div>
    </>
  );
}

export default App;
