import Home from "../features/Sections/Home/Home";
import About from "../features/Sections/About/About";
import Projects from "../features/Sections/Projects/Projects";
import Contact from "../features/Sections/Contact/Contact";
import Footer from "../features/Sections/Footer/Footer";
import Skills from "../features/Sections/Skills/Skills";

const Landing = () => {
  return (
    <div className="bg-darker">
      <Home />
      <About />
      {/* <Skills /> */}
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Landing;
