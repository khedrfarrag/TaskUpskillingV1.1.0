import './App.css';
// import Nav from './components/nav/Nav';
import  NavBar  from "./components/nav/NavBar.jsx";
import Home from "./components/home/Home.jsx"
import About from "./components/about/About.jsx"
import Services from "./components/services/Services.jsx"
import Contact from "./components/contact/Contact.jsx"
import Testymonials from "./components/testymonials/Testymonials.jsx"
import Footer from "./components/footer/Footer.jsx"
import Error404 from './components/Error/Error404.jsx';
//create route
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import { Contact } from './components/contact/Contact.jsx';

function App() {
  return (
    <>

      <div className="App">

        <BrowserRouter>
          <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />}/>
          <Route path="/services" element={<Services/>}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/testymonials" element={<Testymonials/>}/>
          <Route path='*' element={<Error404/>}/>
        </Routes>
        

        </BrowserRouter>

        <Footer />
      </div>

    </>
  );
}

export default App;
