import "./app.scss";
import Portfolio from "./components/portfolio/Portfolio.jsx";
import Services from "./components/services/Services.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Navbar from "./components/Nnavbar/Navbar";
import Hero from "./components/hero/Hero";
import Parallax from "./components/parallax/Parallax";
import Cursor from "./components/cursor/Cursor.jsx";
const App = () => {
  return (
    <div>
      <Cursor/>
      <section id="Homepage">
        <Navbar />
         <Hero /> 
      </section>
      <section id="Services">
        <Parallax type="services" />
      </section> 
       <section>

        <Services />
      </section> 
      <section id="Portfolio">
        <Parallax type="portfolio" />
      </section>
      <Portfolio />
      <section id="Contact">
        <Contact />
      </section>  
      
    </div>
  );
};

export default App;
