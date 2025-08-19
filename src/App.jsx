import Navbar from "./Components/Navbar";
import Hero from "./Pages/Hero";
import About from "./Pages/About";
import Projects from "./Pages/Project";
import Resume from "./Pages/Resume";
import Contact from "./Pages/Contact";
import Footer from "./Pages/Footer";
import Skills from "./Pages/Skill";

function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <About />
        <Projects />
        <Resume />
        <Contact />
        </main>
      <Footer />
    </div>
  );
}

export default App;
