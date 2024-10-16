import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    // To improve seo's we goona use semantic html
    <header className="header">
      <NavLink
        to="/"
        className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md"
      >
        <p className="blue-gradient_text">KT</p>
      </NavLink>
      <nav className="flex text-lg gap-7 font-medium">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-black"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-black"
          }
        >
          Projects
        </NavLink>
        <a href="https://www.linkedin.com/in/kartik-thakur-/" target="_blank">Linkedin</a>
      </nav>
    </header>
  );
};

export default Navbar;
