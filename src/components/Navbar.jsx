import logo from "../assets/projects/logo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiVercel, SiNetlify } from "react-icons/si";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { useTheme } from "../context/ThemeContext";


const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img
          className="mx-2 w-10"
          src={logo}
          alt="logo"
          style={{ background: "transparent" }}
        />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/irfan-badan2305"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition-colors"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://github.com/IrfanBadan"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-300 transition-colors"
        >
          <FaGithub />
        </a>

        <a
          href="https://vercel.com/irfan-badan-s-projects"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-500 transition-colors"
        >
          <SiVercel />
        </a>

        <a
          href="https://app.netlify.com/teams/irfanbadan/projects"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-sky-400 transition-colors"
        >
          <SiNetlify />
        </a>

      </div>
    </nav>
  );
};

export default Navbar;



