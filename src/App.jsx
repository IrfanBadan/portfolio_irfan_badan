import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";
import { useTheme } from "./context/ThemeContext";

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={`overflow-x-hidden antialiased transition-colors duration-300 ${theme === "dark"
        ? "text-neutral-300 selection:bg-cyan-300 selection:text-cyan-900"
        : "text-neutral-800 selection:bg-purple-300 selection:text-purple-900"
      }`}>
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className={`absolute top-0 z-[-2] h-screen w-screen transition-colors duration-300 ${theme === "dark"
            ? "bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"
            : "bg-neutral-50 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.15),rgba(255,255,255,0.5))]"
          }`}></div>
      </div>

      <div className="container mx-auto px-8">
        <Navbar />
        <Hero />
        <About />
        <Technologies />
        {/* <Experience /> */}
        <Projects />
        <Contact />
      </div>
    </div>
  );
};

export default App;
